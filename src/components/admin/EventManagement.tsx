import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Pencil, Trash2, Upload } from 'lucide-react';
import { eventsApi, uploadImage } from '@/db/api';
import type { Event, Coordinator } from '@/types/index';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';

export default function EventManagement() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      name: '',
      type: 'Technical' as 'Technical' | 'Cultural',
      description: '',
      registration_link: '',
      image_url: '',
      staff_coordinators: [] as Coordinator[],
      student_coordinators: [] as Coordinator[]
    }
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const data = await eventsApi.getAll();
      setEvents(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load events',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const url = await uploadImage(file, 'app-9dfi9jpj51xd_events_images');
      form.setValue('image_url', url);
      toast({
        title: 'Success',
        description: 'Image uploaded successfully'
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload image',
        variant: 'destructive'
      });
    }
  };

  const handleSubmit = async (data: any) => {
    try {
      if (editingEvent) {
        await eventsApi.update(editingEvent.id, data);
        toast({
          title: 'Success',
          description: 'Event updated successfully'
        });
      } else {
        await eventsApi.create(data);
        toast({
          title: 'Success',
          description: 'Event created successfully'
        });
      }
      setDialogOpen(false);
      setEditingEvent(null);
      form.reset();
      loadEvents();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to save event',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    form.reset({
      name: event.name,
      type: event.type,
      description: event.description,
      registration_link: event.registration_link || '',
      image_url: event.image_url || '',
      staff_coordinators: event.staff_coordinators || [],
      student_coordinators: event.student_coordinators || []
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      await eventsApi.delete(id);
      toast({
        title: 'Success',
        description: 'Event deleted successfully'
      });
      loadEvents();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete event',
        variant: 'destructive'
      });
    }
  };

  const addCoordinator = (type: 'staff' | 'student') => {
    const field = type === 'staff' ? 'staff_coordinators' : 'student_coordinators';
    const current = form.getValues(field);
    form.setValue(field, [...current, { name: '', contact: '' }]);
  };

  const removeCoordinator = (type: 'staff' | 'student', index: number) => {
    const field = type === 'staff' ? 'staff_coordinators' : 'student_coordinators';
    const current = form.getValues(field);
    form.setValue(field, current.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Event Management</h2>
        <Dialog open={dialogOpen} onOpenChange={(open) => {
          setDialogOpen(open);
          if (!open) {
            setEditingEvent(null);
            form.reset();
          }
        }}>
          <DialogTrigger asChild>
            <Button className="glow-cyan">
              <Plus className="mr-2 h-4 w-4" />
              Add Event
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingEvent ? 'Edit Event' : 'Add New Event'}</DialogTitle>
              <DialogDescription>
                Fill in the event details below
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter event name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Event Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Technical">Technical</SelectItem>
                          <SelectItem value="Cultural">Cultural</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Enter event description" rows={4} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="registration_link"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Registration Link</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="https://forms.google.com/..." />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div>
                  <Label>Event Image</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="flex-1"
                    />
                    {form.watch('image_url') && (
                      <img src={form.watch('image_url')} alt="Preview" className="h-16 w-16 object-cover rounded" />
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Staff Coordinators</Label>
                    <Button type="button" size="sm" variant="outline" onClick={() => addCoordinator('staff')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {form.watch('staff_coordinators').map((coord, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        placeholder="Name"
                        value={coord.name}
                        onChange={(e) => {
                          const coords = form.getValues('staff_coordinators');
                          coords[index].name = e.target.value;
                          form.setValue('staff_coordinators', coords);
                        }}
                      />
                      <Input
                        placeholder="Contact"
                        value={coord.contact}
                        onChange={(e) => {
                          const coords = form.getValues('staff_coordinators');
                          coords[index].contact = e.target.value;
                          form.setValue('staff_coordinators', coords);
                        }}
                      />
                      <Button type="button" size="icon" variant="destructive" onClick={() => removeCoordinator('staff', index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Student Coordinators</Label>
                    <Button type="button" size="sm" variant="outline" onClick={() => addCoordinator('student')}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {form.watch('student_coordinators').map((coord, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <Input
                        placeholder="Name"
                        value={coord.name}
                        onChange={(e) => {
                          const coords = form.getValues('student_coordinators');
                          coords[index].name = e.target.value;
                          form.setValue('student_coordinators', coords);
                        }}
                      />
                      <Input
                        placeholder="Contact"
                        value={coord.contact}
                        onChange={(e) => {
                          const coords = form.getValues('student_coordinators');
                          coords[index].contact = e.target.value;
                          form.setValue('student_coordinators', coords);
                        }}
                      />
                      <Button type="button" size="icon" variant="destructive" onClick={() => removeCoordinator('student', index)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                <DialogFooter>
                  <Button type="submit" className="glow-purple">
                    {editingEvent ? 'Update Event' : 'Create Event'}
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Manage your fest events</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <p>Loading...</p>
          ) : events.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No events yet</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {events.map((event) => (
                  <TableRow key={event.id}>
                    <TableCell className="font-medium">{event.name}</TableCell>
                    <TableCell>
                      <Badge variant={event.type === 'Technical' ? 'default' : 'secondary'}>
                        {event.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="max-w-xs truncate">{event.description}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="icon" variant="outline" onClick={() => handleEdit(event)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="icon" variant="destructive" onClick={() => handleDelete(event.id)}>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

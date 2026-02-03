import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { passkeyApi } from '@/db/api';
import { useToast } from '@/hooks/use-toast';

interface ChatbotProps {
  onAuthenticated: () => void;
}

export default function Chatbot({ onAuthenticated }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [passkey, setPasskey] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passkey.trim()) return;

    setLoading(true);
    try {
      const isValid = await passkeyApi.validate(passkey);
      if (isValid) {
        toast({
          title: 'Success',
          description: 'Authentication successful! Opening admin dashboard...',
        });
        setIsOpen(false);
        setPasskey('');
        onAuthenticated();
      } else {
        toast({
          title: 'Error',
          description: 'Invalid passkey. Please try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to validate passkey. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating chatbot button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button
          size="lg"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-lg glow-cyan hover:scale-110 transition-transform"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </motion.div>

      {/* Chatbot dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 w-80"
          >
            <Card className="backdrop-blur-glass border-primary/50 shadow-2xl">
              <CardHeader className="border-b border-primary/20">
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Admin Access
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Enter your admin passkey to access the dashboard
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="password"
                      placeholder="Enter passkey..."
                      value={passkey}
                      onChange={(e) => setPasskey(e.target.value)}
                      disabled={loading}
                      className="border-primary/30 focus:border-primary"
                    />
                    <Button
                      type="submit"
                      className="w-full glow-purple"
                      disabled={loading || !passkey.trim()}
                    >
                      {loading ? 'Validating...' : 'Submit'}
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

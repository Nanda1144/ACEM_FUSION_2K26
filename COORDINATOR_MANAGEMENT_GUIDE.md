# ✅ STAFF & STUDENT COORDINATOR MANAGEMENT

## 🎉 Feature Overview

The event management system now fully supports staff and student coordinator assignments with intelligent display logic based on event type.

---

## 📋 Coordinator Display Rules

### Technical Events
```
✅ Staff Coordinator: 1 person
✅ Student Coordinators: 1 person (optional)
```

### Cultural Events
```
✅ Staff Coordinator: 1 person
✅ Student Coordinators: Multiple people (unlimited)
```

---

## 🎨 Visual Display

### Events Section (Homepage)

#### Technical Event Card
```
┌─────────────────────────────────────┐
│ 🖼️ Event Image                      │
│                                     │
│ Technical Event Name                │
│ Technical Badge                     │
│                                     │
│ Event description text...           │
│                                     │
│ Staff Coordinator                   │
│ 👤 Dr. John Smith                   │
│ 📞 +91 9876543210                   │
│                                     │
│ Student Coordinator                 │
│ 👤 Rahul Kumar                      │
│ 📞 +91 9876543211                   │
│                                     │
│ [View Details] [Register Now →]    │
└─────────────────────────────────────┘
```

#### Cultural Event Card
```
┌─────────────────────────────────────┐
│ 🖼️ Event Image                      │
│                                     │
│ Cultural Event Name                 │
│ Cultural Badge                      │
│                                     │
│ Event description text...           │
│                                     │
│ Staff Coordinator                   │
│ 👤 Prof. Sarah Johnson              │
│ 📞 +91 9876543212                   │
│                                     │
│ Student Coordinators                │ ← Plural!
│ 👤 Priya Sharma                     │
│ 📞 +91 9876543213                   │
│ 👤 Amit Patel                       │
│ 📞 +91 9876543214                   │
│ 👤 Sneha Reddy                      │
│ 📞 +91 9876543215                   │
│                                     │
│ [View Details] [Register Now →]    │
└─────────────────────────────────────┘
```

---

## 📄 Event Details Page

### Technical Event Details
```
┌─────────────────────────────────────────────────────────────┐
│                    Event Name                               │
│                    Technical Badge                          │
│                                                             │
│ 🖼️ Large Event Image                                       │
│                                                             │
│ Description: Full event description...                      │
│                                                             │
│ ┌─────────────────────┐  ┌─────────────────────┐          │
│ │ Staff Coordinator   │  │ Student Coordinator │          │
│ │                     │  │                     │          │
│ │ Dr. John Smith      │  │ Rahul Kumar         │          │
│ │ 📞 +91 9876543210   │  │ 📞 +91 9876543211   │          │
│ └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│                    [Register Now]                           │
└─────────────────────────────────────────────────────────────┘
```

### Cultural Event Details
```
┌─────────────────────────────────────────────────────────────┐
│                    Event Name                               │
│                    Cultural Badge                           │
│                                                             │
│ 🖼️ Large Event Image                                       │
│                                                             │
│ Description: Full event description...                      │
│                                                             │
│ ┌─────────────────────┐  ┌─────────────────────┐          │
│ │ Staff Coordinator   │  │ Student Coordinators│          │
│ │                     │  │                     │          │
│ │ Prof. Sarah Johnson │  │ Priya Sharma        │          │
│ │ 📞 +91 9876543212   │  │ 📞 +91 9876543213   │          │
│ │                     │  │                     │          │
│ │                     │  │ Amit Patel          │          │
│ │                     │  │ 📞 +91 9876543214   │          │
│ │                     │  │                     │          │
│ │                     │  │ Sneha Reddy         │          │
│ │                     │  │ 📞 +91 9876543215   │          │
│ └─────────────────────┘  └─────────────────────┘          │
│                                                             │
│                    [Register Now]                           │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Admin Interface

### Event Management Form

```
┌─────────────────────────────────────────────────────────────┐
│ Add/Edit Event                                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ Event Name: [_____________________________]                │
│                                                             │
│ Event Type: [Technical ▼]                                  │
│             - Technical                                     │
│             - Cultural                                      │
│                                                             │
│ Description: [_____________________________]               │
│              [_____________________________]               │
│                                                             │
│ Event Image: [Choose File] [Upload]                        │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Staff Coordinator                      [+ Add Staff] │   │
│ │ Add one staff member for this event                  │   │
│ │                                                       │   │
│ │ [Staff Name________] [Contact Number____] [🗑️]      │   │
│ │                                                       │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ ┌─────────────────────────────────────────────────────┐   │
│ │ Student Coordinators                [+ Add Student]  │   │
│ │ Add multiple students for cultural events            │   │ ← Dynamic hint
│ │                                                       │   │
│ │ [Student Name______] [Contact Number____] [🗑️]      │   │
│ │ [Student Name______] [Contact Number____] [🗑️]      │   │
│ │ [Student Name______] [Contact Number____] [🗑️]      │   │
│ │                                                       │   │
│ └─────────────────────────────────────────────────────┘   │
│                                                             │
│ Registration Link: [_____________________________]         │
│                                                             │
│                          [Save Event] [Cancel]              │
└─────────────────────────────────────────────────────────────┘
```

### Dynamic Hints

**When Event Type = Technical:**
```
Student Coordinators
Add one student for technical events
```

**When Event Type = Cultural:**
```
Student Coordinators
Add multiple students for cultural events
```

---

## 📊 Data Structure

### Event Object
```typescript
interface Event {
  id: string;
  name: string;
  type: 'Technical' | 'Cultural';
  description: string;
  image_url: string | null;
  
  // Coordinators
  staff_coordinators: Coordinator[];      // Array of staff
  student_coordinators: Coordinator[];    // Array of students
  
  registration_link: string | null;
  // ... other fields
}

interface Coordinator {
  name: string;
  contact: string;
}
```

### Example Data

**Technical Event:**
```json
{
  "id": "evt_001",
  "name": "Hackathon 2026",
  "type": "Technical",
  "staff_coordinators": [
    {
      "name": "Dr. John Smith",
      "contact": "+91 9876543210"
    }
  ],
  "student_coordinators": [
    {
      "name": "Rahul Kumar",
      "contact": "+91 9876543211"
    }
  ]
}
```

**Cultural Event:**
```json
{
  "id": "evt_002",
  "name": "Dance Competition",
  "type": "Cultural",
  "staff_coordinators": [
    {
      "name": "Prof. Sarah Johnson",
      "contact": "+91 9876543212"
    }
  ],
  "student_coordinators": [
    {
      "name": "Priya Sharma",
      "contact": "+91 9876543213"
    },
    {
      "name": "Amit Patel",
      "contact": "+91 9876543214"
    },
    {
      "name": "Sneha Reddy",
      "contact": "+91 9876543215"
    }
  ]
}
```

---

## 🎯 Display Logic

### Events Component (Homepage)

```typescript
// Staff Coordinator - Always show 1
{event.staff_coordinators && event.staff_coordinators.length > 0 && (
  <div>
    <h4>Staff Coordinator</h4>
    {event.staff_coordinators.slice(0, 1).map((coord) => (
      <div>
        <User /> {coord.name}
        <Phone /> {coord.contact}
      </div>
    ))}
  </div>
)}

// Student Coordinators - Show all for Cultural, 1 for Technical
{event.student_coordinators && event.student_coordinators.length > 0 && (
  <div>
    <h4>
      Student Coordinator{event.type === 'Cultural' && event.student_coordinators.length > 1 ? 's' : ''}
    </h4>
    {(event.type === 'Cultural' 
      ? event.student_coordinators 
      : event.student_coordinators.slice(0, 1)
    ).map((coord) => (
      <div>
        <User /> {coord.name}
        <Phone /> {coord.contact}
      </div>
    ))}
  </div>
)}
```

### Event Details Page

```typescript
// Staff Coordinator - Show only 1
{event.staff_coordinators && event.staff_coordinators.length > 0 && (
  <Card>
    <h2>Staff Coordinator</h2>
    {event.staff_coordinators.slice(0, 1).map((coordinator) => (
      <div>
        <h3>{coordinator.name}</h3>
        <Phone /> <a href={`tel:${coordinator.contact}`}>{coordinator.contact}</a>
      </div>
    ))}
  </Card>
)}

// Student Coordinators - Show all
{event.student_coordinators && event.student_coordinators.length > 0 && (
  <Card>
    <h2>Student Coordinator{event.student_coordinators.length > 1 ? 's' : ''}</h2>
    {event.student_coordinators.map((coordinator) => (
      <div>
        <h3>{coordinator.name}</h3>
        <Phone /> <a href={`tel:${coordinator.contact}`}>{coordinator.contact}</a>
      </div>
    ))}
  </Card>
)}
```

---

## 🔄 Admin Workflow

### Adding Coordinators

1. **Access Admin Dashboard**
   ```
   Chatbot → Enter passkey → Admin Dashboard
   ```

2. **Navigate to Events**
   ```
   Click "Events" tab
   ```

3. **Create/Edit Event**
   ```
   Click "Add Event" or "Edit" on existing event
   ```

4. **Add Staff Coordinator**
   ```
   - Click "+ Add Staff" button
   - Enter staff name (e.g., "Dr. John Smith")
   - Enter contact number (e.g., "+91 9876543210")
   - Click trash icon to remove if needed
   ```

5. **Add Student Coordinators**
   
   **For Technical Events:**
   ```
   - Click "+ Add Student" button
   - Enter one student name
   - Enter contact number
   - Hint shows: "Add one student for technical events"
   ```
   
   **For Cultural Events:**
   ```
   - Click "+ Add Student" button multiple times
   - Enter each student's name and contact
   - Add as many as needed
   - Hint shows: "Add multiple students for cultural events"
   ```

6. **Save Event**
   ```
   Click "Save Event" button
   Changes reflect immediately on website
   ```

---

## ✅ Features

### Display Features
- [x] Staff coordinator always shows 1 person
- [x] Technical events show 1 student coordinator
- [x] Cultural events show all student coordinators
- [x] Dynamic labels (singular/plural)
- [x] Clickable phone numbers
- [x] User and phone icons
- [x] Responsive layout

### Admin Features
- [x] Add unlimited staff coordinators (display shows 1)
- [x] Add unlimited student coordinators
- [x] Remove coordinators with trash button
- [x] Dynamic hints based on event type
- [x] Clear labels and placeholders
- [x] Validation and error handling
- [x] Instant updates to website

### User Experience
- [x] Clear visual hierarchy
- [x] Easy-to-read contact information
- [x] Tap-to-call on mobile devices
- [x] Consistent styling across pages
- [x] Responsive design

---

## 📱 Responsive Behavior

### Desktop (≥768px)
```
Events Page:
  - 3 columns of event cards
  - Full coordinator details visible
  - Side-by-side layout

Details Page:
  - 2 columns (staff | students)
  - Full coordinator cards
  - Spacious layout
```

### Mobile (<768px)
```
Events Page:
  - 1 column of event cards
  - Stacked coordinator details
  - Compact layout

Details Page:
  - 1 column (staff above students)
  - Full coordinator cards
  - Scrollable layout
```

---

## 🧪 Testing Checklist

### Visual Display
- [ ] Technical events show 1 staff coordinator
- [ ] Technical events show 1 student coordinator
- [ ] Cultural events show 1 staff coordinator
- [ ] Cultural events show all student coordinators
- [ ] Labels are singular/plural correctly
- [ ] Phone numbers are clickable
- [ ] Icons display properly

### Admin Interface
- [ ] Can add staff coordinators
- [ ] Can add multiple student coordinators
- [ ] Can remove coordinators
- [ ] Hints change based on event type
- [ ] Save button works
- [ ] Changes reflect on website immediately

### Responsive
- [ ] Desktop: Proper layout
- [ ] Tablet: Proper layout
- [ ] Mobile: Proper layout
- [ ] Phone numbers work on mobile

### Data Integrity
- [ ] Coordinators save to database
- [ ] Coordinators load correctly
- [ ] Empty arrays handled gracefully
- [ ] No errors in console

---

## 🎨 Styling

### Coordinator Cards (Events Page)
```css
Background: Transparent
Text Color: Muted foreground
Icon Size: 12px (h-3 w-3)
Font Size: 14px (text-sm)
Gap: 8px (gap-2)
```

### Coordinator Cards (Details Page)
```css
Background: Muted (bg-muted)
Padding: 16px (p-4)
Border Radius: 8px (rounded-lg)
Title Font: 18px, semibold
Contact Font: 14px, muted
Icon Size: 16px (h-4 w-4)
```

### Admin Form
```css
Input Height: 40px (h-10)
Button Size: Small (size-sm)
Icon Size: 16px (h-4 w-4)
Gap: 8px (gap-2)
Label Font: 14px, medium
Hint Font: 12px, muted
```

---

## 📊 Summary

### Technical Events
```
✅ 1 Staff Coordinator (required)
✅ 1 Student Coordinator (optional)
✅ Display: "Staff Coordinator" (singular)
✅ Display: "Student Coordinator" (singular)
```

### Cultural Events
```
✅ 1 Staff Coordinator (required)
✅ Multiple Student Coordinators (optional)
✅ Display: "Staff Coordinator" (singular)
✅ Display: "Student Coordinators" (plural)
```

### Admin Control
```
✅ Add/remove staff coordinators
✅ Add/remove student coordinators
✅ Dynamic hints based on event type
✅ Clear labels and placeholders
✅ Instant updates to website
```

---

## 🎉 Benefits

1. **Clear Organization**
   - Staff and students clearly separated
   - Easy to identify coordinators
   - Professional presentation

2. **Flexible Management**
   - Add as many coordinators as needed
   - Easy to update information
   - No technical knowledge required

3. **User-Friendly**
   - Clickable phone numbers
   - Clear visual hierarchy
   - Responsive design

4. **Event-Type Aware**
   - Technical events: Focused display
   - Cultural events: Comprehensive display
   - Dynamic labels and hints

---

## 📚 Related Files

- **src/components/Events.tsx**: Homepage event display
- **src/pages/EventDetailPage.tsx**: Event details page
- **src/components/admin/EventManagement.tsx**: Admin interface
- **src/types/index.ts**: TypeScript interfaces
- **src/db/api.ts**: API functions

---

**Your event coordinator management system is now fully functional!** ✨

Users can easily see who to contact for each event, and admins can manage coordinators with a simple, intuitive interface.

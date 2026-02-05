import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Calendar, Users, Image as ImageIcon, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { passkeyApi } from '@/db/api';
import { useToast } from '@/hooks/use-toast';

interface ChatbotProps {
  onAuthenticated: () => void;
}

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: { label: string; value: string; icon?: React.ReactNode }[];
}

export default function Chatbot({ onAuthenticated }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(
          "👋 Welcome to Fusion26! I'm your virtual assistant. How can I help you today?",
          [
            { label: 'About Fusion26', value: 'about', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Committee Info', value: 'committee', icon: <Users className="h-4 w-4" /> },
            { label: 'Gallery', value: 'gallery', icon: <ImageIcon className="h-4 w-4" /> },
          ]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (content: string, options?: Message['options']) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      options,
    };
    setMessages((prev) => [...prev, message]);
  };

  const addUserMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const simulateTyping = async (duration = 1000) => {
    setIsTyping(true);
    await new Promise((resolve) => setTimeout(resolve, duration));
    setIsTyping(false);
  };

  const handleOptionClick = async (value: string, label: string) => {
    addUserMessage(label);
    await simulateTyping(800);

    switch (value) {
      case 'about':
        addBotMessage(
          "🎉 Fusion26 is our annual college fest - a spectacular celebration of talent, creativity, and innovation! We bring together students from across the region for an unforgettable experience filled with competitions, performances, workshops, and fun activities.\n\nWhat would you like to know more about?",
          [
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Meet the Team', value: 'committee', icon: <Users className="h-4 w-4" /> },
            { label: 'Contact Us', value: 'contact', icon: <Info className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'events':
        addBotMessage(
          "📅 We have exciting events across multiple categories:\n\n🔧 Technical Events:\n• Coding competitions\n• Hackathons\n• Tech talks\n• Robotics challenges\n\n🎭 Cultural Events:\n• Dance performances\n• Music concerts\n• Drama competitions\n• Art exhibitions\n\nScroll through our Events section to see all details and register!",
          [
            { label: 'How to Register?', value: 'register', icon: <Info className="h-4 w-4" /> },
            { label: 'Event Schedule', value: 'schedule', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'committee':
        addBotMessage(
          "👥 Our dedicated committee members work tirelessly to make Fusion26 a success!\n\nYou can find detailed information about our:\n• Faculty coordinators\n• Student coordinators\n• Event managers\n• Technical team\n\nCheck out the Committee section to meet the entire team!",
          [
            { label: 'View Gallery', value: 'gallery', icon: <ImageIcon className="h-4 w-4" /> },
            { label: 'Contact Team', value: 'contact', icon: <Info className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'gallery':
        addBotMessage(
          "📸 Check out our amazing gallery showcasing:\n• Previous fest highlights\n• Event moments\n• Award ceremonies\n• Behind-the-scenes\n• Team celebrations\n\nVisit the Gallery section to see all the memorable moments!",
          [
            { label: 'About Fusion26', value: 'about', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'register':
        addBotMessage(
          "📝 Registration is easy!\n\n1. Browse through our Events section\n2. Click on the event you're interested in\n3. Click the 'Register' button\n4. Fill out the Google Form\n5. Submit and you're done!\n\nEach event has its own registration link. Make sure to register before the deadline!",
          [
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Contact Support', value: 'contact', icon: <Info className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'schedule':
        addBotMessage(
          "📆 Event schedules are available on each event card in the Events section. You'll find:\n• Event date and time\n• Venue information\n• Duration\n• Registration deadline\n\nStay tuned to our social media for live updates during the fest!",
          [
            { label: 'Social Media', value: 'contact', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'contact':
        addBotMessage(
          "📞 Get in touch with us:\n\n📧 Email: Check the Contact section\n📱 Social Media:\n• Instagram\n• LinkedIn\n• WhatsApp\n• Facebook\n\nAll contact details and social media links are available in the Contact section at the bottom of the page!",
          [
            { label: 'About Fusion26', value: 'about', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
        break;

      case 'admin':
        addBotMessage(
          "🔐 Admin Access\n\nTo access the admin dashboard, please enter your admin passkey below.\n\nNote: This area is restricted to authorized personnel only.",
          []
        );
        break;

      case 'menu':
        addBotMessage(
          "How can I help you?",
          [
            { label: 'About Fusion26', value: 'about', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Committee Info', value: 'committee', icon: <Users className="h-4 w-4" /> },
            { label: 'Gallery', value: 'gallery', icon: <ImageIcon className="h-4 w-4" /> },
          ]
        );
        break;

      default:
        addBotMessage(
          "I'm not sure about that. Let me show you what I can help with!",
          [
            { label: 'About Fusion26', value: 'about', icon: <Info className="h-4 w-4" /> },
            { label: 'View Events', value: 'events', icon: <Calendar className="h-4 w-4" /> },
            { label: 'Committee Info', value: 'committee', icon: <Users className="h-4 w-4" /> },
            { label: 'Gallery', value: 'gallery', icon: <ImageIcon className="h-4 w-4" /> },
          ]
        );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userInput = input.trim();
    setInput('');
    addUserMessage('••••••••••••'); // Show masked passkey
    setLoading(true);
    await simulateTyping(500);

    try {
      const isValid = await passkeyApi.validate(userInput);
      if (isValid) {
        addBotMessage(
          "✅ Authentication successful! Opening admin dashboard...",
          []
        );
        toast({
          title: 'Success',
          description: 'Welcome, Admin!',
        });
        setTimeout(() => {
          setIsOpen(false);
          onAuthenticated();
        }, 1000);
      } else {
        addBotMessage(
          "❌ Invalid passkey. Please try again or contact the administrator.",
          [
            { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
          ]
        );
      }
    } catch (error) {
      addBotMessage(
        "❌ Failed to validate passkey. Please check your connection and try again.",
        [
          { label: 'Back to Menu', value: 'menu', icon: <MessageCircle className="h-4 w-4" /> },
        ]
      );
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset state after animation
    setTimeout(() => {
      setMessages([]);
      setInput('');
    }, 300);
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
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="backdrop-blur-glass border-primary/50 shadow-2xl">
              <CardHeader className="border-b border-primary/20 pb-4">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-primary" />
                    <span>Fusion26 Assistant</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClose}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                {/* Messages area */}
                <ScrollArea className="h-96 p-4" ref={scrollRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex gap-2 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.type === 'bot' && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-primary" />
                          </div>
                        )}
                        <div className={`flex flex-col gap-2 max-w-[80%]`}>
                          <div
                            className={`rounded-lg p-3 ${
                              message.type === 'user'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-muted'
                            }`}
                          >
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                          </div>
                          {message.options && message.options.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {message.options.map((option) => (
                                <Button
                                  key={option.value}
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleOptionClick(option.value, option.label)}
                                  className="text-xs h-8"
                                >
                                  {option.icon && <span className="mr-1">{option.icon}</span>}
                                  {option.label}
                                </Button>
                              ))}
                            </div>
                          )}
                        </div>
                        {message.type === 'user' && (
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-2 justify-start"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                        <div className="bg-muted rounded-lg p-3">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input area */}
                <div className="border-t border-primary/20 p-4">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      type="password"
                      placeholder="Enter admin passkey..."
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      disabled={loading}
                      className="border-primary/30 focus:border-primary"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={loading || !input.trim()}
                      className="glow-purple flex-shrink-0"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {'🔒 Enter your admin passkey to access the dashboard'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

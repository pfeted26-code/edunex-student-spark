import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageSquare, Clock, User, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Messages = () => {
  const [showCompose, setShowCompose] = useState(false);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const messages = [
    {
      id: 1,
      from: "Dr. Sarah Johnson",
      role: "Instructor - CS101",
      subject: "Assignment Feedback",
      preview: "Great work on your latest assignment! I have a few suggestions...",
      date: "2025-10-28",
      unread: true,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      from: "Admin Office",
      role: "Administration",
      subject: "Schedule Change Notice",
      preview: "Please be informed that the class schedule for next week has been updated...",
      date: "2025-10-27",
      unread: true,
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      from: "Prof. Michael Chen",
      role: "Instructor - MATH201",
      subject: "Extra Credit Opportunity",
      preview: "I'm offering an extra credit assignment for those interested in...",
      date: "2025-10-26",
      unread: false,
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      from: "Student Council",
      role: "Student Organization",
      subject: "Upcoming Event",
      preview: "Join us for the annual tech fest next month! Registration is now open...",
      date: "2025-10-25",
      unread: false,
      color: "from-success to-green-600"
    },
    {
      id: 5,
      from: "Dr. Emily Rodriguez",
      role: "Instructor - PHY101",
      subject: "Lab Report Due Date",
      preview: "Reminder: Your physics lab report is due this Friday. Please make sure...",
      date: "2025-10-24",
      unread: false,
      color: "from-warning to-orange-600"
    },
  ];

  const handleSendMessage = () => {
    if (!recipient || !subject || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before sending.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent",
      description: `Your message has been sent to ${recipient}.`,
    });

    setShowCompose(false);
    setRecipient("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Messages
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay connected with your instructors and peers
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
            onClick={() => setShowCompose(true)}
          >
            <Send className="h-4 w-4 mr-2" />
            Compose
          </Button>
        </div>

        {/* Message Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
          <Card className="p-6 border-none bg-gradient-to-br from-card to-primary/5">
            <MessageSquare className="h-5 w-5 text-primary mb-2" />
            <div className="text-2xl font-bold mb-1">{messages.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-accent/5">
            <div className="h-5 w-5 rounded-full bg-accent mb-2" />
            <div className="text-2xl font-bold mb-1">
              {messages.filter(m => m.unread).length}
            </div>
            <div className="text-sm text-muted-foreground">Unread</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-success/5">
            <User className="h-5 w-5 text-success mb-2" />
            <div className="text-2xl font-bold mb-1">8</div>
            <div className="text-sm text-muted-foreground">Contacts</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-secondary/5">
            <Clock className="h-5 w-5 text-secondary mb-2" />
            <div className="text-2xl font-bold mb-1">Today</div>
            <div className="text-sm text-muted-foreground">Latest</div>
          </Card>
        </div>

        {/* Messages List */}
        <div className="space-y-3">
          {messages.map((message, index) => (
            <Card 
              key={message.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-none overflow-hidden relative cursor-pointer ${
                message.unread ? "bg-primary/5" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${message.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${message.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                  <User className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className={`font-bold group-hover:text-primary transition-colors ${
                          message.unread ? "text-foreground" : "text-muted-foreground"
                        }`}>
                          {message.from}
                        </h3>
                        {message.unread && (
                          <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {message.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {new Date(message.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <h4 className={`font-semibold mb-2 ${
                    message.unread ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {message.subject}
                  </h4>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {message.preview}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Compose Message Dialog */}
        <Dialog open={showCompose} onOpenChange={setShowCompose}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                <span>Compose New Message</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowCompose(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="recipient">To *</Label>
                <Select value={recipient} onValueChange={setRecipient}>
                  <SelectTrigger id="recipient">
                    <SelectValue placeholder="Select recipient" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dr-sarah">Dr. Sarah Johnson (CS101)</SelectItem>
                    <SelectItem value="prof-michael">Prof. Michael Chen (MATH201)</SelectItem>
                    <SelectItem value="dr-emily">Dr. Emily Rodriguez (PHY101)</SelectItem>
                    <SelectItem value="dr-james">Dr. James Wilson (Network Security)</SelectItem>
                    <SelectItem value="dr-amanda">Dr. Amanda Lee (Cryptography)</SelectItem>
                    <SelectItem value="dr-robert">Dr. Robert Taylor (Machine Learning)</SelectItem>
                    <SelectItem value="prof-lisa">Prof. Lisa Anderson (Data Analytics)</SelectItem>
                    <SelectItem value="admin">Admin Office</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Message subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-[200px]"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Tip:</strong> Be clear and concise in your message. 
                  Include relevant course codes or reference numbers if applicable.
                  You should receive a response within 24-48 hours.
                </p>
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-secondary"
                  onClick={handleSendMessage}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowCompose(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Messages;

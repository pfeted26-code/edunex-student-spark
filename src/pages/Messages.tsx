import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageSquare, Clock, User, Send, X, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Messages = () => {
  const [showCompose, setShowCompose] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState<number | null>(1);
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const conversations = [
    {
      id: 1,
      from: "Dr. Sarah Johnson",
      role: "Instructor - CS101",
      subject: "Assignment Feedback",
      preview: "Great work on your latest assignment! I have a few suggestions...",
      lastMessageTime: "10:30 AM",
      unread: true,
      avatar: "SJ"
    },
    {
      id: 2,
      from: "Admin Office",
      role: "Administration",
      subject: "Schedule Change Notice",
      preview: "Please be informed that the class schedule for next week has been updated...",
      lastMessageTime: "Yesterday",
      unread: true,
      avatar: "AO"
    },
    {
      id: 3,
      from: "Prof. Michael Chen",
      role: "Instructor - MATH201",
      subject: "Extra Credit Opportunity",
      preview: "I'm offering an extra credit assignment for those interested in...",
      lastMessageTime: "Oct 26",
      unread: false,
      avatar: "MC"
    },
    {
      id: 4,
      from: "Student Council",
      role: "Student Organization",
      subject: "Upcoming Event",
      preview: "Join us for the annual tech fest next month! Registration is now open...",
      lastMessageTime: "Oct 25",
      unread: false,
      avatar: "SC"
    },
    {
      id: 5,
      from: "Dr. Emily Rodriguez",
      role: "Instructor - PHY101",
      subject: "Lab Report Due Date",
      preview: "Reminder: Your physics lab report is due this Friday. Please make sure...",
      lastMessageTime: "Oct 24",
      unread: false,
      avatar: "ER"
    },
  ];

  const getConversationMessages = (conversationId: number) => {
    const messageThreads: Record<number, Array<{ id: number; sender: string; content: string; time: string; isOwn: boolean }>> = {
      1: [
        { id: 1, sender: "Dr. Sarah Johnson", content: "Hi! I've reviewed your latest assignment submission.", time: "10:15 AM", isOwn: false },
        { id: 2, sender: "You", content: "Thank you for taking the time to review it!", time: "10:20 AM", isOwn: true },
        { id: 3, sender: "Dr. Sarah Johnson", content: "Great work on your latest assignment! I have a few suggestions for improvement. Your analysis was thorough, but consider adding more examples.", time: "10:30 AM", isOwn: false },
      ],
      2: [
        { id: 1, sender: "Admin Office", content: "Please be informed that the class schedule for next week has been updated due to the upcoming holiday.", time: "9:00 AM", isOwn: false },
        { id: 2, sender: "Admin Office", content: "The updated schedule has been posted on the student portal.", time: "9:05 AM", isOwn: false },
      ],
      3: [
        { id: 1, sender: "Prof. Michael Chen", content: "I'm offering an extra credit assignment for those interested in exploring advanced topics.", time: "2:30 PM", isOwn: false },
      ],
    };
    return messageThreads[conversationId] || [];
  };

  const filteredConversations = conversations.filter(conv => 
    conv.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const handleSendReply = () => {
    if (!replyMessage.trim()) {
      toast({
        title: "Empty Message",
        description: "Please type a message before sending.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Reply Sent",
      description: "Your reply has been sent successfully.",
    });

    setReplyMessage("");
  };

  const selectedConv = conversations.find(c => c.id === selectedConversation);
  const currentMessages = selectedConversation ? getConversationMessages(selectedConversation) : [];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Messages
            </h1>
            <p className="text-muted-foreground text-lg">
              Stay connected with your instructors and peers
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            onClick={() => setShowCompose(true)}
          >
            <Send className="h-4 w-4 mr-2" />
            New Message
          </Button>
        </div>

        {/* Messaging Interface */}
        <div className="grid md:grid-cols-3 gap-6 h-[calc(100vh-250px)]">
          {/* Conversations List */}
          <Card className="md:col-span-1 flex flex-col">
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-2">
                {filteredConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => setSelectedConversation(conv.id)}
                    className={`p-4 rounded-lg mb-2 cursor-pointer transition-colors ${
                      selectedConversation === conv.id
                        ? "bg-primary/10 border-l-4 border-primary"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold flex-shrink-0">
                        {conv.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className={`font-semibold text-sm truncate ${
                            conv.unread ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {conv.from}
                          </h4>
                          <span className="text-xs text-muted-foreground flex-shrink-0">
                            {conv.lastMessageTime}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-1">{conv.role}</p>
                        <p className={`text-sm truncate ${
                          conv.unread ? "font-medium text-foreground" : "text-muted-foreground"
                        }`}>
                          {conv.preview}
                        </p>
                        {conv.unread && (
                          <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {/* Message Thread */}
          <Card className="md:col-span-2 flex flex-col">
            {selectedConv ? (
              <>
                {/* Thread Header */}
                <div className="p-4 border-b flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                    {selectedConv.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{selectedConv.from}</h3>
                    <p className="text-sm text-muted-foreground">{selectedConv.role}</p>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="inline-block px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                        {selectedConv.subject}
                      </div>
                    </div>
                    {currentMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`max-w-[70%] ${msg.isOwn ? "order-2" : "order-1"}`}>
                          <div
                            className={`rounded-lg p-3 ${
                              msg.isOwn
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted"
                            }`}
                          >
                            <p className="text-sm">{msg.content}</p>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 px-1">
                            {msg.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Reply Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={replyMessage}
                      onChange={(e) => setReplyMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendReply()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendReply}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground">
                <div className="text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Select a conversation to view messages</p>
                </div>
              </div>
            )}
          </Card>
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

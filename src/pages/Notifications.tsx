import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle2, AlertCircle, Info, Clock, Trash2 } from "lucide-react";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      title: "Assignment Submitted",
      message: "Your Computer Science assignment has been successfully submitted.",
      date: "2025-10-28 14:30",
      unread: true,
      icon: CheckCircle2,
      color: "from-success to-green-600"
    },
    {
      id: 2,
      type: "warning",
      title: "Upcoming Exam",
      message: "You have a Mathematics exam scheduled for November 15, 2025.",
      date: "2025-10-28 10:00",
      unread: true,
      icon: AlertCircle,
      color: "from-warning to-orange-600"
    },
    {
      id: 3,
      type: "info",
      title: "New Course Material",
      message: "New lecture notes have been uploaded for Physics Fundamentals.",
      date: "2025-10-27 16:20",
      unread: true,
      icon: Info,
      color: "from-primary to-primary-dark"
    },
    {
      id: 4,
      type: "success",
      title: "Grade Posted",
      message: "Your grade for English Literature essay has been posted. Check your scores!",
      date: "2025-10-27 09:15",
      unread: false,
      icon: CheckCircle2,
      color: "from-success to-green-600"
    },
    {
      id: 5,
      type: "info",
      title: "Schedule Update",
      message: "Data Structures class on Friday has been moved to Room 305.",
      date: "2025-10-26 18:45",
      unread: false,
      icon: Info,
      color: "from-secondary to-blue-600"
    },
    {
      id: 6,
      type: "warning",
      title: "Attendance Alert",
      message: "Your attendance in Physics is below 90%. Please maintain regular attendance.",
      date: "2025-10-26 12:00",
      unread: false,
      icon: AlertCircle,
      color: "from-destructive to-red-600"
    },
    {
      id: 7,
      type: "success",
      title: "Request Approved",
      message: "Your stage request for summer internship has been approved.",
      date: "2025-10-25 15:30",
      unread: false,
      icon: CheckCircle2,
      color: "from-success to-green-600"
    },
    {
      id: 8,
      type: "info",
      title: "Library Book Due",
      message: "Your borrowed book 'Introduction to Algorithms' is due in 3 days.",
      date: "2025-10-25 08:00",
      unread: false,
      icon: Info,
      color: "from-accent to-pink-600"
    },
  ];

  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Notifications
              </h1>
              {unreadCount > 0 && (
                <Badge className="bg-accent text-accent-foreground">
                  {unreadCount} new
                </Badge>
              )}
            </div>
            <p className="text-muted-foreground text-lg">
              Stay updated with your academic activities
            </p>
          </div>
          <Button variant="outline">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
        </div>

        {/* Notification Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
          <Card className="p-6 border-none bg-gradient-to-br from-card to-muted/30">
            <Bell className="h-5 w-5 text-primary mb-2" />
            <div className="text-2xl font-bold mb-1">{notifications.length}</div>
            <div className="text-sm text-muted-foreground">Total</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-accent/5">
            <div className="h-5 w-5 rounded-full bg-accent mb-2" />
            <div className="text-2xl font-bold mb-1">{unreadCount}</div>
            <div className="text-sm text-muted-foreground">Unread</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-success/5">
            <CheckCircle2 className="h-5 w-5 text-success mb-2" />
            <div className="text-2xl font-bold mb-1">
              {notifications.filter(n => n.type === "success").length}
            </div>
            <div className="text-sm text-muted-foreground">Success</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-warning/5">
            <AlertCircle className="h-5 w-5 text-warning mb-2" />
            <div className="text-2xl font-bold mb-1">
              {notifications.filter(n => n.type === "warning").length}
            </div>
            <div className="text-sm text-muted-foreground">Alerts</div>
          </Card>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <Card 
                key={notification.id}
                style={{ animationDelay: `${index * 0.05}s` }}
                className={`group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-none overflow-hidden relative ${
                  notification.unread ? "bg-primary/5" : ""
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${notification.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10 flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${notification.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-bold ${
                            notification.unread ? "text-foreground" : "text-muted-foreground"
                          }`}>
                            {notification.title}
                          </h3>
                          {notification.unread && (
                            <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                          )}
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="flex-shrink-0 hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <p className={`mb-3 ${
                      notification.unread ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {notification.message}
                    </p>
                    
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {new Date(notification.date).toLocaleString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

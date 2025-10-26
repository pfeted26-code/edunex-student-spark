import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  UserCheck, 
  Send, 
  MessageSquare, 
  Bell,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";

const Dashboard = () => {
  const dashboardCards = [
    {
      title: "My Courses",
      description: "Access your course materials",
      icon: BookOpen,
      link: "/courses",
      color: "from-primary to-primary-dark",
      count: "12 Courses"
    },
    {
      title: "Timetable",
      description: "Check your schedule",
      icon: Calendar,
      link: "/timetable",
      color: "from-accent to-pink-600",
      count: "This Week"
    },
    {
      title: "Exams & Notes",
      description: "View grades and exams",
      icon: Award,
      link: "/exams",
      color: "from-success to-green-600",
      count: "3 Upcoming"
    },
    {
      title: "Attendance",
      description: "Track your presence",
      icon: UserCheck,
      link: "/attendance",
      color: "from-warning to-orange-600",
      count: "94% Rate"
    },
    {
      title: "Requests",
      description: "Manage your requests",
      icon: Send,
      link: "/requests",
      color: "from-purple-500 to-purple-700",
      count: "2 Pending"
    },
    {
      title: "Messages",
      description: "Read your messages",
      icon: MessageSquare,
      link: "/messages",
      color: "from-blue-500 to-blue-700",
      count: "5 New"
    },
    {
      title: "Notifications",
      description: "Check notifications",
      icon: Bell,
      link: "/notifications",
      color: "from-red-500 to-red-700",
      count: "8 Unread"
    },
  ];

  const stats = [
    { label: "Overall GPA", value: "3.85", icon: TrendingUp, color: "text-success" },
    { label: "Attendance", value: "94%", icon: UserCheck, color: "text-primary" },
    { label: "Hours Studied", value: "124h", icon: Clock, color: "text-secondary" },
    { label: "Achievements", value: "12", icon: Award, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Welcome back, Student!
          </h1>
          <p className="text-muted-foreground text-lg">
            Here's what's happening with your studies today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-card to-muted/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Main Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Link 
                key={index} 
                to={card.link}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="animate-scale-in"
              >
                <Card className="group h-full p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-card overflow-hidden relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm">
                      {card.description}
                    </p>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${card.color} text-white text-sm font-medium`}>
                      {card.count}
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="mt-8 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-primary/5">
              <h3 className="font-semibold mb-2">Submit Assignment</h3>
              <p className="text-sm text-muted-foreground">Upload your latest work</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-secondary/5">
              <h3 className="font-semibold mb-2">Request Certificate</h3>
              <p className="text-sm text-muted-foreground">Get official documents</p>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5">
              <h3 className="font-semibold mb-2">Book Appointment</h3>
              <p className="text-sm text-muted-foreground">Meet with advisor</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

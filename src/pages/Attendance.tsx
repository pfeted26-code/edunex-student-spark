import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Clock, TrendingUp } from "lucide-react";

const Attendance = () => {
  const courses = [
    {
      id: 1,
      name: "Computer Science 101",
      present: 28,
      absent: 2,
      total: 30,
      percentage: 93,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      name: "Mathematics Advanced",
      present: 24,
      absent: 1,
      total: 25,
      percentage: 96,
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      name: "Physics Fundamentals",
      present: 26,
      absent: 4,
      total: 30,
      percentage: 87,
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      name: "English Literature",
      present: 22,
      absent: 3,
      total: 25,
      percentage: 88,
      color: "from-success to-green-600"
    },
    {
      id: 5,
      name: "Data Structures",
      present: 27,
      absent: 1,
      total: 28,
      percentage: 96,
      color: "from-purple-500 to-purple-700"
    },
  ];

  const recentAttendance = [
    { date: "2025-10-28", course: "Computer Science 101", status: "Present" },
    { date: "2025-10-27", course: "Mathematics Advanced", status: "Present" },
    { date: "2025-10-26", course: "Physics Fundamentals", status: "Absent" },
    { date: "2025-10-25", course: "English Literature", status: "Present" },
    { date: "2025-10-24", course: "Data Structures", status: "Present" },
  ];

  const overallPercentage = Math.round(
    (courses.reduce((acc, c) => acc + c.present, 0) / 
     courses.reduce((acc, c) => acc + c.total, 0)) * 100
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Attendance
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your class attendance and presence record
          </p>
        </div>

        {/* Overall Stats */}
        <Card className="p-8 mb-8 animate-fade-in-up border-none bg-gradient-to-br from-card to-primary/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Overall Attendance</h2>
              <p className="text-muted-foreground">
                You're doing great! Keep maintaining your attendance.
              </p>
            </div>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">
                  {overallPercentage}%
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  Attendance Rate
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Course-wise Attendance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors flex-1">
                    {course.name}
                  </h3>
                  <Badge 
                    variant={course.percentage >= 90 ? "default" : course.percentage >= 75 ? "secondary" : "destructive"}
                    className={course.percentage >= 90 ? "bg-success text-success-foreground" : ""}
                  >
                    {course.percentage}%
                  </Badge>
                </div>

                <Progress value={course.percentage} className="h-2 mb-4" />

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-success">
                      <CheckCircle2 className="h-4 w-4" />
                      <span className="font-medium">{course.present} Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-destructive">
                      <XCircle className="h-4 w-4" />
                      <span className="font-medium">{course.absent} Absent</span>
                    </div>
                  </div>
                  <span className="text-muted-foreground">
                    {course.total} Total
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Attendance */}
        <Card className="p-6 animate-fade-in-up border-none">
          <h2 className="text-2xl font-bold mb-6">Recent Attendance</h2>
          <div className="space-y-3">
            {recentAttendance.map((record, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:shadow-md transition-all bg-card"
              >
                <div className="flex items-center gap-4">
                  {record.status === "Present" ? (
                    <CheckCircle2 className="h-6 w-6 text-success" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive" />
                  )}
                  <div>
                    <h4 className="font-semibold">{record.course}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      {new Date(record.date).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <Badge 
                  variant={record.status === "Present" ? "default" : "destructive"}
                  className={record.status === "Present" ? "bg-success text-success-foreground" : ""}
                >
                  {record.status}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Attendance;

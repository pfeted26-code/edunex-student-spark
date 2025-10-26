import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, Clock, TrendingUp, Calendar } from "lucide-react";

const Attendance = () => {
  const courses = [
    {
      id: 1,
      name: "Advanced JavaScript",
      code: "CS301",
      present: 28,
      absent: 2,
      total: 30,
      percentage: 93,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      name: "Web Development",
      code: "CS101",
      present: 24,
      absent: 1,
      total: 25,
      percentage: 96,
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      name: "Network Security",
      code: "SEC201",
      present: 26,
      absent: 4,
      total: 30,
      percentage: 87,
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      name: "Machine Learning",
      code: "DS301",
      present: 22,
      absent: 3,
      total: 25,
      percentage: 88,
      color: "from-success to-green-600"
    },
    {
      id: 5,
      name: "Cryptography",
      code: "SEC202",
      present: 27,
      absent: 1,
      total: 28,
      percentage: 96,
      color: "from-purple-500 to-purple-700"
    },
  ];

  const recentAttendance = [
    { date: "2025-10-28", course: "Advanced JavaScript", status: "Present", code: "CS301" },
    { date: "2025-10-27", course: "Web Development", status: "Present", code: "CS101" },
    { date: "2025-10-26", course: "Network Security", status: "Absent", code: "SEC201" },
    { date: "2025-10-25", course: "Machine Learning", status: "Present", code: "DS301" },
    { date: "2025-10-24", course: "Cryptography", status: "Present", code: "SEC202" },
  ];

  const overallPercentage = Math.round(
    (courses.reduce((acc, c) => acc + c.present, 0) / 
     courses.reduce((acc, c) => acc + c.total, 0)) * 100
  );

  const totalPresent = courses.reduce((acc, c) => acc + c.present, 0);
  const totalAbsent = courses.reduce((acc, c) => acc + c.absent, 0);
  const totalClasses = courses.reduce((acc, c) => acc + c.total, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            My Attendance
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your class attendance and presence record
          </p>
        </div>

        {/* Overall Stats Card */}
        <Card className="p-8 mb-8 animate-fade-in border-none bg-gradient-to-br from-card to-card shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Overall Attendance</h2>
                  <p className="text-sm text-muted-foreground">Academic Year 2024-2025</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                You're maintaining excellent attendance! Keep up the great work.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="text-3xl font-bold text-primary mb-1">{overallPercentage}%</div>
                <div className="text-xs text-muted-foreground">Rate</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-success/10 to-success/5 border border-success/20">
                <div className="text-3xl font-bold text-success mb-1">{totalPresent}</div>
                <div className="text-xs text-muted-foreground">Present</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20">
                <div className="text-3xl font-bold text-destructive mb-1">{totalAbsent}</div>
                <div className="text-xs text-muted-foreground">Absent</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Course-wise Attendance */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Course Attendance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card 
                key={course.id}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="group p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none overflow-hidden relative bg-card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-1">
                        {course.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{course.code}</p>
                    </div>
                    <Badge 
                      variant={course.percentage >= 90 ? "default" : course.percentage >= 75 ? "secondary" : "destructive"}
                      className={`${course.percentage >= 90 ? "bg-success text-success-foreground" : ""} text-base px-3 py-1`}
                    >
                      {course.percentage}%
                    </Badge>
                  </div>

                  <Progress value={course.percentage} className="h-2.5 mb-4" />

                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="p-2 rounded-lg bg-success/10">
                      <CheckCircle2 className="h-4 w-4 text-success mx-auto mb-1" />
                      <div className="font-bold text-success">{course.present}</div>
                      <div className="text-xs text-muted-foreground">Present</div>
                    </div>
                    <div className="p-2 rounded-lg bg-destructive/10">
                      <XCircle className="h-4 w-4 text-destructive mx-auto mb-1" />
                      <div className="font-bold text-destructive">{course.absent}</div>
                      <div className="text-xs text-muted-foreground">Absent</div>
                    </div>
                    <div className="p-2 rounded-lg bg-muted/50">
                      <Calendar className="h-4 w-4 text-muted-foreground mx-auto mb-1" />
                      <div className="font-bold">{course.total}</div>
                      <div className="text-xs text-muted-foreground">Total</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Attendance */}
        <Card className="p-6 animate-fade-in border-none shadow-xl bg-card">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Clock className="h-6 w-6 text-primary" />
            Recent Attendance
          </h2>
          <div className="space-y-3">
            {recentAttendance.map((record, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-5 rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all bg-gradient-to-r from-card to-muted/20"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                    record.status === "Present" 
                      ? "bg-success/10 border border-success/20" 
                      : "bg-destructive/10 border border-destructive/20"
                  }`}>
                    {record.status === "Present" ? (
                      <CheckCircle2 className="h-6 w-6 text-success" />
                    ) : (
                      <XCircle className="h-6 w-6 text-destructive" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-base">{record.course}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <p className="text-sm text-muted-foreground">{record.code}</p>
                      <span className="text-muted-foreground">•</span>
                      <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {new Date(record.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <Badge 
                  variant={record.status === "Present" ? "default" : "destructive"}
                  className={`${record.status === "Present" ? "bg-success text-success-foreground" : ""} px-4 py-1.5`}
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

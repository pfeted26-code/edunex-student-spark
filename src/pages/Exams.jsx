import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar, Award, TrendingUp } from "lucide-react";

const Exams = () => {
  const exams = [
    {
      id: 1,
      course: "Computer Science 101",
      date: "2025-11-15",
      status: "Upcoming",
      type: "Midterm",
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      course: "Mathematics Advanced",
      date: "2025-11-08",
      status: "Completed",
      grade: "A",
      score: 92,
      type: "Quiz",
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      course: "Physics Fundamentals",
      date: "2025-11-20",
      status: "Upcoming",
      type: "Final",
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      course: "English Literature",
      date: "2025-10-30",
      status: "Completed",
      grade: "A-",
      score: 88,
      type: "Essay",
      color: "from-success to-green-600"
    },
    {
      id: 5,
      course: "Data Structures",
      date: "2025-11-12",
      status: "Upcoming",
      type: "Midterm",
      color: "from-purple-500 to-purple-700"
    },
  ];

  const stats = [
    { label: "Current GPA", value: "3.85", icon: Award },
    { label: "Average Score", value: "90%", icon: TrendingUp },
    { label: "Exams Taken", value: "24", icon: FileText },
    { label: "Upcoming", value: "3", icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Exams & Notes
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your exam schedule and academic performance
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 animate-fade-in-up">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={index} 
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-gradient-to-br from-card to-muted/30"
              >
                <Icon className="h-5 w-5 text-primary mb-2" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Exams List */}
        <div className="space-y-4">
          {exams.map((exam, index) => (
            <Card 
              key={exam.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-none overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${exam.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${exam.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                      {exam.course}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge variant="secondary">{exam.type}</Badge>
                      <Badge 
                        variant={exam.status === "Upcoming" ? "default" : "secondary"}
                        className={exam.status === "Upcoming" ? "bg-primary text-primary-foreground" : "bg-success text-success-foreground"}
                      >
                        {exam.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(exam.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>

                {exam.status === "Completed" && exam.grade && (
                  <div className="flex items-center gap-6 md:ml-auto">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success mb-1">
                        {exam.grade}
                      </div>
                      <div className="text-xs text-muted-foreground">Grade</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-1">
                        {exam.score}%
                      </div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;

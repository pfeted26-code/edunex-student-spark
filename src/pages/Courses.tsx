import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { FileText, Clock, CheckCircle2 } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction to Programming",
      code: "CS101",
      progress: 85,
      status: "In Progress",
      modules: 12,
      completed: 10,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      title: "Advanced Calculus",
      code: "MATH301",
      progress: 60,
      status: "In Progress",
      modules: 15,
      completed: 9,
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      title: "Quantum Physics",
      code: "PHY401",
      progress: 100,
      status: "Completed",
      modules: 10,
      completed: 10,
      color: "from-success to-green-600"
    },
    {
      id: 4,
      title: "World Literature",
      code: "ENG201",
      progress: 45,
      status: "In Progress",
      modules: 20,
      completed: 9,
      color: "from-accent to-pink-600"
    },
    {
      id: 5,
      title: "Data Science Basics",
      code: "DS101",
      progress: 30,
      status: "In Progress",
      modules: 18,
      completed: 5,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 6,
      title: "Web Development",
      code: "CS305",
      progress: 70,
      status: "In Progress",
      modules: 14,
      completed: 10,
      color: "from-warning to-orange-600"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Courses
          </h1>
          <p className="text-muted-foreground text-lg">
            Track your learning progress and access course materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={course.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${course.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <Badge 
                    variant={course.status === "Completed" ? "default" : "secondary"}
                    className={course.status === "Completed" ? "bg-success text-success-foreground" : ""}
                  >
                    {course.status === "Completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {course.status}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4">{course.code}</p>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Progress</span>
                      <span className="text-sm font-bold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>Modules</span>
                    </div>
                    <span className="font-medium">
                      {course.completed}/{course.modules}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, BookOpen, Award } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "First Year GLSI",
      level: "Year 1",
      program: "Software Engineering (GLSI)",
      coordinator: "Dr. Sarah Johnson",
      students: 45,
      totalCourses: 8,
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      name: "Second Year Network Security",
      level: "Year 2",
      program: "Cybersecurity & Network Security",
      coordinator: "Prof. Michael Chen",
      students: 38,
      totalCourses: 6,
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      name: "Third Year Data Science",
      level: "Year 3",
      program: "Data Science & AI",
      coordinator: "Dr. Emily Rodriguez",
      students: 42,
      totalCourses: 7,
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      name: "First Year Business Intelligence",
      level: "Year 1",
      program: "Business Intelligence",
      coordinator: "Prof. James Wilson",
      students: 30,
      totalCourses: 9,
      color: "from-success to-green-600"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Classes
          </h1>
          <p className="text-muted-foreground text-lg">
            View all your enrolled classes and their details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {classes.map((cls, index) => (
            <Card 
              key={cls.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cls.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${cls.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{cls.level}</Badge>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cls.name}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {cls.program}
                </p>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      Coordinator
                    </span>
                    <span className="font-medium">{cls.coordinator}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Courses
                    </span>
                    <span className="font-medium">{cls.totalCourses}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Students
                    </span>
                    <span className="font-medium">{cls.students}</span>
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

export default Classes;

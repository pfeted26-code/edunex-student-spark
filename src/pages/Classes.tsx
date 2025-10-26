import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock } from "lucide-react";

const Classes = () => {
  const classes = [
    {
      id: 1,
      name: "Computer Science 101",
      code: "CS101",
      instructor: "Dr. Sarah Johnson",
      students: 45,
      schedule: "Mon, Wed, Fri - 9:00 AM",
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      name: "Mathematics Advanced",
      code: "MATH201",
      instructor: "Prof. Michael Chen",
      students: 38,
      schedule: "Tue, Thu - 10:30 AM",
      color: "from-secondary to-blue-600"
    },
    {
      id: 3,
      name: "Physics Fundamentals",
      code: "PHY101",
      instructor: "Dr. Emily Rodriguez",
      students: 42,
      schedule: "Mon, Wed - 2:00 PM",
      color: "from-accent to-pink-600"
    },
    {
      id: 4,
      name: "English Literature",
      code: "ENG301",
      instructor: "Prof. James Wilson",
      students: 30,
      schedule: "Tue, Thu - 1:00 PM",
      color: "from-success to-green-600"
    },
    {
      id: 5,
      name: "Data Structures",
      code: "CS202",
      instructor: "Dr. Lisa Anderson",
      students: 35,
      schedule: "Mon, Wed, Fri - 11:00 AM",
      color: "from-purple-500 to-purple-700"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <Badge variant="secondary">{cls.code}</Badge>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {cls.name}
                </h3>

                <p className="text-muted-foreground mb-4 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  {cls.instructor}
                </p>

                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Students
                    </span>
                    <span className="font-medium">{cls.students}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Schedule
                    </span>
                    <span className="font-medium text-xs">{cls.schedule}</span>
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

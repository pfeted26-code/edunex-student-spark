import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FileText, CheckCircle2, BookOpen, Clock, User, CalendarDays, X } from "lucide-react";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courses = [
    {
      id: 1,
      title: "Advanced JavaScript",
      code: "CS301",
      className: "First Year GLSI",
      progress: 85,
      status: "In Progress",
      modules: 12,
      completed: 10,
      color: "from-primary to-primary-dark",
      instructor: "Dr. Sarah Johnson",
      credits: 3,
      description: "Master advanced JavaScript concepts including async/await, closures, prototypes, and modern ES6+ features.",
      semester: "Fall 2025",
      topics: ["Async Programming", "ES6+ Features", "Design Patterns", "Performance Optimization"]
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      code: "CS101",
      className: "First Year GLSI",
      progress: 90,
      status: "In Progress",
      modules: 8,
      completed: 7,
      color: "from-primary to-primary-dark",
      instructor: "Prof. Michael Chen",
      credits: 4,
      description: "Learn HTML, CSS, JavaScript, and responsive design principles to build modern web applications.",
      semester: "Fall 2025",
      topics: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design"]
    },
    {
      id: 3,
      title: "Network Security Fundamentals",
      code: "SEC201",
      className: "Second Year Network Security",
      progress: 60,
      status: "In Progress",
      modules: 10,
      completed: 6,
      color: "from-secondary to-blue-600",
      instructor: "Dr. James Wilson",
      credits: 3,
      description: "Explore network security concepts, threat analysis, and protection mechanisms for modern networks.",
      semester: "Fall 2025",
      topics: ["Firewalls", "IDS/IPS", "Network Protocols", "Security Policies"]
    },
    {
      id: 4,
      title: "Cryptography & Encryption",
      code: "SEC202",
      className: "Second Year Network Security",
      progress: 55,
      status: "In Progress",
      modules: 9,
      completed: 5,
      color: "from-secondary to-blue-600",
      instructor: "Dr. Amanda Lee",
      credits: 3,
      description: "Deep dive into cryptographic algorithms, encryption methods, and secure communication protocols.",
      semester: "Fall 2025",
      topics: ["Symmetric Encryption", "Public Key Cryptography", "Hash Functions", "Digital Signatures"]
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      code: "DS301",
      className: "Third Year Data Science",
      progress: 45,
      status: "In Progress",
      modules: 15,
      completed: 7,
      color: "from-accent to-pink-600",
      instructor: "Dr. Robert Taylor",
      credits: 4,
      description: "Introduction to machine learning algorithms, supervised and unsupervised learning techniques.",
      semester: "Fall 2025",
      topics: ["Supervised Learning", "Neural Networks", "Decision Trees", "Model Evaluation"]
    },
    {
      id: 6,
      title: "Data Analytics with Python",
      code: "DS201",
      className: "Third Year Data Science",
      progress: 100,
      status: "Completed",
      modules: 12,
      completed: 12,
      color: "from-accent to-pink-600",
      instructor: "Prof. Lisa Anderson",
      credits: 3,
      description: "Learn data analysis techniques using Python, pandas, NumPy, and data visualization libraries.",
      semester: "Fall 2025",
      topics: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis"]
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
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-none overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedCourse(course)}
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
                <p className="text-sm text-muted-foreground mb-1">{course.code}</p>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-3 w-3 text-muted-foreground" />
                  <p className="text-xs text-muted-foreground">{course.className}</p>
                </div>

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

        {/* Course Details Dialog */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold flex items-center justify-between">
                <span>{selectedCourse?.title}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSelectedCourse(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </DialogTitle>
            </DialogHeader>

            {selectedCourse && (
              <div className="space-y-6">
                {/* Course Header Info */}
                <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-br ${selectedCourse.color} flex items-center justify-center`}>
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{selectedCourse.code}</p>
                    <h3 className="text-lg font-semibold">{selectedCourse.className}</h3>
                  </div>
                  <Badge 
                    variant={selectedCourse.status === "Completed" ? "default" : "secondary"}
                    className={selectedCourse.status === "Completed" ? "bg-success text-success-foreground" : ""}
                  >
                    {selectedCourse.status === "Completed" && <CheckCircle2 className="h-3 w-3 mr-1" />}
                    {selectedCourse.status}
                  </Badge>
                </div>

                {/* Progress Section */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Course Progress</span>
                    <span className="text-sm font-bold">{selectedCourse.progress}%</span>
                  </div>
                  <Progress value={selectedCourse.progress} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    {selectedCourse.completed} of {selectedCourse.modules} modules completed
                  </p>
                </div>

                {/* Course Info Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Instructor</p>
                      <p className="font-medium">{selectedCourse.instructor}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-secondary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Credits</p>
                      <p className="font-medium">{selectedCourse.credits} Credits</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <CalendarDays className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-xs text-muted-foreground">Semester</p>
                      <p className="font-medium">{selectedCourse.semester}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <FileText className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-xs text-muted-foreground">Modules</p>
                      <p className="font-medium">{selectedCourse.modules} Total</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <h4 className="font-semibold">Course Description</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedCourse.description}
                  </p>
                </div>

                {/* Topics Covered */}
                <div className="space-y-3">
                  <h4 className="font-semibold">Topics Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCourse.topics.map((topic: string, index: number) => (
                      <Badge key={index} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary">
                    Continue Learning
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View Materials
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Courses;

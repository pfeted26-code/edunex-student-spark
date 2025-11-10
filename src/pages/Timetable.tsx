import { Card } from "@/components/ui/card";
import { MapPin, Clock, User, BookOpen, CalendarDays, X } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Timetable = () => {
  const [selectedCourse, setSelectedCourse] = useState<{
    course: string;
    room: string;
    time: string;
    day: string;
  } | null>(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];
  
  // Schedule organized by day and time slot
  const schedule: Record<string, Record<string, { course: string; room: string; duration: number } | null>> = {
    Monday: {
      "09:00": { course: "Advanced JavaScript", room: "Room 301", duration: 2 },
      "11:00": { course: "Network Security Fundamentals", room: "Lab 202", duration: 2 },
      "14:00": { course: "Machine Learning Basics", room: "Room 405", duration: 2 },
    },
    Tuesday: {
      "10:00": { course: "Web Development Fundamentals", room: "Room 210", duration: 2 },
      "13:00": { course: "Cryptography & Encryption", room: "Room 115", duration: 2 },
    },
    Wednesday: {
      "09:00": { course: "Advanced JavaScript", room: "Room 301", duration: 2 },
      "11:00": { course: "Data Analytics with Python", room: "Lab 202", duration: 2 },
      "14:00": { course: "Machine Learning Basics", room: "Room 405", duration: 2 },
    },
    Thursday: {
      "10:00": { course: "Web Development Fundamentals", room: "Room 210", duration: 2 },
      "13:00": { course: "Network Security Fundamentals", room: "Room 115", duration: 2 },
    },
    Friday: {
      "09:00": { course: "Advanced JavaScript", room: "Room 301", duration: 2 },
      "11:00": { course: "Cryptography & Encryption", room: "Lab 202", duration: 2 },
    },
  };

  const getCellClass = (course: string) => {
    const colorMap: Record<string, string> = {
      "Advanced JavaScript": "from-primary/20 to-primary/30 border-primary/40",
      "Web Development Fundamentals": "from-primary/20 to-primary/30 border-primary/40",
      "Network Security Fundamentals": "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      "Cryptography & Encryption": "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      "Machine Learning Basics": "from-pink-500/20 to-pink-600/20 border-pink-500/30",
      "Data Analytics with Python": "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    };
    return colorMap[course] || "from-gray-500/20 to-gray-600/20 border-gray-500/30";
  };

  const getCourseDetails = (courseName: string) => {
    const details: Record<string, any> = {
      "Advanced JavaScript": {
        code: "CS301",
        instructor: "Dr. Sarah Johnson",
        credits: 3,
        description: "Master advanced JavaScript concepts including ES6+, async programming, and modern frameworks for building dynamic web applications.",
        semester: "Fall 2024",
        topics: ["ES6+ Features", "Async/Await", "Closures", "Promises", "Modern Frameworks"],
      },
      "Web Development Fundamentals": {
        code: "CS101",
        instructor: "Prof. Michael Chen",
        credits: 4,
        description: "Introduction to web development covering HTML, CSS, JavaScript, and responsive design principles.",
        semester: "Fall 2024",
        topics: ["HTML5", "CSS3", "JavaScript Basics", "Responsive Design", "Web APIs"],
      },
      "Network Security Fundamentals": {
        code: "SEC201",
        instructor: "Dr. Emily Rodriguez",
        credits: 3,
        description: "Core principles of network security including firewalls, VPNs, intrusion detection, and security protocols.",
        semester: "Fall 2024",
        topics: ["Firewalls", "VPN Configuration", "IDS/IPS", "Network Protocols", "Security Best Practices"],
      },
      "Cryptography & Encryption": {
        code: "SEC202",
        instructor: "Prof. David Kim",
        credits: 4,
        description: "Study of cryptographic algorithms, encryption techniques, and their applications in securing digital communications.",
        semester: "Fall 2024",
        topics: ["Symmetric Encryption", "Public Key Cryptography", "Digital Signatures", "Hash Functions", "SSL/TLS"],
      },
      "Machine Learning Basics": {
        code: "DS301",
        instructor: "Dr. Amanda Williams",
        credits: 3,
        description: "Introduction to machine learning algorithms, supervised and unsupervised learning, and practical ML applications.",
        semester: "Fall 2024",
        topics: ["Supervised Learning", "Neural Networks", "Classification", "Regression", "Model Evaluation"],
      },
      "Data Analytics with Python": {
        code: "DS201",
        instructor: "Prof. Robert Lee",
        credits: 4,
        description: "Learn data analysis using Python, pandas, NumPy, and visualization libraries for extracting insights from data.",
        semester: "Fall 2024",
        topics: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis", "Data Cleaning"],
      },
    };
    return details[courseName] || {
      code: "TBA",
      instructor: "TBA",
      credits: 3,
      description: "Course details coming soon.",
      semester: "Fall 2024",
      topics: [],
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Timetable
          </h1>
          <p className="text-muted-foreground text-lg">
            Your weekly class schedule
          </p>
        </div>

        <Card className="overflow-hidden animate-fade-in-up border-none shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <th className="sticky left-0 z-10 bg-gradient-to-r from-primary/10 to-secondary/10 p-4 text-left font-bold border-b border-r border-border">
                    Time
                  </th>
                  {days.map((day) => (
                    <th 
                      key={day}
                      className="p-4 text-center font-bold border-b border-border min-w-[180px]"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-semibold">{day}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, timeIndex) => (
                  <tr 
                    key={time}
                    className="hover:bg-muted/30 transition-colors"
                  >
                    <td className="sticky left-0 z-10 bg-background p-4 border-r border-b border-border font-semibold text-sm text-muted-foreground whitespace-nowrap">
                      {time}
                    </td>
                    {days.map((day) => {
                      const classData = schedule[day]?.[time];
                      return (
                        <td 
                          key={`${day}-${time}`}
                          className="border-b border-border p-2 align-top"
                        >
                          {classData && (
                            <div 
                              onClick={() => setSelectedCourse({
                                course: classData.course,
                                room: classData.room,
                                time: time,
                                day: day
                              })}
                              className={`h-full p-3 rounded-lg bg-gradient-to-br ${getCellClass(classData.course)} border-2 hover:shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer`}
                              style={{ minHeight: `${classData.duration * 60}px` }}
                            >
                              <div className="font-semibold text-sm mb-1 leading-tight">
                                {classData.course}
                              </div>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3 flex-shrink-0" />
                                <span>{classData.room}</span>
                              </div>
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {selectedCourse?.course}
              </DialogTitle>
              <DialogDescription>
                Complete course information and details
              </DialogDescription>
            </DialogHeader>

            {selectedCourse && (
              <div className="space-y-6">
                {/* Schedule Info */}
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5">
                    <CalendarDays className="h-4 w-4" />
                    {selectedCourse.day}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5">
                    <Clock className="h-4 w-4" />
                    {selectedCourse.time}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1.5">
                    <MapPin className="h-4 w-4" />
                    {selectedCourse.room}
                  </Badge>
                </div>

                {/* Course Details */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <User className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Instructor</p>
                      <p className="font-semibold">{getCourseDetails(selectedCourse.course).instructor}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Credits</p>
                      <p className="font-semibold">{getCourseDetails(selectedCourse.course).credits} Credits</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Course Description</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {getCourseDetails(selectedCourse.course).description}
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-3">Topics Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {getCourseDetails(selectedCourse.course).topics.map((topic: string, index: number) => (
                        <Badge key={index} variant="outline" className="bg-background">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
                    <p className="text-sm">
                      <span className="font-semibold">Semester:</span> {getCourseDetails(selectedCourse.course).semester}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1" variant="default">
                    View Course Materials
                  </Button>
                  <Button className="flex-1" variant="outline">
                    Contact Instructor
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

export default Timetable;

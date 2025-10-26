import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin } from "lucide-react";

const Timetable = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  
  const schedule = {
    Monday: [
      { time: "9:00 - 10:30", course: "Computer Science 101", room: "Room 301", color: "primary" },
      { time: "11:00 - 12:30", course: "Data Structures", room: "Lab 202", color: "secondary" },
      { time: "14:00 - 15:30", course: "Physics Fundamentals", room: "Room 405", color: "accent" },
    ],
    Tuesday: [
      { time: "10:30 - 12:00", course: "Mathematics Advanced", room: "Room 210", color: "success" },
      { time: "13:00 - 14:30", course: "English Literature", room: "Room 115", color: "warning" },
    ],
    Wednesday: [
      { time: "9:00 - 10:30", course: "Computer Science 101", room: "Room 301", color: "primary" },
      { time: "11:00 - 12:30", course: "Data Structures", room: "Lab 202", color: "secondary" },
      { time: "14:00 - 15:30", course: "Physics Fundamentals", room: "Room 405", color: "accent" },
    ],
    Thursday: [
      { time: "10:30 - 12:00", course: "Mathematics Advanced", room: "Room 210", color: "success" },
      { time: "13:00 - 14:30", course: "English Literature", room: "Room 115", color: "warning" },
    ],
    Friday: [
      { time: "9:00 - 10:30", course: "Computer Science 101", room: "Room 301", color: "primary" },
      { time: "11:00 - 12:30", course: "Data Structures", room: "Lab 202", color: "secondary" },
    ],
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

        <div className="space-y-6">
          {days.map((day, index) => (
            <Card 
              key={day}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="p-6 animate-fade-in-up border-none overflow-hidden"
            >
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-white text-sm font-bold">
                    {day.substring(0, 3)}
                  </span>
                </div>
                {day}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {schedule[day as keyof typeof schedule].map((slot, idx) => (
                  <div
                    key={idx}
                    className="group p-4 rounded-xl border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-${slot.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <Badge 
                        variant="secondary" 
                        className="mb-3 bg-gradient-to-r from-primary/10 to-secondary/10"
                      >
                        <Clock className="h-3 w-3 mr-1" />
                        {slot.time}
                      </Badge>
                      
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {slot.course}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        {slot.room}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timetable;

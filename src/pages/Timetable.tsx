import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const Timetable = () => {
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
      "09:00": { course: "Computer Science 101", room: "Room 301", duration: 2 },
      "11:00": { course: "Data Structures", room: "Lab 202", duration: 2 },
      "14:00": { course: "Physics Fundamentals", room: "Room 405", duration: 2 },
    },
    Tuesday: {
      "10:00": { course: "Mathematics Advanced", room: "Room 210", duration: 2 },
      "13:00": { course: "English Literature", room: "Room 115", duration: 2 },
    },
    Wednesday: {
      "09:00": { course: "Computer Science 101", room: "Room 301", duration: 2 },
      "11:00": { course: "Data Structures", room: "Lab 202", duration: 2 },
      "14:00": { course: "Physics Fundamentals", room: "Room 405", duration: 2 },
    },
    Thursday: {
      "10:00": { course: "Mathematics Advanced", room: "Room 210", duration: 2 },
      "13:00": { course: "English Literature", room: "Room 115", duration: 2 },
    },
    Friday: {
      "09:00": { course: "Computer Science 101", room: "Room 301", duration: 2 },
      "11:00": { course: "Data Structures", room: "Lab 202", duration: 2 },
    },
  };

  const getCellClass = (course: string) => {
    const colorMap: Record<string, string> = {
      "Computer Science 101": "from-blue-500/20 to-blue-600/20 border-blue-500/30",
      "Data Structures": "from-purple-500/20 to-purple-600/20 border-purple-500/30",
      "Physics Fundamentals": "from-green-500/20 to-green-600/20 border-green-500/30",
      "Mathematics Advanced": "from-orange-500/20 to-orange-600/20 border-orange-500/30",
      "English Literature": "from-pink-500/20 to-pink-600/20 border-pink-500/30",
    };
    return colorMap[course] || "from-gray-500/20 to-gray-600/20 border-gray-500/30";
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
      </div>
    </div>
  );
};

export default Timetable;

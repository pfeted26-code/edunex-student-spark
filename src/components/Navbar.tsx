import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  FileText, 
  UserCheck, 
  Send, 
  MessageSquare, 
  Bell,
  Menu,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Dashboard", icon: LayoutDashboard },
  { path: "/classes", label: "Classes", icon: BookOpen },
  { path: "/courses", label: "Courses", icon: FileText },
  { path: "/timetable", label: "Timetable", icon: Calendar },
  { path: "/exams", label: "Exams & Notes", icon: FileText },
  { path: "/attendance", label: "Attendance", icon: UserCheck },
  { path: "/requests", label: "Requests", icon: Send },
  { path: "/messages", label: "Messages", icon: MessageSquare },
  { path: "/notifications", label: "Notifications", icon: Bell },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const NavLinks = ({ mobile = false }: { mobile?: boolean }) => (
    <>
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => mobile && setOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isActive
                ? "bg-primary text-primary-foreground shadow-md"
                : "hover:bg-muted text-foreground"
            } ${mobile ? "w-full justify-start" : ""}`}
          >
            <Icon className="h-5 w-5" />
            <span className={mobile ? "" : "hidden lg:inline"}>{item.label}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-xl font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduNex
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <NavLinks />
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col gap-4 mt-8">
                  <NavLinks mobile />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

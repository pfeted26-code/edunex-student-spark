import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, XCircle, Clock, Calendar, Eye, X, Send, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Requests = () => {
  const [showNewRequest, setShowNewRequest] = useState(false);
  const [requestType, setRequestType] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const requests = [
    {
      id: 1,
      type: "Certificate Request",
      description: "Transcript for graduate school application",
      date: "2025-10-25",
      status: "Pending",
      color: "from-primary to-primary-dark"
    },
    {
      id: 2,
      type: "Stage Request",
      description: "Summer internship at Tech Corp",
      date: "2025-10-20",
      status: "Approved",
      color: "from-success to-green-600"
    },
    {
      id: 3,
      type: "Leave Request",
      description: "Medical appointment on Nov 5",
      date: "2025-10-22",
      status: "Pending",
      color: "from-warning to-orange-600"
    },
    {
      id: 4,
      type: "Grade Appeal",
      description: "Review of Midterm Exam - CS101",
      date: "2025-10-18",
      status: "Rejected",
      color: "from-destructive to-red-600"
    },
    {
      id: 5,
      type: "Course Change",
      description: "Switch from Section A to Section B",
      date: "2025-10-15",
      status: "Approved",
      color: "from-secondary to-blue-600"
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Approved":
        return <CheckCircle2 className="h-4 w-4" />;
      case "Rejected":
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "Approved":
        return "default";
      case "Rejected":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const handleSubmitRequest = () => {
    if (!requestType || !subject || !description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Request Submitted",
      description: "Your request has been submitted successfully and is pending review.",
    });

    setShowNewRequest(false);
    setRequestType("");
    setSubject("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Requests
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your academic and administrative requests
            </p>
          </div>
          <Button 
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
            onClick={() => setShowNewRequest(true)}
          >
            <Plus className="h-4 w-4 mr-2" />
            New Request
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up">
          <Card className="p-6 border-none bg-gradient-to-br from-card to-muted/30">
            <div className="text-3xl font-bold text-primary mb-1">
              {requests.filter(r => r.status === "Pending").length}
            </div>
            <div className="text-sm text-muted-foreground">Pending</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-success/10">
            <div className="text-3xl font-bold text-success mb-1">
              {requests.filter(r => r.status === "Approved").length}
            </div>
            <div className="text-sm text-muted-foreground">Approved</div>
          </Card>
          <Card className="p-6 border-none bg-gradient-to-br from-card to-destructive/10">
            <div className="text-3xl font-bold text-destructive mb-1">
              {requests.filter(r => r.status === "Rejected").length}
            </div>
            <div className="text-sm text-muted-foreground">Rejected</div>
          </Card>
        </div>

        <div className="space-y-4">
          {requests.map((request, index) => (
            <Card 
              key={request.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="group p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in border-none overflow-hidden relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${request.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${request.color} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <Send className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {request.type}
                      </h3>
                      <Badge 
                        variant={getStatusVariant(request.status)}
                        className={request.status === "Approved" ? "bg-success text-success-foreground" : ""}
                      >
                        {getStatusIcon(request.status)}
                        <span className="ml-1">{request.status}</span>
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      {request.description}
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Clock className="h-3 w-3" />
                      Submitted: {new Date(request.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                  {request.status === "Pending" && (
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Dialog open={showNewRequest} onOpenChange={setShowNewRequest}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Submit New Request</DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="request-type">Request Type *</Label>
                <Select value={requestType} onValueChange={setRequestType}>
                  <SelectTrigger id="request-type">
                    <SelectValue placeholder="Select request type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="grade-review">Grade Review</SelectItem>
                    <SelectItem value="leave-absence">Leave of Absence</SelectItem>
                    <SelectItem value="course-substitution">Course Substitution</SelectItem>
                    <SelectItem value="exam-reschedule">Exam Reschedule</SelectItem>
                    <SelectItem value="transcript">Official Transcript</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Brief summary of your request"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about your request..."
                  className="min-h-[150px]"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button 
                  className="flex-1 bg-gradient-to-r from-primary to-secondary"
                  onClick={handleSubmitRequest}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Submit Request
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowNewRequest(false)}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Requests;

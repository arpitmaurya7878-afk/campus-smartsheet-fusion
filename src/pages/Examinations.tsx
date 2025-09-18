import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  GraduationCap, 
  Plus, 
  Search, 
  Upload,
  Download,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  BarChart3
} from 'lucide-react';

const Examinations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('current');

  // Mock examination data
  const examStats = {
    totalExams: 45,
    completedExams: 38,
    upcomingExams: 7,
    passRate: 92.5,
    totalStudents: 1248,
    resultsPublished: 1156
  };

  const examSchedule = [
    {
      id: 'EX2024001',
      subject: 'Computer Science Fundamentals',
      department: 'Computer Science',
      date: '2024-02-15',
      time: '09:00 AM',
      duration: '3 hours',
      students: 45,
      status: 'upcoming',
      hall: 'Main Hall A'
    },
    {
      id: 'EX2024002',
      subject: 'Business Statistics',
      department: 'Business Administration',
      date: '2024-02-10',
      time: '02:00 PM',
      duration: '2 hours',
      students: 38,
      status: 'completed',
      hall: 'Room 201'
    },
    {
      id: 'EX2024003',
      subject: 'Engineering Mathematics',
      department: 'Engineering',
      date: '2024-02-12',
      time: '10:00 AM',
      duration: '3 hours',
      students: 52,
      status: 'grading',
      hall: 'Main Hall B'
    }
  ];

  const examResults = [
    {
      studentId: 'ST2024001',
      studentName: 'Sarah Johnson',
      subject: 'Computer Science Fundamentals',
      marks: 85,
      grade: 'A',
      status: 'pass',
      examDate: '2024-01-15'
    },
    {
      studentId: 'ST2024002',
      studentName: 'Michael Chen',
      subject: 'Business Statistics',
      marks: 92,
      grade: 'A+',
      status: 'pass',
      examDate: '2024-01-16'
    },
    {
      studentId: 'ST2024003',
      studentName: 'Emily Rodriguez',
      subject: 'Engineering Mathematics',
      marks: 45,
      grade: 'F',
      status: 'fail',
      examDate: '2024-01-17'
    },
    {
      studentId: 'ST2024004',
      studentName: 'David Kim',
      subject: 'Computer Science Fundamentals',
      marks: 78,
      grade: 'B+',
      status: 'pass',
      examDate: '2024-01-18'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming': return 'bg-primary text-primary-foreground';
      case 'completed': return 'bg-success text-success-foreground';
      case 'grading': return 'bg-warning text-warning-foreground';
      case 'pass': return 'bg-success text-success-foreground';
      case 'fail': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getGradeColor = (grade: string) => {
    if (['A+', 'A'].includes(grade)) return 'text-success';
    if (['B+', 'B'].includes(grade)) return 'text-primary';
    if (['C+', 'C'].includes(grade)) return 'text-warning';
    return 'text-destructive';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Examination Management</h1>
          <p className="text-muted-foreground">
            Schedule exams, manage results, and track academic performance
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Results
          </Button>
          <Button variant="outline">
            <Upload className="mr-2 h-4 w-4" />
            Upload Grades
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Schedule Exam
          </Button>
        </div>
      </div>

      {/* Examination Statistics */}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Exams</p>
                <p className="text-2xl font-bold">{examStats.totalExams}</p>
              </div>
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-success">{examStats.completedExams}</p>
              </div>
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <p className="text-2xl font-bold text-primary">{examStats.upcomingExams}</p>
              </div>
              <Clock className="h-6 w-6 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pass Rate</p>
                <p className="text-2xl font-bold text-success">{examStats.passRate}%</p>
              </div>
              <BarChart3 className="h-6 w-6 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="text-2xl font-bold">{examStats.totalStudents}</p>
              </div>
              <Users className="h-6 w-6 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Published</p>
                <p className="text-2xl font-bold">{examStats.resultsPublished}</p>
              </div>
              <GraduationCap className="h-6 w-6 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Exam Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Exam Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examSchedule.map((exam) => (
              <div key={exam.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`h-3 w-3 rounded-full ${
                    exam.status === 'upcoming' ? 'bg-primary' :
                    exam.status === 'completed' ? 'bg-success' : 'bg-warning'
                  }`} />
                  <div>
                    <h3 className="font-medium text-foreground">{exam.subject}</h3>
                    <p className="text-sm text-muted-foreground">{exam.department}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground">Date & Time</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {exam.date}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {exam.time} ({exam.duration})
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Students</p>
                    <p className="font-medium flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {exam.students}
                    </p>
                    <p className="text-xs text-muted-foreground">{exam.hall}</p>
                  </div>
                  <Badge className={getStatusColor(exam.status)}>
                    {exam.status.charAt(0).toUpperCase() + exam.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  {exam.status === 'completed' ? (
                    <Button size="sm">View Results</Button>
                  ) : exam.status === 'grading' ? (
                    <Button size="sm">Enter Grades</Button>
                  ) : (
                    <Button size="sm">View Details</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters for Results */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by student name, ID, or subject..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Semester</SelectItem>
                <SelectItem value="previous">Previous Semester</SelectItem>
                <SelectItem value="all">All Semesters</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by result" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Results</SelectItem>
                <SelectItem value="pass">Pass</SelectItem>
                <SelectItem value="fail">Fail</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Exam Results */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Results</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {examResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-4">
                  {result.status === 'pass' ? (
                    <CheckCircle className="h-5 w-5 text-success" />
                  ) : (
                    <XCircle className="h-5 w-5 text-destructive" />
                  )}
                  <div>
                    <h3 className="font-medium text-foreground">{result.studentName}</h3>
                    <p className="text-sm text-muted-foreground">{result.studentId}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground">Subject</p>
                    <p className="font-medium">{result.subject}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Marks</p>
                    <p className="font-bold text-lg">{result.marks}/100</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Grade</p>
                    <p className={`font-bold text-xl ${getGradeColor(result.grade)}`}>
                      {result.grade}
                    </p>
                  </div>
                  <Badge className={getStatusColor(result.status)}>
                    {result.status.toUpperCase()}
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">View Details</Button>
                  <Button size="sm">Send Result</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Examinations;
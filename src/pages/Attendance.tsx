import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Check, 
  X,
  Calendar,
  BookOpen,
  GraduationCap,
  Building2
} from 'lucide-react';

const Attendance = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  // Mock data
  const courses = [
    'B.Tech Computer Science',
    'B.Tech Mechanical Engineering', 
    'B.Tech Electrical Engineering',
    'MBA Business Administration',
    'M.Tech Computer Science'
  ];

  const years = ['First Year', 'Second Year', 'Third Year', 'Fourth Year'];
  const branches = ['Computer Science', 'Mechanical', 'Electrical', 'Civil'];
  const subjects = ['Data Structures', 'Algorithms', 'Database Systems', 'Computer Networks'];

  const mockStudents = [
    { id: 'ST2024001', name: 'Sarah Johnson', rollNo: 'CS001' },
    { id: 'ST2024002', name: 'Michael Chen', rollNo: 'CS002' },
    { id: 'ST2024003', name: 'Emily Rodriguez', rollNo: 'CS003' },
    { id: 'ST2024004', name: 'David Wilson', rollNo: 'CS004' },
    { id: 'ST2024005', name: 'Lisa Brown', rollNo: 'CS005' },
    { id: 'ST2024006', name: 'James Davis', rollNo: 'CS006' },
    { id: 'ST2024007', name: 'Jennifer Garcia', rollNo: 'CS007' },
    { id: 'ST2024008', name: 'Robert Miller', rollNo: 'CS008' }
  ];

  const handleAttendanceToggle = (studentId: string, status: boolean) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const presentCount = Object.values(attendance).filter(Boolean).length;
  const absentCount = Object.values(attendance).filter(status => status === false).length;
  const totalMarked = presentCount + absentCount;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Attendance Management</h1>
          <p className="text-muted-foreground">
            Track and manage student attendance for classes
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Today: {new Date().toLocaleDateString()}
          </Button>
          <Button disabled={!selectedSubject}>
            Save Attendance
          </Button>
        </div>
      </div>

      {/* Course Selection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <GraduationCap className="mr-2 h-5 w-5" />
            Course Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Course</label>
              <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((course) => (
                    <SelectItem key={course} value={course}>{course}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Year</label>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Branch</label>
              <Select value={selectedBranch} onValueChange={setSelectedBranch}>
                <SelectTrigger>
                  <SelectValue placeholder="Select branch" />
                </SelectTrigger>
                <SelectContent>
                  {branches.map((branch) => (
                    <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Subject</label>
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger>
                  <SelectValue placeholder="Select subject" />
                </SelectTrigger>
                <SelectContent>
                  {subjects.map((subject) => (
                    <SelectItem key={subject} value={subject}>{subject}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Attendance Summary */}
      {selectedSubject && (
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold">{mockStudents.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Check className="h-8 w-8 text-success" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Present</p>
                  <p className="text-2xl font-bold text-success">{presentCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <X className="h-8 w-8 text-destructive" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Absent</p>
                  <p className="text-2xl font-bold text-destructive">{absentCount}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-warning" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                  <p className="text-2xl font-bold text-warning">
                    {totalMarked > 0 ? Math.round((presentCount / totalMarked) * 100) : 0}%
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Student List for Attendance */}
      {selectedSubject && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Student Attendance - {selectedSubject}
              </span>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const newAttendance: Record<string, boolean> = {};
                    mockStudents.forEach(student => {
                      newAttendance[student.id] = true;
                    });
                    setAttendance(newAttendance);
                  }}
                >
                  Mark All Present
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => {
                    const newAttendance: Record<string, boolean> = {};
                    mockStudents.forEach(student => {
                      newAttendance[student.id] = false;
                    });
                    setAttendance(newAttendance);
                  }}
                >
                  Mark All Absent
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mockStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-medium text-sm">
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{student.name}</h3>
                      <p className="text-sm text-muted-foreground">Roll No: {student.rollNo} • ID: {student.id}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    {attendance[student.id] !== undefined && (
                      <Badge className={attendance[student.id] ? 'bg-success text-success-foreground' : 'bg-destructive text-destructive-foreground'}>
                        {attendance[student.id] ? 'Present' : 'Absent'}
                      </Badge>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button
                        variant={attendance[student.id] === true ? "default" : "outline"}
                        size="sm"
                        onClick={() => handleAttendanceToggle(student.id, true)}
                        className="min-w-[80px]"
                      >
                        <Check className="mr-1 h-3 w-3" />
                        Present
                      </Button>
                      <Button
                        variant={attendance[student.id] === false ? "destructive" : "outline"}
                        size="sm"
                        onClick={() => handleAttendanceToggle(student.id, false)}
                        className="min-w-[80px]"
                      >
                        <X className="mr-1 h-3 w-3" />
                        Absent
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Attendance;
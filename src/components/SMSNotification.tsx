import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MessageSquare, 
  Send, 
  Users,
  User,
  X
} from 'lucide-react';

interface SMSNotificationProps {
  isOpen: boolean;
  onClose: () => void;
}

const SMSNotification = ({ isOpen, onClose }: SMSNotificationProps) => {
  const [recipientType, setRecipientType] = useState<'individual' | 'group'>('individual');
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock student data
  const students = [
    { id: 'ST2024001', name: 'Sarah Johnson', phone: '+1-555-0123', course: 'B.Tech CS' },
    { id: 'ST2024002', name: 'Michael Chen', phone: '+1-555-0124', course: 'B.Tech CS' },
    { id: 'ST2024003', name: 'Emily Rodriguez', phone: '+1-555-0125', course: 'B.Tech ME' },
    { id: 'ST2024004', name: 'David Wilson', phone: '+1-555-0126', course: 'MBA' },
    { id: 'ST2024005', name: 'Lisa Brown', phone: '+1-555-0127', course: 'B.Tech EE' }
  ];

  const groups = [
    { id: 'btech-cs', name: 'B.Tech Computer Science', count: 120 },
    { id: 'btech-me', name: 'B.Tech Mechanical', count: 85 },
    { id: 'btech-ee', name: 'B.Tech Electrical', count: 95 },
    { id: 'mba', name: 'MBA Students', count: 60 },
    { id: 'all-students', name: 'All Students', count: 360 }
  ];

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleStudentToggle = (studentId: string) => {
    setSelectedStudents(prev =>
      prev.includes(studentId)
        ? prev.filter(id => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSendSMS = () => {
    // Handle SMS sending logic here
    const recipients = recipientType === 'individual' 
      ? selectedStudents.map(id => students.find(s => s.id === id)?.name).join(', ')
      : 'Selected groups';
    
    console.log('Sending SMS:', {
      type: recipientType,
      recipients,
      message,
      count: recipientType === 'individual' ? selectedStudents.length : 'group'
    });
    
    // Reset form and close
    setMessage('');
    setSelectedStudents([]);
    setRecipientType('individual');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary to-secondary text-white">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              Send SMS Notification
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white hover:bg-white/20">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recipient Selection */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Send To</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <Button
                    variant={recipientType === 'individual' ? 'default' : 'outline'}
                    onClick={() => setRecipientType('individual')}
                    className="justify-start"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Individual
                  </Button>
                  <Button
                    variant={recipientType === 'group' ? 'default' : 'outline'}
                    onClick={() => setRecipientType('group')}
                    className="justify-start"
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Group
                  </Button>
                </div>
              </div>

              {recipientType === 'individual' && (
                <div className="space-y-3">
                  <div>
                    <Label>Search Students</Label>
                    <Input
                      placeholder="Search by name or student ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div className="border rounded-lg p-3 max-h-64 overflow-y-auto">
                    <div className="space-y-2">
                      {filteredStudents.map((student) => (
                        <div
                          key={student.id}
                          className={`flex items-center justify-between p-2 rounded cursor-pointer hover:bg-accent ${
                            selectedStudents.includes(student.id) ? 'bg-primary/10 border border-primary' : ''
                          }`}
                          onClick={() => handleStudentToggle(student.id)}
                        >
                          <div>
                            <p className="font-medium text-sm">{student.name}</p>
                            <p className="text-xs text-muted-foreground">{student.id} • {student.course}</p>
                          </div>
                          <input
                            type="checkbox"
                            checked={selectedStudents.includes(student.id)}
                            onChange={() => handleStudentToggle(student.id)}
                            className="rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedStudents.length > 0 && (
                    <div>
                      <Label className="text-sm">Selected ({selectedStudents.length})</Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedStudents.map((studentId) => {
                          const student = students.find(s => s.id === studentId);
                          return (
                            <Badge key={studentId} variant="secondary" className="text-xs">
                              {student?.name}
                              <X
                                className="ml-1 h-3 w-3 cursor-pointer"
                                onClick={() => handleStudentToggle(studentId)}
                              />
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {recipientType === 'group' && (
                <div className="space-y-3">
                  <Label>Select Group</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose student group" />
                    </SelectTrigger>
                    <SelectContent>
                      {groups.map((group) => (
                        <SelectItem key={group.id} value={group.id}>
                          {group.name} ({group.count} students)
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            {/* Message Composition */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">Message</Label>
                <Textarea
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 min-h-32"
                  maxLength={160}
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>SMS Character Limit</span>
                  <span>{message.length}/160</span>
                </div>
              </div>

              {/* Message Templates */}
              <div>
                <Label className="text-sm">Quick Templates</Label>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  {[
                    'Fee payment reminder: Please pay your pending dues by [date].',
                    'Class cancelled: Your [subject] class on [date] has been cancelled.',
                    'Exam notification: Your [subject] exam is scheduled for [date] at [time].',
                    'Holiday notice: College will remain closed on [date] due to [reason].'
                  ].map((template, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="justify-start text-xs h-auto p-2 text-left"
                      onClick={() => setMessage(template)}
                    >
                      {template}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Send Button */}
              <div className="pt-4 space-y-2">
                <Button
                  onClick={handleSendSMS}
                  className="w-full"
                  disabled={
                    !message.trim() || 
                    (recipientType === 'individual' && selectedStudents.length === 0)
                  }
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send SMS
                  {recipientType === 'individual' && selectedStudents.length > 0 && 
                    ` (${selectedStudents.length} recipients)`
                  }
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  SMS will be sent immediately to selected recipients
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SMSNotification;
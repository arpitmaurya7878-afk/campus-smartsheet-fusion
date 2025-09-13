import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Plus, 
  Search, 
  Filter,
  Download,
  Mail,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';

const Admissions = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);

  // Mock admission data
  const admissions = [
    {
      id: 'ST2024001',
      name: 'Sarah Johnson',
      email: 'sarah.johnson@email.com',
      phone: '+1-555-0123',
      program: 'Computer Science',
      status: 'approved',
      appliedDate: '2024-01-15',
      documents: 'Complete'
    },
    {
      id: 'ST2024002',
      name: 'Michael Chen',
      email: 'michael.chen@email.com',
      phone: '+1-555-0124',
      program: 'Business Administration',
      status: 'pending',
      appliedDate: '2024-01-16',
      documents: 'Pending'
    },
    {
      id: 'ST2024003',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      phone: '+1-555-0125',
      program: 'Engineering',
      status: 'interview',
      appliedDate: '2024-01-17',
      documents: 'Complete'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'interview': return 'bg-primary text-primary-foreground';
      case 'rejected': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admissions Management</h1>
          <p className="text-muted-foreground">
            Manage student applications and enrollment process
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            New Application
          </Button>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Applications</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-success flex items-center justify-center">
                <span className="text-success-foreground font-bold text-sm">✓</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Approved</p>
                <p className="text-2xl font-bold">892</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-warning flex items-center justify-center">
                <span className="text-warning-foreground font-bold text-sm">⏳</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">245</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Interview</p>
                <p className="text-2xl font-bold">110</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or student ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by program" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Programs</SelectItem>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="ba">Business Administration</SelectItem>
                <SelectItem value="eng">Engineering</SelectItem>
                <SelectItem value="med">Medicine</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {admissions.map((admission) => (
              <div key={admission.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-medium text-sm">
                      {admission.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{admission.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center">
                      <Mail className="mr-1 h-3 w-3" />
                      {admission.email}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="text-center">
                    <p className="text-muted-foreground">Student ID</p>
                    <p className="font-medium">{admission.id}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Program</p>
                    <p className="font-medium">{admission.program}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground">Applied</p>
                    <p className="font-medium flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {admission.appliedDate}
                    </p>
                  </div>
                  <Badge className={getStatusColor(admission.status)}>
                    {admission.status.charAt(0).toUpperCase() + admission.status.slice(1)}
                  </Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">View</Button>
                  <Button size="sm">Process</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Admissions;
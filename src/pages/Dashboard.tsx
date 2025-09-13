import React from 'react';
import MetricCard from '@/components/MetricCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  CreditCard, 
  Building, 
  GraduationCap, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const Dashboard = () => {
  // Mock data for demonstration
  const metrics = [
    {
      title: 'Total Students',
      value: 1248,
      change: '+12% from last month',
      changeType: 'increase' as const,
      icon: Users,
      description: 'Active enrollments'
    },
    {
      title: 'Fee Collection',
      value: '₹24.8L',
      change: '+8% from last month',
      changeType: 'increase' as const,
      icon: CreditCard,
      description: 'Current semester'
    },
    {
      title: 'Hostel Occupancy',
      value: '89%',
      change: '+3% from last week',
      changeType: 'increase' as const,
      icon: Building,
      description: '524/588 beds occupied'
    },
    {
      title: 'Pass Rate',
      value: '92.5%',
      change: '+2.1% from last semester',
      changeType: 'increase' as const,
      icon: GraduationCap,
      description: 'Last semester results'
    }
  ];

  const recentActivities = [
    { icon: CheckCircle, text: 'New admission: Sarah Johnson (ID: ST2024001)', time: '2 min ago', type: 'success' },
    { icon: CreditCard, text: 'Fee payment received: ₹45,000 (John Smith)', time: '15 min ago', type: 'info' },
    { icon: AlertTriangle, text: 'Hostel maintenance required: Block A Room 203', time: '1 hour ago', type: 'warning' },
    { icon: Users, text: 'Bulk admission processing completed: 24 students', time: '2 hours ago', type: 'success' },
    { icon: Clock, text: 'Exam schedule updated for Computer Science Dept.', time: '3 hours ago', type: 'info' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's what's happening at your college today.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
          <TrendingUp className="mr-2 h-4 w-4" />
          View Reports
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Recent Activities */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="mr-2 h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                const iconColor = {
                  success: 'text-success',
                  warning: 'text-warning',
                  info: 'text-primary'
                }[activity.type];
                
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-accent hover:bg-accent-hover transition-colors">
                    <Icon className={`h-5 w-5 mt-0.5 ${iconColor}`} />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Users className="mr-2 h-4 w-4" />
              New Admission
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <CreditCard className="mr-2 h-4 w-4" />
              Record Payment
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Building className="mr-2 h-4 w-4" />
              Assign Room
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <GraduationCap className="mr-2 h-4 w-4" />
              Upload Grades
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
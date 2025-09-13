import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  Download, 
  TrendingUp,
  Users,
  CreditCard,
  Building,
  GraduationCap,
  Calendar,
  FileText,
  PieChart
} from 'lucide-react';

const Reports = () => {
  const reportCategories = [
    {
      title: 'Admission Reports',
      icon: Users,
      color: 'text-primary',
      reports: [
        'Monthly Admission Summary',
        'Department-wise Enrollment',
        'Admission Trends Analysis',
        'Application Status Report'
      ]
    },
    {
      title: 'Financial Reports',
      icon: CreditCard,
      color: 'text-success',
      reports: [
        'Fee Collection Summary',
        'Outstanding Payments',
        'Revenue Analysis',
        'Payment Method Analytics'
      ]
    },
    {
      title: 'Hostel Reports',
      icon: Building,
      color: 'text-warning',
      reports: [
        'Occupancy Report',
        'Room Allocation Summary',
        'Maintenance Log',
        'Student Check-in/Out Log'
      ]
    },
    {
      title: 'Academic Reports',
      icon: GraduationCap,
      color: 'text-secondary',
      reports: [
        'Exam Results Summary',
        'Pass/Fail Analysis',
        'Grade Distribution',
        'Academic Performance Trends'
      ]
    }
  ];

  const quickStats = [
    { label: 'Total Students', value: '1,248', change: '+12%', trend: 'up' },
    { label: 'Revenue This Month', value: '₹24.8L', change: '+8%', trend: 'up' },
    { label: 'Hostel Occupancy', value: '89%', change: '+3%', trend: 'up' },
    { label: 'Pass Rate', value: '92.5%', change: '+2.1%', trend: 'up' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground">
            Comprehensive insights and data visualization for informed decision making
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Report
          </Button>
          <Button>
            <BarChart3 className="mr-2 h-4 w-4" />
            Custom Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-to-br from-card to-accent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-success flex items-center">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    {stat.change} from last period
                  </p>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Categories */}
      <div className="grid gap-6 md:grid-cols-2">
        {reportCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon className={`mr-3 h-6 w-6 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.reports.map((report, reportIndex) => (
                    <div key={reportIndex} className="flex items-center justify-between p-3 border rounded-lg hover:bg-accent transition-colors">
                      <div className="flex items-center">
                        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{report}</span>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <PieChart className="mr-1 h-3 w-3" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-1 h-3 w-3" />
                          Export
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Data Visualization Placeholder */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Student Enrollment Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Chart visualization would appear here</p>
                <p className="text-sm text-muted-foreground">Connected to real-time data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-r from-success/10 to-primary/10 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <PieChart className="h-12 w-12 text-success mx-auto mb-4" />
                <p className="text-muted-foreground">Pie chart visualization would appear here</p>
                <p className="text-sm text-muted-foreground">Fee collection breakdown</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Recently Generated Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { name: 'Monthly Admission Report - January 2024', date: '2024-02-01', size: '2.4 MB', type: 'PDF' },
              { name: 'Fee Collection Summary - Q4 2023', date: '2024-01-31', size: '1.8 MB', type: 'Excel' },
              { name: 'Hostel Occupancy Analysis', date: '2024-01-30', size: '950 KB', type: 'PDF' },
              { name: 'Academic Performance Report', date: '2024-01-29', size: '3.2 MB', type: 'PDF' }
            ].map((report, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">{report.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Generated on {report.date} • {report.size} • {report.type}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-1 h-3 w-3" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Reports;
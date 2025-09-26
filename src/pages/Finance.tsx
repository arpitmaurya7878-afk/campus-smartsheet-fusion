import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Plus, 
  Search, 
  Download,
  Receipt,
  AlertCircle,
  CheckCircle,
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const Finance = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock financial data
  const payments = [
    {
      id: 'PAY2024001',
      studentId: 'ST2024001',
      studentName: 'Sarah Johnson',
      amount: 45000,
      feeType: 'Semester Fee',
      status: 'completed',
      date: '2024-01-15',
      method: 'Bank Transfer',
      receipt: 'RCP001'
    },
    {
      id: 'PAY2024002',
      studentId: 'ST2024002',
      studentName: 'Michael Chen',
      amount: 25000,
      feeType: 'Hostel Fee',
      status: 'pending',
      date: '2024-01-16',
      method: 'Online Payment',
      receipt: null
    },
    {
      id: 'PAY2024003',
      studentId: 'ST2024003',
      studentName: 'Emily Rodriguez',
      amount: 15000,
      feeType: 'Library Fee',
      status: 'failed',
      date: '2024-01-17',
      method: 'Card Payment',
      receipt: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-success-foreground';
      case 'pending': return 'bg-warning text-warning-foreground';
      case 'failed': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return CheckCircle;
      case 'pending': return Clock;
      case 'failed': return AlertCircle;
      default: return Clock;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Finance Management</h1>
          <p className="text-muted-foreground">
            Track fee collections, payments, and financial records
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      {/* Course Fee Structure */}
      <Card>
        <CardHeader>
          <CardTitle>Course Fee Structure</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-muted-foreground mb-2 block">Select Course</label>
              <select className="w-full p-2 border rounded-lg bg-background text-foreground">
                <option value="">Choose a course...</option>
                <option value="btech-cs">B.Tech Computer Science</option>
                <option value="btech-me">B.Tech Mechanical Engineering</option>
                <option value="btech-ee">B.Tech Electrical Engineering</option>
                <option value="mba">MBA Business Administration</option>
                <option value="mtech-cs">M.Tech Computer Science</option>
              </select>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
                <h3 className="font-medium mb-2">B.Tech Computer Science - Total Fee</h3>
                <p className="text-2xl font-bold">₹2,85,000</p>
                <p className="text-sm opacity-90">Per Academic Year</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="p-2 bg-card border rounded">
                  <p className="text-muted-foreground">Tuition Fee</p>
                  <p className="font-medium">₹2,00,000</p>
                </div>
                <div className="p-2 bg-card border rounded">
                  <p className="text-muted-foreground">Development Fee</p>
                  <p className="font-medium">₹50,000</p>
                </div>
                <div className="p-2 bg-card border rounded">
                  <p className="text-muted-foreground">Lab Fee</p>
                  <p className="font-medium">₹25,000</p>
                </div>
                <div className="p-2 bg-card border rounded">
                  <p className="text-muted-foreground">Other Charges</p>
                  <p className="font-medium">₹10,000</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-success to-secondary">
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Collected</p>
                <p className="text-2xl font-bold">₹24.8L</p>
                <p className="text-xs opacity-80">This semester</p>
              </div>
              <DollarSign className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">₹3.2L</p>
                <p className="text-xs text-muted-foreground">125 students</p>
              </div>
              <Clock className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold">₹1.8L</p>
                <p className="text-xs text-muted-foreground">45 students</p>
              </div>
              <AlertCircle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Collection Rate</p>
                <p className="text-2xl font-bold">92.5%</p>
                <p className="text-xs text-success flex items-center">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +5% from last month
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Actions */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by student name, ID, or payment ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              Filter by Status
            </Button>
            <Button variant="outline">
              Filter by Fee Type
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Fee Types Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Fee Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {[
              { name: 'Semester Fee', amount: '₹45,000', icon: '🎓' },
              { name: 'Hostel Fee', amount: '₹25,000', icon: '🏠' },
              { name: 'Library Fee', amount: '₹5,000', icon: '📚' },
              { name: 'Lab Fee', amount: '₹15,000', icon: '🔬' },
              { name: 'Sports Fee', amount: '₹3,000', icon: '⚽' }
            ].map((feeType, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-all hover:bg-card-hover">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl mb-2">{feeType.icon}</div>
                  <h3 className="font-medium text-sm">{feeType.name}</h3>
                  <p className="text-lg font-bold text-primary">{feeType.amount}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {payments.map((payment) => {
              const StatusIcon = getStatusIcon(payment.status);
              return (
                <div key={payment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-4">
                    <StatusIcon className={`h-5 w-5 ${
                      payment.status === 'completed' ? 'text-success' :
                      payment.status === 'pending' ? 'text-warning' : 'text-destructive'
                    }`} />
                    <div>
                      <h3 className="font-medium text-foreground">{payment.studentName}</h3>
                      <p className="text-sm text-muted-foreground">{payment.studentId} • {payment.feeType}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-right">
                      <p className="font-bold text-lg">{formatCurrency(payment.amount)}</p>
                      <p className="text-muted-foreground">{payment.method}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-muted-foreground">Date</p>
                      <p className="font-medium">{payment.date}</p>
                    </div>
                    <Badge className={getStatusColor(payment.status)}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    {payment.receipt && (
                      <Button variant="outline" size="sm">
                        <Receipt className="mr-1 h-3 w-3" />
                        Receipt
                      </Button>
                    )}
                    <Button size="sm">View Details</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Finance;
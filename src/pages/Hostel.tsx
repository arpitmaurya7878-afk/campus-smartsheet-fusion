import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Building, 
  Plus, 
  Search, 
  Users,
  Bed,
  AlertTriangle,
  CheckCircle,
  Settings,
  MapPin,
  Phone,
  Calendar
} from 'lucide-react';

const Hostel = () => {
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock hostel data
  const hostelBlocks = [
    { name: 'Block A', total: 150, occupied: 142, available: 8, maintenance: 0 },
    { name: 'Block B', total: 120, occupied: 115, available: 3, maintenance: 2 },
    { name: 'Block C', total: 180, occupied: 165, available: 12, maintenance: 3 },
    { name: 'Block D', total: 138, occupied: 102, available: 32, maintenance: 4 }
  ];

  const roomAllocations = [
    {
      room: 'A-101',
      block: 'Block A',
      student: 'Sarah Johnson',
      studentId: 'ST2024001',
      checkIn: '2024-01-15',
      status: 'occupied',
      phone: '+1-555-0123',
      emergency: '+1-555-9999'
    },
    {
      room: 'A-102',
      block: 'Block A',
      student: 'Michael Chen',
      studentId: 'ST2024002',
      checkIn: '2024-01-16',
      status: 'occupied',
      phone: '+1-555-0124',
      emergency: '+1-555-8888'
    },
    {
      room: 'B-203',
      block: 'Block B',
      student: null,
      studentId: null,
      checkIn: null,
      status: 'maintenance',
      phone: null,
      emergency: null
    },
    {
      room: 'C-301',
      block: 'Block C',
      student: null,
      studentId: null,
      checkIn: null,
      status: 'available',
      phone: null,
      emergency: null
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied': return 'bg-success text-success-foreground';
      case 'available': return 'bg-primary text-primary-foreground';
      case 'maintenance': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'occupied': return CheckCircle;
      case 'available': return Bed;
      case 'maintenance': return AlertTriangle;
      default: return Bed;
    }
  };

  const totalRooms = hostelBlocks.reduce((sum, block) => sum + block.total, 0);
  const totalOccupied = hostelBlocks.reduce((sum, block) => sum + block.occupied, 0);
  const totalAvailable = hostelBlocks.reduce((sum, block) => sum + block.available, 0);
  const totalMaintenance = hostelBlocks.reduce((sum, block) => sum + block.maintenance, 0);
  const occupancyRate = Math.round((totalOccupied / totalRooms) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hostel Management</h1>
          <p className="text-muted-foreground">
            Manage room allocations, occupancy, and maintenance
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Room Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Assign Room
          </Button>
        </div>
      </div>

      {/* Occupancy Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-primary to-primary-light">
          <CardContent className="p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Rooms</p>
                <p className="text-2xl font-bold">{totalRooms}</p>
                <p className="text-xs opacity-80">Across 4 blocks</p>
              </div>
              <Building className="h-8 w-8 opacity-80" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Occupied</p>
                <p className="text-2xl font-bold text-success">{totalOccupied}</p>
                <p className="text-xs text-muted-foreground">{occupancyRate}% occupancy</p>
              </div>
              <Users className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-primary">{totalAvailable}</p>
                <p className="text-xs text-muted-foreground">Ready to assign</p>
              </div>
              <Bed className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold text-destructive">{totalMaintenance}</p>
                <p className="text-xs text-muted-foreground">Need attention</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Block Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Block Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {hostelBlocks.map((block, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-md transition-all hover:bg-card-hover">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{block.name}</h3>
                    <Building className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium">{block.total}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-success">Occupied:</span>
                      <span className="font-medium text-success">{block.occupied}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-primary">Available:</span>
                      <span className="font-medium text-primary">{block.available}</span>
                    </div>
                    {block.maintenance > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-destructive">Maintenance:</span>
                        <span className="font-medium text-destructive">{block.maintenance}</span>
                      </div>
                    )}
                  </div>
                  <div className="mt-3">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-success h-2 rounded-full transition-all"
                        style={{ width: `${(block.occupied / block.total) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-center">
                      {Math.round((block.occupied / block.total) * 100)}% occupied
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Search and Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search by room number, student name, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedBlock} onValueChange={setSelectedBlock}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by block" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Blocks</SelectItem>
                <SelectItem value="a">Block A</SelectItem>
                <SelectItem value="b">Block B</SelectItem>
                <SelectItem value="c">Block C</SelectItem>
                <SelectItem value="d">Block D</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="occupied">Occupied</SelectItem>
                <SelectItem value="available">Available</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Room Allocations */}
      <Card>
        <CardHeader>
          <CardTitle>Room Allocations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {roomAllocations.map((allocation, index) => {
              const StatusIcon = getStatusIcon(allocation.status);
              return (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-4">
                    <StatusIcon className={`h-5 w-5 ${
                      allocation.status === 'occupied' ? 'text-success' :
                      allocation.status === 'available' ? 'text-primary' : 'text-destructive'
                    }`} />
                    <div>
                      <h3 className="font-medium text-foreground flex items-center">
                        <MapPin className="mr-1 h-4 w-4 text-muted-foreground" />
                        {allocation.room} - {allocation.block}
                      </h3>
                      {allocation.student ? (
                        <p className="text-sm text-muted-foreground">
                          {allocation.student} ({allocation.studentId})
                        </p>
                      ) : (
                        <p className="text-sm text-muted-foreground capitalize">
                          {allocation.status}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    {allocation.checkIn && (
                      <div className="text-center">
                        <p className="text-muted-foreground">Check-in</p>
                        <p className="font-medium flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {allocation.checkIn}
                        </p>
                      </div>
                    )}
                    {allocation.phone && (
                      <div className="text-center">
                        <p className="text-muted-foreground">Contact</p>
                        <p className="font-medium flex items-center">
                          <Phone className="mr-1 h-3 w-3" />
                          {allocation.phone}
                        </p>
                      </div>
                    )}
                    <Badge className={getStatusColor(allocation.status)}>
                      {allocation.status.charAt(0).toUpperCase() + allocation.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    {allocation.status === 'occupied' ? (
                      <>
                        <Button variant="outline" size="sm">Transfer</Button>
                        <Button variant="outline" size="sm">Check Out</Button>
                      </>
                    ) : allocation.status === 'available' ? (
                      <Button size="sm">Assign</Button>
                    ) : (
                      <Button variant="outline" size="sm">Repair</Button>
                    )}
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

export default Hostel;
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Plus, 
  Search, 
  User,
  Calendar,
  AlertCircle,
  CheckCircle,
  BookMarked,
  Library as LibraryIcon
} from 'lucide-react';

const Library = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'available' | 'rented'>('available');

  // Mock library data
  const availableBooks = [
    {
      id: 'BK001',
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      isbn: '978-0262033848',
      quantity: 15,
      available: 12,
      category: 'Computer Science'
    },
    {
      id: 'BK002',
      title: 'Introduction to Database Systems',
      author: 'C.J. Date',
      isbn: '978-0321197849',
      quantity: 10,
      available: 8,
      category: 'Database'
    },
    {
      id: 'BK003',
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum',
      isbn: '978-0132126953',
      quantity: 8,
      available: 5,
      category: 'Networking'
    },
    {
      id: 'BK004',
      title: 'Operating System Concepts',
      author: 'Abraham Silberschatz',
      isbn: '978-1118063330',
      quantity: 12,
      available: 9,
      category: 'Operating Systems'
    },
    {
      id: 'BK005',
      title: 'Software Engineering',
      author: 'Ian Sommerville',
      isbn: '978-0137035151',
      quantity: 6,
      available: 4,
      category: 'Software Engineering'
    }
  ];

  const rentedBooks = [
    {
      id: 'RT001',
      bookId: 'BK001',
      title: 'Data Structures and Algorithms',
      author: 'Thomas H. Cormen',
      borrowerName: 'Sarah Johnson',
      borrowerId: 'ST2024001',
      borrowDate: '2024-01-15',
      dueDate: '2024-02-15',
      status: 'active'
    },
    {
      id: 'RT002',
      bookId: 'BK002',
      title: 'Introduction to Database Systems',
      author: 'C.J. Date',
      borrowerName: 'Michael Chen',
      borrowerId: 'ST2024002',
      borrowDate: '2024-01-10',
      dueDate: '2024-02-10',
      status: 'overdue'
    },
    {
      id: 'RT003',
      bookId: 'BK003',
      title: 'Computer Networks',
      author: 'Andrew S. Tanenbaum',
      borrowerName: 'Emily Rodriguez',
      borrowerId: 'ST2024003',
      borrowDate: '2024-01-20',
      dueDate: '2024-02-20',
      status: 'active'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-success text-success-foreground';
      case 'overdue': return 'bg-destructive text-destructive-foreground';
      case 'returned': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const isOverdue = (dueDate: string) => {
    return new Date(dueDate) < new Date();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Library Management</h1>
          <p className="text-muted-foreground">
            Manage book inventory and track rentals
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <BookMarked className="mr-2 h-4 w-4" />
            Import Books
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Book
          </Button>
        </div>
      </div>

      {/* Library Statistics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-primary" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Books</p>
                <p className="text-2xl font-bold">
                  {availableBooks.reduce((sum, book) => sum + book.quantity, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-success" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Available</p>
                <p className="text-2xl font-bold text-success">
                  {availableBooks.reduce((sum, book) => sum + book.available, 0)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <User className="h-8 w-8 text-warning" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Rented</p>
                <p className="text-2xl font-bold text-warning">{rentedBooks.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Overdue</p>
                <p className="text-2xl font-bold text-destructive">
                  {rentedBooks.filter(book => book.status === 'overdue').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
        <Button
          variant={activeTab === 'available' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('available')}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Available Books
        </Button>
        <Button
          variant={activeTab === 'rented' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setActiveTab('rented')}
        >
          <User className="mr-2 h-4 w-4" />
          Rented Books
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder={activeTab === 'available' ? "Search books by title, author, or ISBN..." : "Search by borrower name or book title..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* Available Books Panel */}
      {activeTab === 'available' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="mr-2 h-5 w-5" />
              Available Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {availableBooks.map((book) => (
                <div key={book.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded bg-primary flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{book.title}</h3>
                      <p className="text-sm text-muted-foreground">by {book.author}</p>
                      <p className="text-xs text-muted-foreground">ISBN: {book.isbn} • Category: {book.category}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground">Total Quantity</p>
                      <p className="font-bold text-lg">{book.quantity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Available</p>
                      <p className="font-bold text-lg text-success">{book.available}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Rented</p>
                      <p className="font-bold text-lg text-warning">{book.quantity - book.available}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Edit</Button>
                    <Button size="sm" disabled={book.available === 0}>
                      Issue Book
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Rented Books Panel */}
      {activeTab === 'rented' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="mr-2 h-5 w-5" />
              Rented Books
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {rentedBooks.map((rental) => (
                <div key={rental.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded bg-warning flex items-center justify-center">
                      <BookMarked className="h-6 w-6 text-warning-foreground" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">{rental.title}</h3>
                      <p className="text-sm text-muted-foreground">by {rental.author}</p>
                      <p className="text-xs text-muted-foreground">Rental ID: {rental.id} • Book ID: {rental.bookId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground">Borrower</p>
                      <p className="font-medium">{rental.borrowerName}</p>
                      <p className="text-xs text-muted-foreground">{rental.borrowerId}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Borrow Date</p>
                      <p className="font-medium flex items-center">
                        <Calendar className="mr-1 h-3 w-3" />
                        {rental.borrowDate}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground">Due Date</p>
                      <p className={`font-medium flex items-center ${isOverdue(rental.dueDate) ? 'text-destructive' : ''}`}>
                        <Calendar className="mr-1 h-3 w-3" />
                        {rental.dueDate}
                      </p>
                    </div>
                    <Badge className={getStatusColor(rental.status)}>
                      {rental.status.charAt(0).toUpperCase() + rental.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Send Reminder</Button>
                    <Button size="sm">Return Book</Button>
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

export default Library;
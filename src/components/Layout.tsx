import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  CreditCard, 
  Building, 
  GraduationCap, 
  BarChart3,
  Settings,
  User,
  ClipboardCheck,
  Library as LibraryIcon,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
import ChatbotWidget from './ChatbotWidget';
import SMSNotification from './SMSNotification';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [showSMSModal, setShowSMSModal] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/', icon: BarChart3 },
    { name: 'Admissions', href: '/admissions', icon: Users },
    { name: 'Finance', href: '/finance', icon: CreditCard },
    { name: 'Attendance', href: '/attendance', icon: ClipboardCheck },
    { name: 'Hostel', href: '/hostel', icon: Building },
    { name: 'Library', href: '/library', icon: LibraryIcon },
    { name: 'Examinations', href: '/examinations', icon: GraduationCap },
    { name: 'Reports', href: '/reports', icon: BarChart3 },
  ];

  const NavigationItems = ({ onItemClick }: { onItemClick?: () => void }) => (
    <div className="space-y-2">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.href;
        
        return (
          <Link key={item.name} to={item.href} onClick={onItemClick}>
            <Button
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.name}
            </Button>
          </Link>
        );
      })}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Toggle */}
              {isMobile && (
                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden">
                      <Menu className="h-5 w-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-64 p-0">
                    <div className="p-4">
                      <div className="mb-6">
                        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                          CampusFusion
                        </h1>
                        <p className="text-xs text-muted-foreground">College ERP System</p>
                      </div>
                      <NavigationItems onItemClick={() => setMobileMenuOpen(false)} />
                    </div>
                  </SheetContent>
                </Sheet>
              )}
              
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  CampusFusion
                </h1>
                <p className="text-xs text-muted-foreground hidden sm:block">College ERP System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setShowSMSModal(true)}
                className="hover:bg-primary/10"
              >
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Messages</span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
                <span className="sr-only">Settings</span>
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="text-sm hidden sm:block">
                  <p className="font-medium text-foreground">Administrator</p>
                  <p className="text-muted-foreground text-xs">admin@college.edu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Side Navigation */}
        {!isMobile && (
          <nav className="w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)] sticky top-16">
            <div className="p-4">
              <NavigationItems />
            </div>
          </nav>
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-4rem)] w-full max-w-full overflow-x-hidden">
          {children}
        </main>
      </div>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
      
      {/* SMS Notification Modal */}
      <SMSNotification isOpen={showSMSModal} onClose={() => setShowSMSModal(false)} />
    </div>
  );
};

export default Layout;
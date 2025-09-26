import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Shield, 
  Lock, 
  Settings,
  Eye,
  EyeOff
} from 'lucide-react';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin login:', { adminId, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">CampusFusion</h1>
          <p className="text-white/80">Administrative Portal</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center">
              <Settings className="mr-2 h-6 w-6" />
              Admin Login
            </CardTitle>
            <p className="text-muted-foreground">Access administrative dashboard</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adminId">Administrator ID</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="adminId"
                    type="text"
                    placeholder="Enter your admin ID"
                    value={adminId}
                    onChange={(e) => setAdminId(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full">
                Access Dashboard
              </Button>
            </form>

            <div className="mt-6 space-y-4">
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-3">
                <p className="text-sm text-warning-foreground">
                  <strong>Security Notice:</strong> Admin access is logged and monitored.
                </p>
              </div>

              <div className="text-center">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot admin credentials?
                </a>
              </div>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>IT Support: <a href="mailto:it@college.edu" className="text-primary hover:underline">it@college.edu</a></p>
              </div>
              
              <div className="border-t pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  Student? <a href="/student-login" className="text-primary hover:underline font-medium">Access student portal</a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-white/60 text-sm">
          <p>© 2024 CampusFusion. All rights reserved.</p>
          <p className="mt-1">Secure Administrative Access</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
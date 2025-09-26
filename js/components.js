// Component-like functions for reusable UI elements

// Navigation items configuration
const navigationItems = [
    { name: 'Dashboard', href: '/', icon: 'bar-chart-3' },
    { name: 'Admissions', href: '/admissions', icon: 'users' },
    { name: 'Finance', href: '/finance', icon: 'credit-card' },
    { name: 'Attendance', href: '/attendance', icon: 'clipboard-check' },
    { name: 'Hostel', href: '/hostel', icon: 'building' },
    { name: 'Library', href: '/library', icon: 'library' },
    { name: 'Examinations', href: '/examinations', icon: 'graduation-cap' },
    { name: 'Reports', href: '/reports', icon: 'bar-chart-3' },
];

// Create navigation items HTML
function createNavigationItems() {
    return navigationItems.map(item => `
        <button data-route="${item.href}" class="w-full justify-start inline-flex items-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            <i data-lucide="${item.icon}" class="mr-3 h-4 w-4"></i>
            ${item.name}
        </button>
    `).join('');
}

// Dashboard page content
function createDashboardPage() {
    return `
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-foreground">Dashboard</h1>
                    <p class="text-muted-foreground text-sm sm:text-base">
                        Welcome to CampusFusion - Your comprehensive college management system
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                        <i data-lucide="download" class="mr-2 h-4 w-4"></i>
                        Export Data
                    </button>
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                        <i data-lucide="plus" class="mr-2 h-4 w-4"></i>
                        Quick Action
                    </button>
                </div>
            </div>

            <!-- Statistics Grid -->
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <i data-lucide="users" class="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0"></i>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Total Students</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">2,847</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <i data-lucide="graduation-cap" class="h-6 w-6 sm:h-8 sm:w-8 text-success flex-shrink-0"></i>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Active Courses</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">42</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <i data-lucide="credit-card" class="h-6 w-6 sm:h-8 sm:w-8 text-warning flex-shrink-0"></i>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Fee Collection</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">₹89.2L</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <i data-lucide="building" class="h-6 w-6 sm:h-8 sm:w-8 text-destructive flex-shrink-0"></i>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Hostel Occupancy</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">87%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">Quick Actions</h3>
                    <p class="text-sm text-muted-foreground">
                        Frequently used actions for daily operations
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        ${navigationItems.slice(1).map(item => `
                            <button data-route="${item.href}" class="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors">
                                <i data-lucide="${item.icon}" class="h-8 w-8 text-primary mr-4"></i>
                                <div class="text-left">
                                    <h4 class="font-medium">${item.name}</h4>
                                    <p class="text-sm text-muted-foreground">Manage ${item.name.toLowerCase()}</p>
                                </div>
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Recent Activities -->
            <div class="grid gap-6 lg:grid-cols-2">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">Recent Activities</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <div class="space-y-4">
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-success rounded-full"></div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">New admission approved</p>
                                    <p class="text-xs text-muted-foreground">Sarah Johnson - B.Tech CS</p>
                                </div>
                                <p class="text-xs text-muted-foreground">2 min ago</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-warning rounded-full"></div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">Fee payment received</p>
                                    <p class="text-xs text-muted-foreground">₹2,85,000 - Michael Chen</p>
                                </div>
                                <p class="text-xs text-muted-foreground">15 min ago</p>
                            </div>
                            <div class="flex items-center space-x-3">
                                <div class="w-2 h-2 bg-primary rounded-full"></div>
                                <div class="flex-1">
                                    <p class="text-sm font-medium">Exam schedule updated</p>
                                    <p class="text-xs text-muted-foreground">Final exams - December 2024</p>
                                </div>
                                <p class="text-xs text-muted-foreground">1 hour ago</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight">System Status</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <div class="space-y-4">
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium">Database</span>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-success rounded-full"></div>
                                    <span class="text-sm text-success">Online</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium">Payment Gateway</span>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-success rounded-full"></div>
                                    <span class="text-sm text-success">Active</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium">Email Service</span>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-warning rounded-full"></div>
                                    <span class="text-sm text-warning">Limited</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-sm font-medium">Backup Status</span>
                                <div class="flex items-center space-x-2">
                                    <div class="w-2 h-2 bg-success rounded-full"></div>
                                    <span class="text-sm text-success">Up to date</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Admissions page content
function createAdmissionsPage() {
    return `
        <div class="space-y-6">
            <!-- Header -->
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-foreground">Admissions Management</h1>
                    <p class="text-muted-foreground text-sm sm:text-base">
                        Manage student applications and enrollment process
                    </p>
                </div>
                <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full sm:w-auto">
                        <i data-lucide="download" class="mr-2 h-4 w-4"></i>
                        Export
                    </button>
                    <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto">
                        <i data-lucide="plus" class="mr-2 h-4 w-4"></i>
                        New Application
                    </button>
                </div>
            </div>

            <!-- Statistics Cards -->
            <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <i data-lucide="users" class="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0"></i>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Total Applications</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">1,247</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <div class="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-success flex items-center justify-center flex-shrink-0">
                                <span class="text-success-foreground font-bold text-xs sm:text-sm">✓</span>
                            </div>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Approved</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">892</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <div class="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-warning flex items-center justify-center flex-shrink-0">
                                <span class="text-warning-foreground font-bold text-xs sm:text-sm">⏳</span>
                            </div>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Pending</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">245</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div class="p-4 sm:p-6">
                        <div class="flex items-center">
                            <div class="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                <span class="text-primary-foreground font-bold text-xs sm:text-sm">👁</span>
                            </div>
                            <div class="ml-3 sm:ml-4 min-w-0">
                                <p class="text-xs sm:text-sm font-medium text-muted-foreground">Under Review</p>
                                <p class="text-lg sm:text-2xl font-bold truncate">110</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Applications List -->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="flex flex-col space-y-1.5 p-6">
                    <h3 class="text-2xl font-semibold leading-none tracking-tight">Recent Applications</h3>
                </div>
                <div class="p-6 pt-0">
                    <div class="space-y-4">
                        ${[
                            { id: 'ST2024001', name: 'Sarah Johnson', email: 'sarah.johnson@email.com', program: 'Computer Science', status: 'approved' },
                            { id: 'ST2024002', name: 'Michael Chen', email: 'michael.chen@email.com', program: 'Business Administration', status: 'pending' },
                            { id: 'ST2024003', name: 'Emily Rodriguez', email: 'emily.rodriguez@email.com', program: 'Engineering', status: 'review' }
                        ].map(admission => {
                            const statusColors = {
                                approved: 'bg-success text-success-foreground',
                                pending: 'bg-warning text-warning-foreground', 
                                review: 'bg-primary text-primary-foreground'
                            };
                            
                            return `
                                <div class="flex flex-col lg:flex-row lg:items-center justify-between p-4 border rounded-lg hover:bg-accent transition-colors gap-4">
                                    <div class="flex items-center space-x-4 min-w-0 flex-1">
                                        <div class="h-10 w-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                            <span class="text-primary-foreground font-medium text-sm">
                                                ${admission.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div class="min-w-0 flex-1">
                                            <h3 class="font-medium text-foreground truncate">${admission.name}</h3>
                                            <p class="text-sm text-muted-foreground flex items-center">
                                                <i data-lucide="mail" class="mr-1 h-3 w-3 flex-shrink-0"></i>
                                                <span class="truncate">${admission.email}</span>
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap items-center gap-4 text-sm lg:space-x-4">
                                        <div class="text-center min-w-0">
                                            <p class="text-muted-foreground text-xs">Student ID</p>
                                            <p class="font-medium truncate">${admission.id}</p>
                                        </div>
                                        <div class="text-center min-w-0">
                                            <p class="text-muted-foreground text-xs">Program</p>
                                            <p class="font-medium truncate">${admission.program}</p>
                                        </div>
                                        <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${statusColors[admission.status]}">
                                            ${admission.status.charAt(0).toUpperCase() + admission.status.slice(1)}
                                        </div>
                                    </div>
                                    
                                    <div class="flex space-x-2 lg:flex-shrink-0">
                                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex-1 lg:flex-initial">View</button>
                                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1 lg:flex-initial">Process</button>
                                    </div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Create a simple page template for other sections
function createSimplePage(title, description, icon) {
    return `
        <div class="space-y-6">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-foreground flex items-center">
                        <i data-lucide="${icon}" class="mr-3 h-8 w-8 text-primary"></i>
                        ${title}
                    </h1>
                    <p class="text-muted-foreground text-sm sm:text-base">
                        ${description}
                    </p>
                </div>
            </div>
            
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div class="p-6">
                    <div class="text-center py-12">
                        <i data-lucide="${icon}" class="mx-auto h-12 w-12 text-muted-foreground mb-4"></i>
                        <h3 class="text-lg font-medium text-foreground mb-2">${title} Management</h3>
                        <p class="text-muted-foreground mb-4">
                            This section contains all the tools and features for managing ${title.toLowerCase()}.
                        </p>
                        <button class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            <i data-lucide="plus" class="mr-2 h-4 w-4"></i>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// SMS Modal content
function createSMSModal() {
    return `
        <div class="w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-lg border bg-card text-card-foreground shadow-2xl">
            <div class="flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-primary to-secondary text-white rounded-t-lg">
                <div class="flex items-center justify-between">
                    <h3 class="text-xl font-semibold leading-none tracking-tight flex items-center">
                        <i data-lucide="message-square" class="mr-2 h-5 w-5"></i>
                        Send SMS Notification
                    </h3>
                    <button id="sms-close" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white hover:bg-white/20 h-10 w-10">
                        <i data-lucide="x" class="h-4 w-4"></i>
                    </button>
                </div>
            </div>
            <div class="p-6 overflow-y-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Recipient Selection -->
                    <div class="space-y-4">
                        <div>
                            <label class="text-base font-medium text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Send To</label>
                            <div class="grid grid-cols-2 gap-2 mt-2">
                                <button id="individual-btn" class="recipient-type-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 justify-start" data-type="individual">
                                    <i data-lucide="user" class="mr-2 h-4 w-4"></i>
                                    Individual
                                </button>
                                <button id="group-btn" class="recipient-type-btn inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 justify-start" data-type="group">
                                    <i data-lucide="users" class="mr-2 h-4 w-4"></i>
                                    Group
                                </button>
                            </div>
                        </div>
                        
                        <div id="individual-section" class="space-y-3">
                            <div>
                                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Search Students</label>
                                <input id="student-search" type="text" placeholder="Search by name or student ID..." class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                            </div>
                            
                            <div class="border rounded-lg p-3 max-h-64 overflow-y-auto">
                                <div id="student-list" class="space-y-2">
                                    <!-- Student list will be populated by JavaScript -->
                                </div>
                            </div>
                        </div>

                        <div id="group-section" class="space-y-3 hidden">
                            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Select Group</label>
                            <select class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                <option value="">Choose student group</option>
                                <option value="btech-cs">B.Tech Computer Science (120 students)</option>
                                <option value="btech-me">B.Tech Mechanical (85 students)</option>
                                <option value="btech-ee">B.Tech Electrical (95 students)</option>
                                <option value="mba">MBA Students (60 students)</option>
                                <option value="all-students">All Students (360 students)</option>
                            </select>
                        </div>
                    </div>

                    <!-- Message Composition -->
                    <div class="space-y-4">
                        <div>
                            <label class="text-base font-medium text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                            <textarea id="sms-message" placeholder="Type your message here..." maxlength="160" class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 min-h-32"></textarea>
                            <div class="flex justify-between text-xs text-muted-foreground mt-1">
                                <span>SMS Character Limit</span>
                                <span id="char-count">0/160</span>
                            </div>
                        </div>

                        <!-- Send Button -->
                        <div class="pt-4 space-y-2">
                            <button id="send-sms-btn" class="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                <i data-lucide="send" class="mr-2 h-4 w-4"></i>
                                Send SMS
                            </button>
                            <p class="text-xs text-muted-foreground text-center">
                                SMS will be sent immediately to selected recipients
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
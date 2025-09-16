// ============= COMPLETE COLLEGE MANAGEMENT SYSTEM =============
// Pure HTML, CSS, JavaScript - No external dependencies

// Simple client-side router
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        
        // Listen to popstate event for browser back/forward
        window.addEventListener('popstate', () => {
            this.navigate(window.location.pathname, false);
        });
    }
    
    // Register a route
    register(path, handler) {
        this.routes[path] = handler;
    }
    
    // Navigate to a route
    navigate(path, pushState = true) {
        if (pushState && path !== window.location.pathname) {
            window.history.pushState({}, '', path);
        }
        
        this.currentRoute = path;
        
        // Call the handler for this route
        if (this.routes[path]) {
            this.routes[path]();
        } else if (this.routes['*']) {
            // Fallback to 404 handler
            this.routes['*']();
        }
        
        // Update active navigation
        this.updateActiveNav();
    }
    
    // Update active navigation highlighting
    updateActiveNav() {
        const navButtons = document.querySelectorAll('[data-route]');
        navButtons.forEach(button => {
            const route = button.getAttribute('data-route');
            if (route === this.currentRoute) {
                button.style.backgroundColor = '#0a9396';
                button.style.color = '#ffffff';
            } else {
                button.style.backgroundColor = '';
                button.style.color = '#ffffff';
            }
        });
    }
    
    // Start the router
    start() {
        // Navigate to current path or default to dashboard
        const path = window.location.pathname === '/' ? '/' : window.location.pathname;
        this.navigate(path, false);
    }
}

// Navigation items configuration
const navigationItems = [
    { name: 'Dashboard', href: '/', icon: '📊' },
    { name: 'Admissions', href: '/admissions', icon: '👥' },
    { name: 'Finance', href: '/finance', icon: '💳' },
    { name: 'Attendance', href: '/attendance', icon: '✅' },
    { name: 'Hostel', href: '/hostel', icon: '🏢' },
    { name: 'Library', href: '/library', icon: '📚' },
    { name: 'Examinations', href: '/examinations', icon: '🎓' },
    { name: 'Reports', href: '/reports', icon: '📈' },
];

// Create navigation items HTML
function createNavigationItems() {
    return navigationItems.map(item => `
        <button data-route="${item.href}" style="
            width: 100%;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            background: none;
            border: none;
            color: #ffffff;
            text-align: left;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.2s;
        " onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" onmouseout="if(this.dataset.route !== router.currentRoute) this.style.backgroundColor=''">
            <span style="margin-right: 12px; font-size: 16px;">${item.icon}</span>
            ${item.name}
        </button>
    `).join('');
}

// Dashboard page content
function createDashboardPage() {
    return `
        <div style="padding: 24px; max-width: 1200px; margin: 0 auto;">
            <!-- Header -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
                <div>
                    <h1 style="font-size: 2rem; font-weight: bold; color: #1d4e89; margin: 0 0 8px 0;">Dashboard</h1>
                    <p style="color: #607d8b; margin: 0;">
                        Welcome to CampusFusion - Your comprehensive college management system
                    </p>
                </div>
                <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                    <button style="
                        padding: 8px 16px;
                        border: 1px solid #e0e0e0;
                        background: #ffffff;
                        color: #1d4e89;
                        border-radius: 6px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">📥 Export Data</button>
                    <button style="
                        padding: 8px 16px;
                        background: #1d4e89;
                        color: #ffffff;
                        border: none;
                        border-radius: 6px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    ">➕ Quick Action</button>
                </div>
            </div>

            <!-- Statistics Grid -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px; margin-bottom: 32px;">
                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-size: 32px; margin-right: 16px; color: #000000;">👥</span>
                        <div>
                            <p style="color: #607d8b; margin: 0; font-size: 14px;">Total Students</p>
                            <p style="font-size: 24px; font-weight: bold; margin: 4px 0 0 0; color: #1d4e89;">2,847</p>
                        </div>
                    </div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-size: 32px; margin-right: 16px; color: #4caf50;">🎓</span>
                        <div>
                            <p style="color: #607d8b; margin: 0; font-size: 14px;">Active Courses</p>
                            <p style="font-size: 24px; font-weight: bold; margin: 4px 0 0 0; color: #4caf50;">42</p>
                        </div>
                    </div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-size: 32px; margin-right: 16px; color: #ff9800;">💳</span>
                        <div>
                            <p style="color: #607d8b; margin: 0; font-size: 14px;">Fee Collection</p>
                            <p style="font-size: 24px; font-weight: bold; margin: 4px 0 0 0; color: #ff9800;">₹89.2L</p>
                        </div>
                    </div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <div style="display: flex; align-items: center;">
                        <span style="font-size: 32px; margin-right: 16px; color: #f44336;">🏢</span>
                        <div>
                            <p style="color: #607d8b; margin: 0; font-size: 14px;">Hostel Occupancy</p>
                            <p style="font-size: 24px; font-weight: bold; margin: 4px 0 0 0; color: #f44336;">87%</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quick Actions -->
            <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; margin-bottom: 32px;">
                <h3 style="font-size: 1.5rem; font-weight: bold; color: #1d4e89; margin: 0 0 8px 0;">Quick Actions</h3>
                <p style="color: #607d8b; margin: 0 0 24px 0; font-size: 14px;">
                    Frequently used actions for daily operations
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                    ${navigationItems.slice(1).map(item => `
                        <button data-route="${item.href}" style="
                            display: flex;
                            align-items: center;
                            padding: 16px;
                            border: 1px solid #e0e0e0;
                            border-radius: 8px;
                            background: #ffffff;
                            cursor: pointer;
                            transition: background-color 0.2s;
                            text-align: left;
                        " onmouseover="this.style.backgroundColor='#f4f9fc'" onmouseout="this.style.backgroundColor='#ffffff'">
                            <span style="font-size: 32px; margin-right: 16px;">${item.icon}</span>
                            <div>
                                <h4 style="margin: 0; font-weight: 600; color: #1d4e89;">${item.name}</h4>
                                <p style="margin: 4px 0 0 0; font-size: 14px; color: #607d8b;">Manage ${item.name.toLowerCase()}</p>
                            </div>
                        </button>
                    `).join('')}
                </div>
            </div>

            <!-- Recent Activities and System Status -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px;">
                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #1d4e89; margin: 0 0 24px 0;">Recent Activities</h3>
                    <div style="space-y: 16px;">
                        <div style="display: flex; align-items: center; margin-bottom: 16px;">
                            <div style="width: 8px; height: 8px; background: #4caf50; border-radius: 50%; margin-right: 12px;"></div>
                            <div style="flex: 1;">
                                <p style="margin: 0; font-weight: 600; font-size: 14px;">New admission approved</p>
                                <p style="margin: 2px 0 0 0; font-size: 12px; color: #607d8b;">Sarah Johnson - B.Tech CS</p>
                            </div>
                            <p style="font-size: 12px; color: #607d8b; margin: 0;">2 min ago</p>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 16px;">
                            <div style="width: 8px; height: 8px; background: #ff9800; border-radius: 50%; margin-right: 12px;"></div>
                            <div style="flex: 1;">
                                <p style="margin: 0; font-weight: 600; font-size: 14px;">Fee payment received</p>
                                <p style="margin: 2px 0 0 0; font-size: 12px; color: #607d8b;">₹2,85,000 - Michael Chen</p>
                            </div>
                            <p style="font-size: 12px; color: #607d8b; margin: 0;">15 min ago</p>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <div style="width: 8px; height: 8px; background: #1d4e89; border-radius: 50%; margin-right: 12px;"></div>
                            <div style="flex: 1;">
                                <p style="margin: 0; font-weight: 600; font-size: 14px;">Exam schedule updated</p>
                                <p style="margin: 2px 0 0 0; font-size: 12px; color: #607d8b;">Final exams - December 2024</p>
                            </div>
                            <p style="font-size: 12px; color: #607d8b; margin: 0;">1 hour ago</p>
                        </div>
                    </div>
                </div>

                <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px;">
                    <h3 style="font-size: 1.5rem; font-weight: bold; color: #1d4e89; margin: 0 0 24px 0;">System Status</h3>
                    <div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <span style="font-weight: 600; font-size: 14px;">Database</span>
                            <div style="display: flex; align-items: center;">
                                <div style="width: 8px; height: 8px; background: #4caf50; border-radius: 50%; margin-right: 8px;"></div>
                                <span style="font-size: 14px; color: #4caf50;">Online</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <span style="font-weight: 600; font-size: 14px;">Payment Gateway</span>
                            <div style="display: flex; align-items: center;">
                                <div style="width: 8px; height: 8px; background: #4caf50; border-radius: 50%; margin-right: 8px;"></div>
                                <span style="font-size: 14px; color: #4caf50;">Active</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <span style="font-weight: 600; font-size: 14px;">Email Service</span>
                            <div style="display: flex; align-items: center;">
                                <div style="width: 8px; height: 8px; background: #ff9800; border-radius: 50%; margin-right: 8px;"></div>
                                <span style="font-size: 14px; color: #ff9800;">Limited</span>
                            </div>
                        </div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-weight: 600; font-size: 14px;">Backup Status</span>
                            <div style="display: flex; align-items: center;">
                                <div style="width: 8px; height: 8px; background: #4caf50; border-radius: 50%; margin-right: 8px;"></div>
                                <span style="font-size: 14px; color: #4caf50;">Up to date</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Simple page template for other sections
function createSimplePage(title, description, icon) {
    return `
        <div style="padding: 24px; max-width: 1200px; margin: 0 auto;">
            <div style="text-align: center; padding: 60px 20px;">
                <div style="font-size: 72px; margin-bottom: 24px;">${navigationItems.find(item => item.name === title)?.icon || '📋'}</div>
                <h1 style="font-size: 2.5rem; font-weight: bold; color: #1d4e89; margin: 0 0 16px 0;">${title}</h1>
                <p style="font-size: 1.2rem; color: #607d8b; max-width: 600px; margin: 0 auto 32px auto;">
                    ${description}
                </p>
                <button style="
                    padding: 12px 24px;
                    background: #1d4e89;
                    color: #ffffff;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 16px;
                ">Coming Soon</button>
            </div>
        </div>
    `;
}

// Create router instance
const router = new Router();

// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Register routes
    registerRoutes();
    
    // Start router
    router.start();
}

function initializeNavigation() {
    // Populate desktop navigation
    const navItems = document.getElementById('navigation-items');
    if (navItems) navItems.innerHTML = createNavigationItems();
    
    // Populate mobile navigation
    const mobileNavItems = document.getElementById('mobile-navigation-items');
    if (mobileNavItems) mobileNavItems.innerHTML = createNavigationItems();
    
    // Add click handlers for navigation
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-route')) {
            e.preventDefault();
            const route = e.target.getAttribute('data-route');
            router.navigate(route);
            
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && mobileMenu.style.display === 'block') {
                document.body.classList.remove('mobile-menu-open');
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
            }
        }
    });
}

function initializeMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            mobileMenu.style.display = 'block';
            document.body.classList.add('mobile-menu-open');
        });
    }
    
    if (mobileClose && mobileMenu) {
        mobileClose.addEventListener('click', function() {
            document.body.classList.remove('mobile-menu-open');
            setTimeout(() => {
                mobileMenu.style.display = 'none';
            }, 300);
        });
    }
    
    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                document.body.classList.remove('mobile-menu-open');
                setTimeout(() => {
                    mobileMenu.style.display = 'none';
                }, 300);
            }
        });
    }
}

function registerRoutes() {
    // Register all routes
    router.register('/', function() {
        document.getElementById('main-content').innerHTML = createDashboardPage();
    });
    
    router.register('/admissions', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Admissions', 'Manage student applications and enrollment process', '👥');
    });
    
    router.register('/finance', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Finance', 'Manage student fees, payments and financial records', '💳');
    });
    
    router.register('/attendance', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Attendance', 'Track and manage student attendance records', '✅');
    });
    
    router.register('/hostel', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Hostel', 'Manage hostel accommodations, room allocation and facilities', '🏢');
    });
    
    router.register('/library', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Library', 'Manage library resources, book inventory and rentals', '📚');
    });
    
    router.register('/examinations', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Examinations', 'Manage exam schedules, results and academic assessments', '🎓');
    });
    
    router.register('/reports', function() {
        document.getElementById('main-content').innerHTML = createSimplePage('Reports', 'Generate and view comprehensive analytics and reports', '📈');
    });
    
    // 404 fallback
    router.register('*', function() {
        document.getElementById('main-content').innerHTML = `
            <div style="text-align: center; padding: 60px 20px;">
                <h1 style="font-size: 4rem; font-weight: bold; color: #1d4e89; margin: 0 0 16px 0;">404</h1>
                <p style="font-size: 1.5rem; color: #607d8b; margin: 0 0 32px 0;">Oops! Page not found</p>
                <button data-route="/" style="
                    padding: 12px 24px;
                    background: #1d4e89;
                    color: #ffffff;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 16px;
                ">Return to Dashboard</button>
            </div>
        `;
    });
}
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
                button.classList.remove('hover:bg-accent', 'hover:text-accent-foreground');
                button.classList.add('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90');
            } else {
                button.classList.remove('bg-primary', 'text-primary-foreground', 'hover:bg-primary/90');
                button.classList.add('hover:bg-accent', 'hover:text-accent-foreground');
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

// Export router instance
window.router = new Router();
// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize mobile menu
    initializeMobileMenu();
    
    // Initialize chatbot
    initializeChatbot();
    
    // Initialize SMS modal
    initializeSMSModal();
    
    // Register routes
    registerRoutes();
    
    // Start router
    router.start();
    
    // Initialize Lucide icons
    initializeLucideIcons();
}

function initializeNavigation() {
    // Populate desktop navigation
    const navItems = document.getElementById('nav-items');
    navItems.innerHTML = createNavigationItems();
    
    // Populate mobile navigation
    const mobileNavItems = document.getElementById('mobile-nav-items');
    mobileNavItems.innerHTML = createNavigationItems();
    
    // Add click handlers for navigation
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-route')) {
            e.preventDefault();
            const route = e.target.getAttribute('data-route');
            router.navigate(route);
            
            // Close mobile menu if open
            closeMobileMenu();
        }
    });
}

function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    const mobileNavContent = document.getElementById('mobile-nav-content');
    
    mobileMenuToggle.addEventListener('click', function() {
        openMobileMenu();
    });
    
    mobileNavBackdrop.addEventListener('click', function() {
        closeMobileMenu();
    });
}

function openMobileMenu() {
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavContent = document.getElementById('mobile-nav-content');
    
    mobileNavOverlay.classList.remove('hidden');
    setTimeout(() => {
        mobileNavContent.classList.add('nav-slide-in');
    }, 10);
}

function closeMobileMenu() {
    const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
    const mobileNavContent = document.getElementById('mobile-nav-content');
    
    mobileNavContent.classList.remove('nav-slide-in');
    setTimeout(() => {
        mobileNavOverlay.classList.add('hidden');
    }, 300);
}

function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');
    
    let isChatbotOpen = false;
    
    // FAQ responses
    const faqs = {
        'admission': 'For admissions, please visit our Admissions office or check the requirements on our website. Application deadline is usually in June.',
        'fees': 'Fee structure varies by course. B.Tech is ₹2,85,000 per year. You can pay online or visit the Finance office.',
        'hostel': 'Hostel accommodation is available for ₹25,000 per year. Contact the Hostel office for room allocation.',
        'library': 'Library is open 9 AM to 9 PM. You can borrow up to 3 books for 30 days each.',
        'attendance': 'Minimum 75% attendance is required. Check with your faculty for specific requirements.',
        'examination': 'Exam schedules are published 2 weeks in advance. Check the Examinations section.',
        'contact': 'Main office: +91-XXX-XXXXXXX, Email: info@college.edu',
        'hours': 'College hours: 9 AM to 5 PM, Monday to Friday. Saturday: 9 AM to 2 PM.'
    };
    
    function getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        for (const [key, response] of Object.entries(faqs)) {
            if (message.includes(key)) {
                return response;
            }
        }
        
        if (message.includes('hello') || message.includes('hi')) {
            return 'Hello! I can help you with questions about admissions, fees, hostel, library, attendance, and examinations. What would you like to know?';
        }
        
        return 'I can help you with questions about admissions, fees, hostel, library, attendance, and examinations. Could you please rephrase your question?';
    }
    
    function addMessage(text, isBot = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `flex ${isBot ? 'justify-start' : 'justify-end'}`;
        
        messageDiv.innerHTML = `
            <div class="flex items-start space-x-2 max-w-[80%] ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}">
                <div class="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isBot ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }">
                    <i data-lucide="${isBot ? 'bot' : 'user'}" class="h-3 w-3"></i>
                </div>
                <div class="rounded-lg p-2 text-sm ${
                    isBot ? 'bg-muted text-foreground' : 'bg-primary text-primary-foreground'
                }">
                    ${text}
                </div>
            </div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Re-initialize icons for new message
        setTimeout(() => initializeLucideIcons(), 10);
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        // Add user message
        addMessage(message, false);
        
        // Add bot response
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, true);
        }, 500);
        
        chatInput.value = '';
    }
    
    chatbotToggle.addEventListener('click', function() {
        isChatbotOpen = !isChatbotOpen;
        
        if (isChatbotOpen) {
            chatbotWindow.classList.remove('hidden');
            chatbotToggle.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
        } else {
            chatbotWindow.classList.add('hidden');
            chatbotToggle.innerHTML = '<i data-lucide="message-circle" class="h-6 w-6"></i>';
        }
        
        initializeLucideIcons();
    });
    
    chatSend.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Quick topic buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('chat-quick-btn')) {
            const topic = e.target.getAttribute('data-topic');
            chatInput.value = `Tell me about ${topic}`;
        }
    });
}

function initializeSMSModal() {
    const smsButton = document.getElementById('sms-button');
    const smsModal = document.getElementById('sms-modal');
    
    // Mock student data
    const students = [
        { id: 'ST2024001', name: 'Sarah Johnson', phone: '+1-555-0123', course: 'B.Tech CS' },
        { id: 'ST2024002', name: 'Michael Chen', phone: '+1-555-0124', course: 'B.Tech CS' },
        { id: 'ST2024003', name: 'Emily Rodriguez', phone: '+1-555-0125', course: 'B.Tech ME' },
        { id: 'ST2024004', name: 'David Wilson', phone: '+1-555-0126', course: 'MBA' },
        { id: 'ST2024005', name: 'Lisa Brown', phone: '+1-555-0127', course: 'B.Tech EE' }
    ];
    
    let selectedStudents = [];
    let recipientType = 'individual';
    
    smsButton.addEventListener('click', function() {
        // Create and show modal
        smsModal.innerHTML = createSMSModal();
        smsModal.classList.remove('hidden');
        
        // Initialize modal functionality
        initializeSMSModalHandlers();
        initializeLucideIcons();
    });
    
    function initializeSMSModalHandlers() {
        const smsClose = document.getElementById('sms-close');
        const individualBtn = document.getElementById('individual-btn');
        const groupBtn = document.getElementById('group-btn');
        const individualSection = document.getElementById('individual-section');
        const groupSection = document.getElementById('group-section');
        const studentSearch = document.getElementById('student-search');
        const studentList = document.getElementById('student-list');
        const smsMessage = document.getElementById('sms-message');
        const charCount = document.getElementById('char-count');
        const sendSmsBtn = document.getElementById('send-sms-btn');
        
        // Close modal
        smsClose.addEventListener('click', function() {
            smsModal.classList.add('hidden');
        });
        
        // Modal backdrop click
        smsModal.addEventListener('click', function(e) {
            if (e.target === smsModal) {
                smsModal.classList.add('hidden');
            }
        });
        
        // Recipient type toggle
        document.querySelectorAll('.recipient-type-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const type = this.getAttribute('data-type');
                recipientType = type;
                
                // Update button styles
                document.querySelectorAll('.recipient-type-btn').forEach(b => {
                    b.className = b.className.replace('bg-primary text-primary-foreground hover:bg-primary/90', 'border border-input bg-background hover:bg-accent hover:text-accent-foreground');
                });
                this.className = this.className.replace('border border-input bg-background hover:bg-accent hover:text-accent-foreground', 'bg-primary text-primary-foreground hover:bg-primary/90');
                
                // Show/hide sections
                if (type === 'individual') {
                    individualSection.classList.remove('hidden');
                    groupSection.classList.add('hidden');
                } else {
                    individualSection.classList.add('hidden');
                    groupSection.classList.remove('hidden');
                }
            });
        });
        
        // Character count
        smsMessage.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = `${count}/160`;
        });
        
        // Populate student list
        function renderStudentList(filteredStudents = students) {
            studentList.innerHTML = filteredStudents.map(student => `
                <div class="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-accent ${
                    selectedStudents.includes(student.id) ? 'bg-primary/10 border border-primary' : ''
                }" data-student-id="${student.id}">
                    <div>
                        <p class="font-medium text-sm">${student.name}</p>
                        <p class="text-xs text-muted-foreground">${student.id} • ${student.course}</p>
                    </div>
                    <input type="checkbox" ${selectedStudents.includes(student.id) ? 'checked' : ''} class="rounded">
                </div>
            `).join('');
            
            // Add click handlers for student selection
            studentList.querySelectorAll('[data-student-id]').forEach(item => {
                item.addEventListener('click', function() {
                    const studentId = this.getAttribute('data-student-id');
                    
                    if (selectedStudents.includes(studentId)) {
                        selectedStudents = selectedStudents.filter(id => id !== studentId);
                    } else {
                        selectedStudents.push(studentId);
                    }
                    
                    renderStudentList(getCurrentFilteredStudents());
                });
            });
        }
        
        // Search students
        function getCurrentFilteredStudents() {
            const searchTerm = studentSearch.value.toLowerCase();
            return students.filter(student =>
                student.name.toLowerCase().includes(searchTerm) ||
                student.id.toLowerCase().includes(searchTerm)
            );
        }
        
        studentSearch.addEventListener('input', function() {
            renderStudentList(getCurrentFilteredStudents());
        });
        
        // Send SMS
        sendSmsBtn.addEventListener('click', function() {
            const message = smsMessage.value.trim();
            
            if (!message) {
                alert('Please enter a message');
                return;
            }
            
            if (recipientType === 'individual' && selectedStudents.length === 0) {
                alert('Please select at least one student');
                return;
            }
            
            // Simulate sending SMS
            console.log('Sending SMS:', {
                type: recipientType,
                recipients: recipientType === 'individual' ? selectedStudents : 'group',
                message: message
            });
            
            alert('SMS sent successfully!');
            smsModal.classList.add('hidden');
            
            // Reset form
            selectedStudents = [];
            recipientType = 'individual';
        });
        
        // Initialize student list
        renderStudentList();
    }
}

// Initialize Lucide icons
function registerRoutes() {
    // Register all routes
    router.register('/', function() {
        document.getElementById('page-content').innerHTML = createDashboardPage();
        initializeLucideIcons();
    });
    
    router.register('/admissions', function() {
        document.getElementById('page-content').innerHTML = createAdmissionsPage();
        initializeLucideIcons();
    });
    
    router.register('/finance', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Finance', 'Manage student fees, payments and financial records', 'credit-card');
        initializeLucideIcons();
    });
    
    router.register('/attendance', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Attendance', 'Track and manage student attendance records', 'clipboard-check');
        initializeLucideIcons();
    });
    
    router.register('/hostel', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Hostel', 'Manage hostel accommodations, room allocation and facilities', 'building');
        initializeLucideIcons();
    });
    
    router.register('/library', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Library', 'Manage library resources, book inventory and rentals', 'library');
        initializeLucideIcons();
    });
    
    router.register('/examinations', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Examinations', 'Manage exam schedules, results and academic assessments', 'graduation-cap');
        initializeLucideIcons();
    });
    
    router.register('/reports', function() {
        document.getElementById('page-content').innerHTML = createSimplePage('Reports', 'Generate and view comprehensive analytics and reports', 'bar-chart-3');
        initializeLucideIcons();
    });
    
    // 404 fallback
    router.register('*', function() {
        document.getElementById('page-content').innerHTML = `
            <div class="flex min-h-[50vh] items-center justify-center">
                <div class="text-center">
                    <h1 class="mb-4 text-4xl font-bold">404</h1>
                    <p class="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
                    <button data-route="/" class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                        Return to Dashboard
                    </button>
                </div>
            </div>
        `;
        initializeLucideIcons();
    });
}
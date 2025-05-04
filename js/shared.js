// Shared functionality across pages
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userRole = localStorage.getItem('userRole') || 'student'; // Default to student if not set
    
    // Load sidebar if user is logged in
    if (isLoggedIn && document.getElementById('sidebar-container')) {
        loadSidebar();
    }
    
    // Show or hide elements based on user role
    toggleElementsByRole(userRole);
    
    // Logout button functionality
    const logoutButtons = [
        document.getElementById('logoutBtn'),
        document.getElementById('mobileLogoutBtn')
    ];
    
    logoutButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', handleLogout);
        }
    });
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Initialize theme toggle functionality
    initThemeToggle();
    
    // User data setup
    setupUserData();
});

// Function to initialize theme toggle functionality
function initThemeToggle() {
    // If toggleTheme function doesn't exist globally, define it
    if (typeof window.toggleTheme !== 'function') {
        window.toggleTheme = function() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
                updateThemeIcons(false);
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
                updateThemeIcons(true);
            }
        };
    }
    
    // If updateThemeIcons function doesn't exist globally, define it
    if (typeof window.updateThemeIcons !== 'function') {
        window.updateThemeIcons = function(isDark) {
            // Update theme icons and text in all theme toggle buttons
            const themeIcons = [
                document.getElementById('themeIcon'),
                document.getElementById('sidebarThemeIcon'),
                document.getElementById('mobileThemeIcon')
            ];
            
            const themeTexts = [
                document.getElementById('themeText'),
                document.getElementById('sidebarThemeText'),
                document.getElementById('mobileThemeText')
            ];
            
            themeIcons.forEach(icon => {
                if (icon) {
                    if (isDark) {
                        if (icon.classList.contains('fa-moon')) {
                            icon.classList.remove('fa-moon');
                            icon.classList.add('fa-sun');
                        }
                    } else {
                        if (icon.classList.contains('fa-sun')) {
                            icon.classList.remove('fa-sun');
                            icon.classList.add('fa-moon');
                        }
                    }
                }
            });
            
            themeTexts.forEach(text => {
                if (text) {
                    text.textContent = isDark ? 'حالت روشن' : 'حالت تاریک';
                }
            });
        };
    }
    
    // Check and set current theme
    const isDark = document.documentElement.classList.contains('dark');
    updateThemeIcons(isDark);
    
    // Add event listeners to theme toggle buttons
    const themeToggleButtons = [
        document.getElementById('themeToggle'),
        document.getElementById('sidebarThemeToggle'),
        document.getElementById('mobileThemeToggle')
    ];
    
    themeToggleButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', window.toggleTheme);
        }
    });
}

// Function to load sidebar content
function loadSidebar() {
    const sidebarContainer = document.getElementById('sidebar-container');
    if (!sidebarContainer) return;
    
    // Instead of fetching from dashboard.html, use hardcoded HTML
    const sidebarHTML = `
        <!-- Sidebar - Hidden on mobile -->
        <aside class="hidden md:flex md:w-64 flex-col bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 h-screen sticky top-0">
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 class="text-xl font-bold text-gray-800 dark:text-white">سامانه همایش‌ها</h2>
            </div>
            
            <div class="p-4 border-b border-gray-200 dark:border-gray-700">
                <div class="flex items-center space-x-3 space-x-reverse">
                    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <span id="userInitials">ک</span>
                    </div>
                    <div>
                        <p id="userName" class="font-medium text-gray-900 dark:text-white">کاربر نمونه</p>
                        <p id="userRole" class="text-sm text-gray-500 dark:text-gray-400">دانشجو</p>
                    </div>
                </div>
            </div>
            
            <nav class="flex-1 p-4 overflow-y-auto">
                <ul class="space-y-2" id="sidebarMenu">
                    <li>
                        <a href="dashboard.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-home w-5 text-center"></i>
                            <span>داشبورد</span>
                        </a>
                    </li>
                    <li>
                        <a href="conferences.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-calendar-alt w-5 text-center"></i>
                            <span>همایش‌ها</span>
                        </a>
                    </li>
                    <li>
                        <a href="profile.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-user w-5 text-center"></i>
                            <span>پروفایل</span>
                        </a>
                    </li>
                    <li class="teacher-only hidden">
                        <a href="teacher-students.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-users w-5 text-center"></i>
                            <span>دانشجویان</span>
                        </a>
                    </li>
                    <li class="teacher-only hidden">
                        <a href="teacher-assignments.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-tasks w-5 text-center"></i>
                            <span>تکالیف</span>
                        </a>
                    </li>
                    <li>
                        <a href="files.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                            <i class="fas fa-file w-5 text-center"></i>
                            <span>فایل‌ها</span>
                        </a>
                    </li>
                </ul>
            </nav>
            
            <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                <button id="sidebarThemeToggle" onclick="toggleTheme()" class="flex items-center space-x-2 space-x-reverse p-2 w-full rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i id="sidebarThemeIcon" class="fas fa-moon w-5 text-center"></i>
                    <span id="sidebarThemeText">حالت تاریک</span>
                </button>
                
                <button id="logoutBtn" class="mt-2 flex items-center space-x-2 space-x-reverse p-2 w-full rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                    <i class="fas fa-sign-out-alt w-5 text-center"></i>
                    <span>خروج</span>
                </button>
            </div>
        </aside>
        
        <!-- Mobile header -->
        <header class="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
            <div class="flex items-center justify-between">
                <h1 class="text-xl font-bold text-gray-800 dark:text-white">سامانه همایش‌ها</h1>
                <button id="mobileMenuBtn" onclick="toggleMobileMenu()" class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
            
            <!-- Mobile menu - Hidden by default -->
            <div id="mobileMenu" class="hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ease-in-out border-l border-gray-200 dark:border-gray-700 overflow-y-auto">
                <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 class="text-lg font-bold text-gray-800 dark:text-white">سامانه همایش‌ها</h2>
                    <button onclick="toggleMobileMenu()" class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="flex items-center space-x-3 space-x-reverse p-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                        <span id="mobileUserInitials">ک</span>
                    </div>
                    <div>
                        <p id="mobileUserName" class="font-medium text-gray-900 dark:text-white">کاربر نمونه</p>
                        <p id="mobileUserRole" class="text-sm text-gray-500 dark:text-gray-400">دانشجو</p>
                    </div>
                </div>
                
                <nav class="mt-4">
                    <ul class="space-y-2 p-4" id="mobileMenu">
                        <li>
                            <a href="dashboard.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-home w-5 text-center"></i>
                                <span>داشبورد</span>
                            </a>
                        </li>
                        <li>
                            <a href="conferences.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-calendar-alt w-5 text-center"></i>
                                <span>همایش‌ها</span>
                            </a>
                        </li>
                        <li>
                            <a href="profile.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-user w-5 text-center"></i>
                                <span>پروفایل</span>
                            </a>
                        </li>
                        <li class="teacher-only hidden">
                            <a href="teacher-students.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-users w-5 text-center"></i>
                                <span>دانشجویان</span>
                            </a>
                        </li>
                        <li class="teacher-only hidden">
                            <a href="teacher-assignments.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-tasks w-5 text-center"></i>
                                <span>تکالیف</span>
                            </a>
                        </li>
                        <li>
                            <a href="files.html" class="flex items-center space-x-2 space-x-reverse p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                                <i class="fas fa-file w-5 text-center"></i>
                                <span>فایل‌ها</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                
                <div class="mt-4 space-y-2 p-4 border-t border-gray-200 dark:border-gray-700">
                    <button id="mobileThemeToggle" onclick="toggleTheme()" class="flex items-center space-x-2 space-x-reverse p-2 w-full rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                        <i id="mobileThemeIcon" class="fas fa-moon w-5 text-center"></i>
                        <span id="mobileThemeText">حالت تاریک</span>
                    </button>
                    
                    <button id="mobileLogoutBtn" class="flex items-center space-x-2 space-x-reverse p-2 w-full rounded-md text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20">
                        <i class="fas fa-sign-out-alt w-5 text-center"></i>
                        <span>خروج</span>
                    </button>
                </div>
            </div>
            <!-- Overlay for mobile menu -->
            <div id="mobileMenuOverlay" onclick="toggleMobileMenu()" class="hidden fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        </header>
    `;
    
    // Set the sidebar HTML
    sidebarContainer.innerHTML = sidebarHTML;
    
    // Re-initialize theme icons
    updateThemeIcons(document.documentElement.classList.contains('dark'));
    
    // Initialize mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (mobileMenuBtn && mobileMenu && mobileMenuOverlay) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Re-initialize theme toggle functionality
    initThemeToggle();
    
    // Re-add logout functionality
    const logoutButtons = [
        document.getElementById('logoutBtn'),
        document.getElementById('mobileLogoutBtn')
    ];
    
    logoutButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', handleLogout);
        }
    });
    
    // Highlight active menu item
    highlightActiveMenuItem();
    
    // Toggle elements by role
    const userRole = localStorage.getItem('userRole') || 'student';
    toggleElementsByRole(userRole);
    
    // Setup user data
    setupUserData();
}

// Global function to toggle mobile menu visibility
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    
    if (mobileMenu && mobileMenuOverlay) {
        mobileMenu.classList.toggle('hidden');
        mobileMenuOverlay.classList.toggle('hidden');
    }
}

// Function to handle logout
function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userRole');
    window.location.href = 'index.html';
}

// Function to toggle elements based on user role
function toggleElementsByRole(role) {
    const teacherElements = document.querySelectorAll('.teacher-only');
    const studentElements = document.querySelectorAll('.student-only');
    
    if (role === 'teacher') {
        teacherElements.forEach(el => el.classList.remove('hidden'));
        studentElements.forEach(el => el.classList.add('hidden'));
    } else {
        teacherElements.forEach(el => el.classList.add('hidden'));
        studentElements.forEach(el => el.classList.remove('hidden'));
    }
}

// Function to highlight active menu item
function highlightActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Find all menu items
    const menuItems = document.querySelectorAll('#sidebarMenu a, #mobileMenu a');
    
    menuItems.forEach(item => {
        // Remove active classes from all items
        item.classList.remove('text-blue-600', 'bg-blue-50', 'dark:bg-blue-900/20', 'dark:text-blue-400');
        item.classList.add('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
        
        // Add active classes to current page
        const href = item.getAttribute('href');
        if (href && (href.includes(currentPage) || 
            (currentPage === 'dashboard.html' && href.includes('dashboard.html')) ||
            (currentPage === 'conferences.html' && href.includes('conferences.html')) ||
            (currentPage === 'profile.html' && href.includes('profile.html')) ||
            (currentPage === 'teacher-students.html' && href.includes('teacher-students.html')) ||
            (currentPage === 'teacher-assignments.html' && href.includes('teacher-assignments.html')) ||
            (currentPage === 'files.html' && href.includes('files.html')))) {
                
            item.classList.remove('text-gray-700', 'dark:text-gray-300', 'hover:bg-gray-100', 'dark:hover:bg-gray-700');
            item.classList.add('text-blue-600', 'bg-blue-50', 'dark:bg-blue-900/20', 'dark:text-blue-400');
        }
    });
}

// Function to set up user data
function setupUserData() {
    const userName = localStorage.getItem('userName') || 'کاربر نمونه';
    const userRole = localStorage.getItem('userRole') || 'student';
    const userInitials = userName.charAt(0);
    
    // Set user information in the sidebar
    const userNameElements = [
        document.getElementById('userName'),
        document.getElementById('mobileUserName')
    ];
    
    const userRoleElements = [
        document.getElementById('userRole'),
        document.getElementById('mobileUserRole')
    ];
    
    const userInitialsElements = [
        document.getElementById('userInitials'),
        document.getElementById('mobileUserInitials')
    ];
    
    userNameElements.forEach(el => {
        if (el) el.textContent = userName;
    });
    
    userRoleElements.forEach(el => {
        if (el) el.textContent = userRole === 'teacher' ? 'استاد' : 'دانشجو';
    });
    
    userInitialsElements.forEach(el => {
        if (el) el.textContent = userInitials;
    });
} 
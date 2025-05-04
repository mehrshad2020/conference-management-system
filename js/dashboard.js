// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Removed login check
    
    // Load dashboard statistics
    loadDashboardStats();
    
    // Set up event listeners for dashboard actions
    setupDashboardActions();
    
    // Set up mobile menu toggle functionality
    setupMobileMenu();
});

// Function to load dashboard statistics
function loadDashboardStats() {
    const userRole = localStorage.getItem('userRole') || 'student';
    
    
}

// Function to set up event listeners for dashboard actions
function setupDashboardActions() {
    // Register button for upcoming conferences
    const registrationButtons = document.querySelectorAll('.dashboardContent button');
    
    registrationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const conferenceName = this.closest('li').querySelector('h3').textContent;
            
            if (isLoggedIn) {
                alert(`شما با موفقیت در "${conferenceName}" ثبت‌نام شدید.`);
                // In a real app, this would make an API call to register for the conference
            } else {
                alert(`برای ثبت‌نام در "${conferenceName}" ابتدا باید وارد سیستم شوید.`);
                // Optionally redirect to login page
                // window.location.href = 'index.html';
            }
        });
    });
    
    // Download file buttons
    const downloadButtons = document.querySelectorAll('.dashboardContent .fa-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            const fileName = this.closest('li').querySelector('h4').textContent;
            
            if (isLoggedIn) {
                alert(`درحال دانلود "${fileName}"...`);
                // In a real app, this would trigger a file download
            } else {
                alert(`برای دانلود "${fileName}" ابتدا باید وارد سیستم شوید.`);
                // Optionally redirect to login page
                // window.location.href = 'index.html';
            }
        });
    });
}

// Function to setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

// Global function to toggle mobile menu visibility
window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
} 
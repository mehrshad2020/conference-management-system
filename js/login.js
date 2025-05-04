// Login page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in - removed the redirect
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Login form submission
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('لطفاً ایمیل و رمز عبور را وارد کنید.');
                return;
            }
            
            // In a real app, this would make an API call to authenticate
            // For this demo, we'll simulate a successful login
            const userName = email.split('@')[0]; // Use part of email as name for demo
            
            // Determine user role based on email (for demo purposes)
            // In a real app, this would come from the server after authentication
            const userRole = email.includes('teacher') ? 'teacher' : 'student';
            
            // Store user info in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', userName);
            localStorage.setItem('userRole', userRole);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
}); 
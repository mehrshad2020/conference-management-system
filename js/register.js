// Registration page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in - removed redirect
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    // Registration form submission
    const registerForm = document.getElementById('registerForm');
    
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const fullName = document.getElementById('fullName').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const role = document.getElementById('role').value;
            
            // Simple validation
            if (!fullName || !email || !password || !role) {
                alert('لطفاً تمام فیلدها را پر کنید.');
                return;
            }
            
            // In a real app, this would make an API call to register the user
            // For this demo, we'll simulate a successful registration
            
            // Store user info in localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', fullName);
            localStorage.setItem('userRole', role);
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
}); 
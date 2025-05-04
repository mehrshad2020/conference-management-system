
document.addEventListener('DOMContentLoaded', function() {
    
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    
    if (!isLoggedIn) {
       
        window.location.href = 'index.html';
        return;
    }
    
   
    loadDashboardStats();
    
  
    setupDashboardActions();
    
    
    setupMobileMenu();
});


function loadDashboardStats() {
    const userRole = localStorage.getItem('userRole') || 'student';
    
    
   
    if (userRole === 'teacher') {
      
    } else {
       
    }
}

function setupDashboardActions() {
   
    const registrationButtons = document.querySelectorAll('.dashboardContent button');
    
    registrationButtons.forEach(button => {
        button.addEventListener('click', function() {
            const conferenceName = this.closest('li').querySelector('h3').textContent;
            alert(`شما با موفقیت در "${conferenceName}" ثبت‌نام شدید.`);
            
        });
    });
    
   
    const downloadButtons = document.querySelectorAll('.dashboardContent .fa-download');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileName = this.closest('li').querySelector('h4').textContent;
            alert(`درحال دانلود "${fileName}"...`);
           
        });
    });
}

function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

window.toggleMobileMenu = function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
    }
} 
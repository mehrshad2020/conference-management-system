
document.addEventListener('DOMContentLoaded', function() {
    
    if (window.tailwind && window.tailwind.config) {
        window.tailwind.config.darkMode = 'class';
    } else {
        
        const tailwindConfig = document.createElement('script');
        tailwindConfig.textContent = `
            tailwind.config = {
                darkMode: 'class'
            }
        `;
        document.head.appendChild(tailwindConfig);
    }
    
   
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    
    if (savedTheme === 'dark' || (savedTheme === null && systemPreference === 'dark')) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
    
   
    const themeToggleButtons = [
        document.getElementById('themeToggle'),
        document.getElementById('sidebarThemeToggle'),
        document.getElementById('mobileThemeToggle')
    ];
    
  
    themeToggleButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', toggleTheme);
        }
    });
    
  
    document.addEventListener('click', function(event) {
        if (event.target && (
            event.target.id === 'sidebarThemeToggle' || 
            event.target.id === 'mobileThemeToggle' || 
            event.target.closest('#sidebarThemeToggle') || 
            event.target.closest('#mobileThemeToggle')
        )) {
            toggleTheme();
        }
    });
});

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
}

window.updateThemeIcons = function(isDark) {
 
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
                } else {
                    icon.textContent = '☀️';
                }
            } else {
                if (icon.classList.contains('fa-sun')) {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                } else {
                    icon.textContent = '🌙';
                }
            }
        }
    });
    
    themeTexts.forEach(text => {
        if (text) {
            text.textContent = isDark ? 'حالت روشن' : 'حالت تاریک';
        }
    });
} 
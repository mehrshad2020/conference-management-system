// Theme handling (dark/light mode)
document.addEventListener('DOMContentLoaded', function() {
    // Configure Tailwind dark mode to use class strategy
    if (window.tailwind && window.tailwind.config) {
        window.tailwind.config.darkMode = 'class';
    } else {
        // If tailwind object isn't available yet, add a script to configure it
        const tailwindConfig = document.createElement('script');
        tailwindConfig.textContent = `
            tailwind.config = {
                darkMode: 'class'
            }
        `;
        document.head.appendChild(tailwindConfig);
    }
    
    // Check for theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (savedTheme === null && systemPreference === 'dark')) {
        document.documentElement.classList.add('dark');
        updateThemeIcons(true);
    } else {
        document.documentElement.classList.remove('dark');
        updateThemeIcons(false);
    }
    
    // Toggle theme buttons
    const themeToggleButtons = [
        document.getElementById('themeToggle'),
        document.getElementById('sidebarThemeToggle'),
        document.getElementById('mobileThemeToggle')
    ];
    
    // Add event listeners to all theme toggle buttons
    themeToggleButtons.forEach(button => {
        if (button) {
            button.addEventListener('click', toggleTheme);
        }
    });
    
    // Add event listener for dynamic elements that might be loaded later
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

// Function to toggle between light and dark themes
// Make toggleTheme globally accessible
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

// Function to update theme icons and text
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
                } else {
                    // icon.textContent = '☀️';
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
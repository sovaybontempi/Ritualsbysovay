// Toggle light and dark mode
(function () {
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌗'; // Moon icon toggle
  toggleBtn.className = 'toggle-theme-btn';
  toggleBtn.setAttribute('aria-label', 'Toggle light/dark theme');
  
  // Append the button to the top right of the site
  const nav = document.querySelector('.nav');
  nav.appendChild(toggleBtn);

  // Define dark and light mode class names
  const DARK_MODE_CLASS = 'dark-mode';
  const LIGHT_MODE_CLASS = 'light-mode';

  // Load saved theme choice from localStorage
  const savedTheme = localStorage.getItem('preferred-theme');
  if (savedTheme) {
    document.documentElement.classList.add(savedTheme === 'dark' ? DARK_MODE_CLASS : LIGHT_MODE_CLASS);
  }

  toggleBtn.addEventListener('click', function () {
    const isDarkMode = document.documentElement.classList.contains(DARK_MODE_CLASS);

    if (isDarkMode) {
      toggleTheme(LIGHT_MODE_CLASS, DARK_MODE_CLASS, 'light');
    } else {
      toggleTheme(DARK_MODE_CLASS, LIGHT_MODE_CLASS, 'dark');
    }
  });

  function toggleTheme(addClass, removeClass, themeValue) {
    const root = document.documentElement;
    root.classList.add(addClass);
    root.classList.remove(removeClass);
    localStorage.setItem('preferred-theme', themeValue);
  }
})();
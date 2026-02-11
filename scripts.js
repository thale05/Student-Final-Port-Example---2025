  // ====== DARK MODE TOGGLE FEATURE ======
        // Create the toggle button
        const toggleButton = document.createElement('button');
        toggleButton.textContent = 'Toggle Dark Mode';
        toggleButton.className = 'toggle-btn';
        document.body.appendChild(toggleButton);

        // Toggle dark mode on <body> when clicked
        toggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
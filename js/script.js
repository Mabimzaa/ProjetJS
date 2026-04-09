// =====================
// NAVIGATION
// =====================

const startBtn = document.querySelector('.start');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'cinematique.html?scene=intro';
    });
}

const optionBtn = document.querySelector('.option');
if (optionBtn) {
    optionBtn.addEventListener('click', () => {
        window.location.href = 'options.html';
    });
}

const backBtn = document.querySelector('.back');
if (backBtn) {
    backBtn.addEventListener('click', () => {
        history.back();
    });
}

// =====================
// THEME
// =====================

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light');
}

const themeBtn = document.querySelector('.theme');

function updateThemeButton() {
    if (!themeBtn) return;
    themeBtn.textContent = document.body.classList.contains('light')
        ? 'Thème sombre'
        : 'Thème clair';
}

if (themeBtn) {
    updateThemeButton();

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem('theme',
            document.body.classList.contains('light') ? 'light' : 'dark'
        );
        updateThemeButton();
    });
}

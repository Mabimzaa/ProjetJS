const startBtn = document.querySelector('.start');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'cinematique.html?scene=intro&dest=game.html';
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
// THÈME
// =====================
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light');
}

const themeBtn = document.querySelector('.theme');

function updateThemeButton() {
    if (themeBtn) {
        if (document.body.classList.contains('light')) {
            themeBtn.textContent = 'Thème sombre';
        } else {
            themeBtn.textContent = 'Thème clair';
        }
    }
}

if (themeBtn) {
    updateThemeButton();

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');

        if (document.body.classList.contains('light')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }

        updateThemeButton();
    });
}

const startBtn = document.querySelector('.start');
if (startBtn) {
    startBtn.addEventListener('click', () => {
        window.location.href = 'game.html';
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

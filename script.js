document.addEventListener('DOMContentLoaded', () => {
    const rotateBtn = document.getElementById('rotateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const box = document.querySelector('.box');

    rotateBtn.addEventListener('click', () => {
        box.style.transform = 'rotate(360deg)';
    });

    resetBtn.addEventListener('click', () => {
        box.style.transform = 'rotate(0deg)';
    });
});

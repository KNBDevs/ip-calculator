document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.container');
    elements.forEach(element => {
        element.style.animation = 'fadeIn 1s ease-in-out';
    });
});

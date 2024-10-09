document.addEventListener('DOMContentLoaded', () => {
    const fishBody = document.querySelector('.fish-body');
    const fins = document.querySelectorAll('.fin, .fin-bottom'); 
    const colors = ['orange', 'pink', 'red', 'yellow', 'green', 'blue', 'purple'];
    let colorIndex = 0;

    if (fishBody) {
        fishBody.addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            const newColor = colors[colorIndex];
            fishBody.style.backgroundColor = newColor;
            fins.forEach(fin => {
                fin.style.backgroundColor = newColor;
            });
        });
    } else {
        console.error('Fish body element not found');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Select the fish body element
    const fishBody = document.querySelector('.fish-body');
    
    // Select all fin elements
    const fins = document.querySelectorAll('.fin, .fin-bottom');
    
    // Define the colors to cycle through
    const colors = ['red', 'pink', 'green', 'orange'];
    let colorIndex = 0;

    // Check if the fish body element exists
    if (fishBody) {
        // Add click event listener to the fish body
        fishBody.addEventListener('click', () => {
            // Cycle to the next color
            colorIndex = (colorIndex + 1) % colors.length;
            const newColor = colors[colorIndex];
            
            // Change the background color of the fish body
            fishBody.style.backgroundColor = newColor;
            
            // Change the background color of all fins
            fins.forEach(fin => {
                fin.style.backgroundColor = newColor;
            });
        });
    } else {
        console.error('Fish body element not found');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Select the fish body element
    const fishBody = document.querySelector('.fish-body');
    
    // Select all fin elements
    const fins = document.querySelectorAll('.fin, .fin-bottom'); 
    
    // Define the colors to cycle through for the fish
    const colors = ['cyan', 'magenta', 'lime', 'teal', 'maroon', 'olive', 'silver'];
    let colorIndex = -1; // Initialize color index to -1 to start from the first color on click
    let resetTimeout; // Variable to store the timeout ID

    // Function to reset the fish color to orange
    const resetColor = () => {
        colorIndex = -1; // Reset color index
        fishBody.style.backgroundColor = 'orange'; // Reset fish body color
        fins.forEach(fin => {
            fin.style.backgroundColor = 'orange'; // Reset fins color
        });
    };

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
            
            // Clear the previous timeout and set a new timeout to reset the color after 5 seconds
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(resetColor, 3000);
        });
    } else {
        console.error('Fish body element not found');
    }
});
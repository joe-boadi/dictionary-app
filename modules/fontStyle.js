const fontStyleSelect = document.getElementById('fontStyle');
const bodyElement = document.body;  // or any other element you want to change the font for

// Event listener for the font style change
fontStyleSelect.addEventListener('change', (event) => {
    const selectedFont = event.target.value;  // Get the selected value

    // Apply the selected font to the body or a specific element
    switch (selectedFont) {
        case 'SansSerif':
            bodyElement.style.fontFamily = 'Arial, sans-serif';  // Default sans-serif font
            break;
        case 'Serif':
            bodyElement.style.fontFamily = 'Georgia, serif';  // Default serif font
            break;
        case 'Mono':
            bodyElement.style.fontFamily = 'Courier New, monospace';  // Default mono font
            break;
        default:
            bodyElement.style.fontFamily = 'Arial, sans-serif';  // Fallback font
    }
});

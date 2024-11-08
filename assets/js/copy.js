// Function to copy code when the button is clicked
document.getElementById('copyButton').addEventListener('click', function() {
    // Select the <pre> element containing the code
    const codeElement = document.querySelector('.code-section pre');

    // Create a range object
    const range = document.createRange();

    // Select the entire contents of the <pre> element
    range.selectNode(codeElement);

    // Create a selection object
    const selection = window.getSelection();
    selection.removeAllRanges(); // Clear previous selections
    selection.addRange(range); // Add the range to the selection

    // Copy the selected text to clipboard
    document.execCommand('copy');

    // Deselect the text (optional)
    selection.removeAllRanges();

    // Change button text to indicate copied
    this.textContent = 'Copied!';
    setTimeout(() => {
        // Change back to 'Copy Code' after 1 second
        this.textContent = 'Copy Code';
    }, 1000);
});

// Function to update the progress bar and text
function updateProgress() {
    const checkboxes = document.querySelectorAll('.status-checkbox');
    const totalProblems = checkboxes.length;
    let solvedProblems = 0;

    // Count how many checkboxes are checked
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            solvedProblems++;
        }
    });

    // Calculate the progress percentage
    const progress = (solvedProblems / totalProblems) * 100;

    // Update the progress bar width and text
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-count');

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${solvedProblems}/${totalProblems} Problems Solved`;

    // Save the progress value to localStorage
    localStorage.setItem('progress', progress);
    localStorage.setItem('solvedProblems', solvedProblems); // Save the count of problems solved
}

// Load the saved progress from localStorage on page load
window.onload = function() {
    // Get all checkboxes
    const checkboxes = document.querySelectorAll('.status-checkbox');

    // Load the saved state of checkboxes
    checkboxes.forEach(function(checkbox) {
        const checkboxId = checkbox.id;
        if (localStorage.getItem(checkboxId) === 'true') {
            checkbox.checked = true; // Set checkbox to checked if saved state is true
        } else {
            checkbox.checked = false;
        }
    });

    // Load the saved progress
    const savedProgress = localStorage.getItem('progress');
    const savedSolvedProblems = localStorage.getItem('solvedProblems');
    const totalProblems = checkboxes.length;

    if (savedProgress !== null) {
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-count');
        progressBar.style.width = `${savedProgress}%`;
        progressText.textContent = `${savedSolvedProblems}/${totalProblems} Problems Solved`;
    }

    // Attach event listeners to checkboxes to update progress and save state
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const checkboxId = checkbox.id;
            localStorage.setItem(checkboxId, checkbox.checked); // Save the checkbox state
            updateProgress(); // Update the progress bar
        });
    });

    // Update progress initially when the page loads
    updateProgress();
};

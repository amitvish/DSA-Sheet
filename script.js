// Select elements
const checkboxes = document.querySelectorAll(".status-checkbox");
const progressBar = document.getElementById("progress-bar");
const progressCount = document.getElementById("progress-count");

// Update progress function
function updateProgress() {
    const total = checkboxes.length;
    const checked = document.querySelectorAll(".status-checkbox:checked").length;
    const progressPercentage = Math.round((checked / total) * 100);
    
    // Update progress bar width
    progressBar.style.width = `${progressPercentage}%`;

    // Update solved/total count
    progressCount.textContent = `${checked}/${total} Problems Solved`;
}

// Add event listener to checkboxes
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
});

// Initialize the progress count on page load
updateProgress();

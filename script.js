// Function to handle GitHub button click
function openGitHub() {
    window.open('https://github.com/yourusername', '_blank');
}

// Function to handle LinkedIn button click
function openLinkedIn() {
    window.open('https://www.linkedin.com/in/kamal-sai-b3509822b', '_blank');
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to buttons
    document.getElementById('github-btn').addEventListener('click', openGitHub);
    document.getElementById('linkedin-btn').addEventListener('click', openLinkedIn);
}); 
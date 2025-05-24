// Function to handle GitHub button click
function openGitHub() {
    window.open('https://github.com/yourusername', '_blank');
}

// Function to handle LinkedIn button click
function openLinkedIn() {
    window.open('https://linkedin.com/in/yourusername', '_blank');
}

// Function to handle Twitter button click
function openTwitter() {
    window.open('https://twitter.com/yourusername', '_blank');
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to buttons
    document.getElementById('github-btn').addEventListener('click', openGitHub);
    document.getElementById('linkedin-btn').addEventListener('click', openLinkedIn);
    document.getElementById('twitter-btn').addEventListener('click', openTwitter);
}); 
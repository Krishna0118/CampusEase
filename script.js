function redirectToDashboard(event) {
    event.preventDefault(); // Prevent default form submission
    
    let passwordInput = document.getElementById("password");
    let confirmPasswordInput = document.getElementById("confirm-password");
    
    if (!passwordInput || !confirmPasswordInput) {
        alert("Password input fields not found.");
        return;
    }
    
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    
    localStorage.setItem("loggedIn", "true"); // Set session storage
    window.location.href = "dashboard.html"; // Redirect to the dashboard
}




// Logout function to clear session and redirect to login
function logoutUser() {
    localStorage.removeItem("loggedIn"); // Remove login session
    window.location.href = "index.html"; // Redirect to login
}

// Apply logout function on logout button (if exists)
document.addEventListener("DOMContentLoaded", function () {
    let logoutBtn = document.getElementById("logout-btn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutUser);
    }

    // Auto-check login status for dashboard page
    if (window.location.pathname.includes("dashboard.html")) {
        checkLoginStatus();
    }
});
// Open Login Modal
function openLoginModal() {
    document.getElementById("loginModal").style.display = "flex";
}

// Close Login Modal
function closeLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

// Close modal if user clicks outside it
window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};


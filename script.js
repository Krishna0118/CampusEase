document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.querySelector("form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission if validation fails
            
            let fullNameInput = document.querySelector("input[name='full_name']");
            let emailInput = document.querySelector("input[name='email']");
            let passwordInput = document.querySelector("input[name='password']");
            let confirmPasswordInput = document.querySelector("input[name='confirm_password']");
            let roleInput = document.querySelector("input[name='role']"); // Hidden input

            let fullName = fullNameInput.value.trim();
            let email = emailInput.value.trim();
            let password = passwordInput.value.trim();
            let confirmPassword = confirmPasswordInput.value.trim();
            let role = roleInput ? roleInput.value : "";

            // Full Name validation
            if (fullName === "") {
                alert("Full Name cannot be empty.");
                fullNameInput.focus();
                return;
            }

            // Email validation (simple regex check)
            let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                emailInput.focus();
                return;
            }

            // Password validation (at least 6 characters)
            if (password.length < 6) {
                alert("Password must be at least 6 characters long.");
                passwordInput.focus();
                return;
            }

            // Confirm Password validation (must match Password)
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                confirmPasswordInput.focus();
                return;
            }

            // Role validation (ensure it's not empty)
            if (role === "") {
                alert("Invalid role selection. Please refresh the page and try again.");
                return;
            }

            // If everything is valid, submit the form
            signupForm.submit();
        });
    }
});




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


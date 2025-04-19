// Corrected JavaScript for Login and Signup Functionality
const loginfromNav = document.querySelectorAll("#login-form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formClose = document.querySelector(".form_close");
const signupLink = document.querySelector('a[href="#signup"]');
const loginLink = document.querySelector('a[href="#login"]');

// Open login/signup form from navigation buttons
loginfromNav.forEach(button => {
    button.addEventListener('click', () => {
        home.classList.add("show");
        formContainer.classList.remove("active"); // Show login form by default
    });
});

// Close form
formClose.addEventListener('click', () => {
    home.classList.remove("show");
});

// Switch to Signup form
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

// Switch to Login form
loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Password show/hide functionality
const pwShowHide = document.querySelectorAll(".pw_hide");
pwShowHide.forEach(toggleBtn => {
    toggleBtn.addEventListener("click", () => {
        let pwFields = toggleBtn.closest(".input_box").querySelector("input");
        
        if (pwFields.type === "password") {
            pwFields.type = "text";
            toggleBtn.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            pwFields.type = "password";
            toggleBtn.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});
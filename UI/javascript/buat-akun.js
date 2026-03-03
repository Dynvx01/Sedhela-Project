document.addEventListener("DOMContentLoaded", function () {

    const passwordInput = document.getElementById("regPassword");
    const passwordToggle = document.getElementById("regPasswordToggle");
    const toggleIcon = passwordToggle.querySelector(".toggle-icon");

    if (passwordToggle) {
        passwordToggle.addEventListener("click", function () {

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                toggleIcon.classList.add("show-password");
            } else {
                passwordInput.type = "password";
                toggleIcon.classList.remove("show-password");
            }

        });
    }
    
});
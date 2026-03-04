document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registerForm");
    const passwordInput = document.getElementById("regPassword");
    const passwordToggle = document.getElementById("regPasswordToggle");
    const toggleIcon = passwordToggle.querySelector(".toggle-icon");

    // Toggle password
    passwordToggle.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            toggleIcon.classList.add("show-password");
        } else {
            passwordInput.type = "password";
            toggleIcon.classList.remove("show-password");
        }
    });

    // Submit → simpan nama lalu pindah
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value.trim();

        // simpan nama ke localStorage
        localStorage.setItem("fullName", fullName);

        // pindah ke dashboard (bukan login lagi)
        window.location.href = "login.html";
    });

});
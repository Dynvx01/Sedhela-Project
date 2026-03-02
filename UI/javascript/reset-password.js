// =======================
// PASSWORD TOGGLE SYSTEM
// =======================

function setupPasswordToggle(inputId, toggleId) {
    const input = document.getElementById(inputId);
    const toggle = document.getElementById(toggleId);

    toggle.addEventListener("click", function () {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";

        // supaya style active dari CSS jalan
        toggle.classList.toggle("active");
    });
}

// aktifkan untuk dua input
setupPasswordToggle("newPassword", "toggleNewPassword");
setupPasswordToggle("confirmPassword", "toggleConfirmPassword");


// =======================
// FORM SUBMIT
// =======================

document.getElementById("resetPasswordForm")
.addEventListener("submit", function(e){
    e.preventDefault();

    const newPass = document.getElementById("newPassword").value;
    const confirmPass = document.getElementById("confirmPassword").value;

    if(newPass !== confirmPass){
        return; // stop saja tanpa alert
    }

    // bersihkan data reset
    localStorage.removeItem("otpCode");
    localStorage.removeItem("resetEmail");

    // langsung kembali ke login
    window.location.href = "login.html";
});
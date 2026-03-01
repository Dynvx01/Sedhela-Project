document.getElementById("forgotForm").addEventListener("submit", function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;

    if(!email) {
        return; // tidak perlu alert
    }

    // Simulasi kirim OTP
    localStorage.setItem("resetEmail", email);
    localStorage.setItem("otpCode", "123456");

    // langsung pindah
    window.location.href = "verify.html";
});
document.getElementById("forgotForm").addEventListener("submit", function(e){
    e.preventDefault();
    const email = document.getElementById("email").value;
    if(!email) {
        alert("Masukkan email yang valid!");
        return;
    }
    // Simulasi kirim OTP
    localStorage.setItem("resetEmail", email); // simpan email sementara
    localStorage.setItem("otpCode", "123456"); // OTP simulasi
    alert("Kode OTP telah dikirim ke email!");
    window.location.href = "verify.html";
});
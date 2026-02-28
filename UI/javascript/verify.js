document.getElementById("verifyForm").addEventListener("submit", function(e){
    e.preventDefault();
    const enteredOtp = document.getElementById("otp").value;
    const otpCode = localStorage.getItem("otpCode");

    if(enteredOtp === otpCode){
        alert("OTP valid! Silahkan buat password baru.");
        window.location.href = "reset-password.html";
    } else {
        alert("OTP salah! Cek kembali email Anda.");
    }
})
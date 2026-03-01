document.getElementById("verifyForm").addEventListener("submit", function(e){
    e.preventDefault();

    const enteredOtp = document.getElementById("otp").value;
    const otpCode = localStorage.getItem("otpCode");

    if(enteredOtp === otpCode){
        window.location.href = "reset-password.html";
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const nama = localStorage.getItem("fullName");
    const email = localStorage.getItem("email");
    const hp = localStorage.getItem("phone");

    document.getElementById("namaUser").textContent = nama || "-";
    document.getElementById("emailUser").textContent = email || "-";
    document.getElementById("hpUser").textContent = hp || "-";

    // icon huruf pertama nama
    if(nama){
        document.getElementById("profileIcon").textContent =
        nama.charAt(0).toUpperCase();
    }

});

function kembaliDashboard(){
    window.location.href = "dashboard.html";
}
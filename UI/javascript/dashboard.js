document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // MENU CARD CLICK
    // ========================

  document.getElementById("bukaRekening").addEventListener("click", function () {
    window.location.href = "ktp.html";
});
    document.getElementById("cekStatus").addEventListener("click", function () {
        alert("Menu Cek Status diklik");
    });

    document.getElementById("ambilAntrian").addEventListener("click", function () {
        alert("Menu Ambil Antrian diklik");
    });

    // ========================
    // DROPDOWN USER
    // ========================

    const userButton = document.getElementById("userButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    userButton.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdownMenu.style.display =
            dropdownMenu.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function () {
        dropdownMenu.style.display = "none";
    });

    // ========================
    // WELCOME TEXT
    // ========================

    const name = localStorage.getItem("fullName");
    const userName = document.getElementById("userName");

    if (name && userName) {
        userName.textContent = name.toUpperCase();
    }

});

// ========================
// DROPDOWN MENU ACTION
// ========================

const profilMenu = document.getElementById("profilMenu");
const pengaturanMenu = document.getElementById("pengaturanMenu");
const logoutMenu = document.getElementById("logoutMenu");

// Profil
profilMenu.addEventListener("click", function () {
    window.location.href = "profil.html";
});

// Pengaturan
pengaturanMenu.addEventListener("click", function () {
    window.location.href = "pengaturan.html";
});

// Logout
logoutMenu.addEventListener("click", function () {

    // hapus semua data user
    localStorage.clear();

    // langsung pindah ke login
    window.location.href = "../HTML/login.html";

});
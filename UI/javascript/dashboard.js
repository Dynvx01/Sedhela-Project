document.addEventListener("DOMContentLoaded", function () {

    // ========================
    // MENU CARD CLICK
    // ========================

    document.getElementById("bukaRekening").addEventListener("click", function () {
        alert("Menu Buka Rekening diklik");
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
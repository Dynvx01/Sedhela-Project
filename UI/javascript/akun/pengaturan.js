document.getElementById("savePassword").addEventListener("click", function(){

    const oldPassword = document.getElementById("oldPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const savedPassword = localStorage.getItem("password");

    if(oldPassword !== savedPassword){
        alert("Password lama salah!");
        return;
    }

    if(newPassword !== confirmPassword){
        alert("Konfirmasi password tidak sama!");
        return;
    }

    localStorage.setItem("password", newPassword);

    alert("Password berhasil diganti!");

});

function kembaliDashboard(){
    window.location.href = "dashboard.html";
}
function lanjutSelfie(){

const ktp = document.getElementById("ktpInput").files[0];

if(!ktp){
alert("Upload foto KTP terlebih dahulu");
return;
}

localStorage.setItem("fotoKTP", ktp.name);

window.location.href = "selfie.html";

}
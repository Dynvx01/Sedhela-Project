function lanjutForm(){

const selfie = document.getElementById("selfieInput").files[0];

if(!selfie){
alert("Upload foto selfie terlebih dahulu");
return;
}

localStorage.setItem("fotoSelfie", selfie.name);

window.location.href = "formulir.html";

}
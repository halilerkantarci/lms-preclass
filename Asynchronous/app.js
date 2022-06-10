document.getElementById("btn1").addEventListener("click", () => {
  setTimeout(() => {
    alert("uyarı");
    console.log("butona tıklandı,5sn sonra çıktı");
  }, 5000);
});

document.getElementById("btn").addEventListener("click", () => {
  setTimeout(() => {
    console.log("butona tıklandı,1sn sonra çıktı");
  }, 1000);
});

function showText() {
  console.log("mesaj");
}

showText();

setTimeout(() => {
  console.log("4 saniye sonra");
}, 4000);

console.log("merhaba 2");

var formularz = document.getElementById("formularz");
var pole = document.getElementById("pole");

formularz.onsubmit = function (event) {
    event.preventDefault();
    var zadanie = pole.value;
    pole.value = "";
    console.log(zadanie);
}
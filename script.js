var formularz = document.getElementById("formularz");
var pole = document.getElementById("pole");
var lista = document.getElementById("lista");

function stworzElemntListy (zadanie) {
    var element = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = checkboxKlikniety;
    element.innerText = zadanie;
    element.prepend(checkbox);

    return element;
}

function checkboxKlikniety (event) {
    var element = event.target.parentElement;
    element.classList.toggle("ukonczony");
}

formularz.onsubmit = function (event) {
    event.preventDefault();
    var zadanie = pole.value;
    pole.value = "";
    var element = stworzElemntListy(zadanie);
    lista.prepend(element);
}
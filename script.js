var texto = document.getElementById("pantalla");
texto.addEventListener("keyup", (evento) => {
    var inputText = evento.path[0].value;
    window.inputText = inputText;
    console.log(inputText);
});
var igual = document.getElementById("equal");
igual.addEventListener("click", (info) => {
    console.log(eval(inputText));
    texto.value = eval(inputText);
});
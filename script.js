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
var btnreset = document.getElementById("reset");
btnreset.addEventListener("click", (infores) => {
    inputText = ""; 
    texto.value = inputText;
});
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", (info1) => {
    inputText += "1"; 
    texto.value = inputText;
});
var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", (info2) => {
    inputText += "2"; 
    texto.value = inputText;
});
var btn3 = document.getElementById("btn3");
btn3.addEventListener("click", (info3) => {
    inputText += "3"; 
    texto.value = inputText;
});
var btn4 = document.getElementById("btn4");
btn4.addEventListener("click", (info4) => {
    inputText += "4"; 
    texto.value = inputText;
});
var btn5 = document.getElementById("btn5");
btn5.addEventListener("click", (info5) => {
    inputText += "5"; 
    texto.value = inputText;
});
var btn6 = document.getElementById("btn6");
btn6.addEventListener("click", (info6) => {
    inputText += "6"; 
    texto.value = inputText;
});
var btn7 = document.getElementById("btn7");
btn7.addEventListener("click", (info7) => {
    inputText += "7"; 
    texto.value = inputText;
});
var btn8 = document.getElementById("btn8");
btn8.addEventListener("click", (info8) => {
    inputText += "8"; 
    texto.value = inputText;
});
var btn9 = document.getElementById("btn9");
btn9.addEventListener("click", (info9) => {
    inputText += "9"; 
    texto.value = inputText;
});
var btn0 = document.getElementById("btn0");
btn0.addEventListener("click", (info0) => {
    inputText += "0"; 
    texto.value = inputText;
});
var btnsuma = document.getElementById("btns");
btnsuma.addEventListener("click", (infos) => {
    inputText += "+"; 
    texto.value = inputText;
});
var btnresta = document.getElementById("btnr");
btnresta.addEventListener("click", (infor) => {
    inputText += "-"; 
    texto.value = inputText;
});
var btnmult = document.getElementById("btnm");
btnmult.addEventListener("click", (infom) => {
    inputText += "*"; 
    texto.value = inputText;
});
var btndiv = document.getElementById("btnd");
btndiv.addEventListener("click", (infod) => {
    inputText += "/"; 
    texto.value = inputText;
});
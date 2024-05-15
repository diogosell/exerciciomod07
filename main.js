function validaNum() {
let numeroA = Number(document.getElementById('numA').value);
let numeroB = Number(document.getElementById('numB').value);
let mensagem = document.getElementById('mensagem');


if (numeroB > numeroA) {
    mensagem.innerText = "Formulário válido! B é maior que A.";
    mensagem.style.color = "green";
    return false;
} else {
    mensagem.innerText = "Formulário inválido! B deve ser maior que A.";
    mensagem.style.color = "red";
    return false;
    }
}

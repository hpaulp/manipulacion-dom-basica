const h1 = document.querySelector('h1');
const form = document.querySelector('form');
const input1 = document.querySelector('#Calculo1');
const input2 = document.querySelector('#Calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#resultado');
const pResulText = document.querySelector('#resulTexto');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    const concatena = input1.value + input2.value;
    pResultado.innerText = "El resultado es: " +suma;
    pResulText.innerText = "El resultado es: " +concatena;

}



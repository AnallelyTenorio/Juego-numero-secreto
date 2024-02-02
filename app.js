let numeroSecreto = 0;
let intentos = 0;
let listaNumerosAleatorios = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Adivinaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El secreto es menor');
        } else {
            asignarTextoElemento('p', 'El secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosAleatorios)
    //Si ya salieron todos los numeros
    if (listaNumerosAleatorios.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {
        //Si el numero generado esta incluido en la lista
        if (listaNumerosAleatorios.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosAleatorios.push(numeroGenerado)
            return numeroGenerado;
        }

    }



}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja()
    condicionesIniciales()
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')

}


condicionesIniciales();
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btn-iniciar');

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
    }
    inicializar() {
        btnEmpezar.classList.add('hide');
    }
    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }
}

function EmpezarJuego() {
    window.juego = new Juego();
}
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnEmpezar = document.getElementById('btn-iniciar');

class Juego {
    constructor() {
        this.inicializar();
    }
    inicializar() {
        btnEmpezar.classList.add('hide');
    }
}

function EmpezarJuego() {
    var juego = new Juego();
}
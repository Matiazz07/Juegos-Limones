let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=75;
const ANCHO_PERSONAJE=50;
const ALTURA_LIMON=15;
const ANCHO_LIMON=15;

let perosnajeX=canvas.width/2;
let limonX=0;
let limonY=0;

function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="red";
    ctx.fillRect(perosnajeX-(ANCHO_PERSONAJE/2),canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function dibujar(){
    dibujarPersonaje();
    dibujarSuelo();
    dibuajrLimon();
}

function moverIzquierda(){
    perosnajeX=perosnajeX-10;
    actualizarPantalla();
}

function moverDerecha(){
    perosnajeX=perosnajeX+10;
    actualizarPantalla();
}

function actualizarPantalla(){
    limpiarCanvas();
    dibujarPersonaje();
    dibujarSuelo();
    dibuajrLimon();
}

function limpiarCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function dibuajrLimon(){
    ctx.fillStyle="yellow";
    ctx.fillRect(limonX,limonY,ALTURA_LIMON,ANCHO_LIMON);
}

function moverLimon(){
    limonY=limonY+10;
    actualizarPantalla();
}
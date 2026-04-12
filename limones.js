let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=40;
const ALTURA_PERSONAJE=80;
const ANCHO_PERSONAJE=60;
const ALTURA_LIMON=20;
const ANCHO_LIMON=20;

let personajeX=canvas.width/2-(ANCHO_PERSONAJE/2);
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=0;
let limonY=0;

function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="red";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function dibujar(){
    dibujarPersonaje();
    dibujarSuelo();
    aparecerLimon();
}

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    detectarEncuentro();
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    detectarEncuentro();
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
    detectarEncuentro();
}

function detectarEncuentro(){
    if(limonX+ANCHO_LIMON>=personajeX && limonX<=personajeX+ANCHO_PERSONAJE && limonY+ALTURA_LIMON>personajeY && limonY<personajeY+ALTURA_PERSONAJE){
        //alert("ATRAPADO!!") 
        aparecerLimon();}
}

function probarAleatorio(){
    let aleatorio=generarAleratorio(0,600);
    return console.log(aleatorio);
}

function aparecerLimon(){
    limonX=generarAleratorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}
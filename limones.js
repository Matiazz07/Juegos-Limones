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
let puntaje=0;
let vidas=3;
let velocidadCaida=50;
let intervalo;

function dibujarSuelo(){
    ctx.fillStyle="green";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}

function dibujarPersonaje(){
    ctx.fillStyle="red";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}

function dibujar(){
    intervalo=setInterval(moverLimon,velocidadCaida);
    dibujarPersonaje();
    dibujarSuelo();
    aparecerLimon();
}

function moverIzquierda(){
    personajeX=0;
    actualizarPantalla();
    detectarEncuentro();
}

function moverDerecha(){
    personajeX=canvas.width-(ANCHO_PERSONAJE);
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
    ctx.fillStyle="#91CC1D";
    ctx.fillRect(limonX,limonY,ALTURA_LIMON,ANCHO_LIMON);
}

function moverLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarEncuentro();
    detectarPiso();
}

function detectarEncuentro(){
    if(limonX+ANCHO_LIMON>=personajeX && limonX<=personajeX+ANCHO_PERSONAJE && limonY+ALTURA_LIMON>personajeY && limonY<personajeY+ALTURA_PERSONAJE){
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje",puntaje);
    }if(puntaje==3){
        velocidadCaida=150;
    }if(puntaje==6){
        velocidadCaida=100
    }if(puntaje==10){
        alert("Vendelos y te compras una coca");
        clearInterval(intervalo);
    }
}

function detectarPiso(){
    if(limonY+ALTURA_LIMON==canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1
        mostrarEnSpan("txtVidas",vidas);
    }if(vidas<=0){
        alert("GAME OVER!!");
        clearInterval(intervalo);
    }
}

function aparecerLimon(){
    limonX=generarAleratorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}

function reiniciar(){
    clearInterval(intervalo);
    puntaje = 0;
    vidas = 3;
    personajeX = canvas.width / 2 - (ANCHO_PERSONAJE / 2);
    personajeY = canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
    mostrarEnSpan("txtPuntaje", puntaje);
    mostrarEnSpan("txtVidas", vidas);
    aparecerLimon();
    actualizarPantalla();
    intervalo = setInterval(moverLimon,velocidadCaida);
}
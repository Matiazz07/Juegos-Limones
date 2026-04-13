function generarAleratorio(min,max){
    let random=Math.random();
    let numero=random*(max-min);
    let numeroEnt=parseInt(numero);
    numeroEnt=numeroEnt+min;
    return numeroEnt;
}

function mostrarEnSpan(idSpan,valor){
    let cmpValor=document.getElementById(idSpan);
        cmpValor.textContent=valor;
}
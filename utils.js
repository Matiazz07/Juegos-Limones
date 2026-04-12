function generarAleratorio(min,max){
    let random=Math.random();
    let numero=random*(max-min);
    let numeroEnt=parseInt(numero);
    numeroEnt=numeroEnt+min;
    return numeroEnt;
}
//Crea un numero aleatorio entre 1-100
function generarNumAleatorio(){
    let aleatorio=Math.random();
    let num=aleatorio*100;
    let numInt=parseInt(num)
    //pasa de estar en 0-99 a estar en 1-100
    let numeroAleatorio=numInt+1;
    return numeroAleatorio;
}
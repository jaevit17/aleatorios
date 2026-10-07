//Crea un numero aleatorio entre 1-100
function generarNumAleatorio(){
    let aleatorio=Math.random();
    let num=aleatorio*100;
    let numInt=parseInt(num)
    //pasa de estar en 0-99 a estar en 1-100
    let numeroAleatorio=numInt+1;
    return numeroAleatorio;
}

//
function generarAleatorios(){
    //a.
    let aleatorios=[];
    //b.
    let cmpNum=document.getElementById("txtNum");
    txtNum=cmpNum.value;
    let num=parseInt(txtNum);

    if(num>=5&&num<=20){
        //c.
        for(let i=0;i<num;i++){
            console.log(i);
            let numAleatorio=generarNumAleatorio();
            aleatorios.push(numAleatorio);
        }
        console.log(aleatorios);
    }else{
        alert("Ingresa un numero entre 5 y 20");
    }
}
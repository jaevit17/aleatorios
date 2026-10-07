//Crea un numero aleatorio entre 1-100
function generarNumAleatorio(){
    let aleatorio=Math.random();
    let num=aleatorio*100;
    let numInt=parseInt(num)
    //pasa de estar en 0-99 a estar en 1-100
    let numeroAleatorio=numInt+1;
    return numeroAleatorio;
}


//Con numero recuperado crea tamaño indice y muestra arreglo
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
            //e.
            let numAleatorio=generarNumAleatorio();
            aleatorios.push(numAleatorio);
        }
        console.log(aleatorios);
        mostrarResultados(aleatorios);
    }else{
        alert("Ingresa un numero entre 5 y 20");
    }
}


//Muestra tabla en pantalla
function mostrarResultados(arregloNumeros){
    let contenidoTabla="";
    contenidoTabla+="<table>"+
                    "<tr>"+
                    "<th>Tabla</th>"+
                    "</tr>";
    for(let i=0;i<arregloNumeros.length;i++){
        contenidoTabla+="<tr>"+
                        "<td>"+arregloNumeros[i]+"</td>"+
                        "</tr>";
    }
    contenidoTabla+="</table>";
    let cmpTabla=document.getElementById("txtTabla");
    cmpTabla.innerHTML=contenidoTabla;



}
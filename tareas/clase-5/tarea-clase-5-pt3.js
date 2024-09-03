//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

document.querySelector("#calcular-tiempo-total").onclick = function(){
    
    const tiempoTotal = calcularTiempoTotal();

    const horasTotales = Math.floor(tiempoTotal / 3600);
    const minutosTotales = Math.floor((tiempoTotal % 3600) / 60);
    const segundosTotales = tiempoTotal % 60
   
    document.getElementById("texto-tiempo-total").innerText = 
   `El tiempo total de las clases es de ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos`
    
        return false;
}
    

function calcularTiempoTotal(){

    let tiempoTotal = 0

    const horasClases = document.querySelectorAll(".horas-clases");
    for (let i = 0; i < horasClases.length; i++){
        tiempoTotal  += Number(horasClases[i].value) * 3600 
    }

    const minutosClases = document.querySelectorAll(".minutos-clases");
    for (let i = 0; i < minutosClases.length; i++){
        tiempoTotal  += Number(minutosClases[i].value) * 60
    }

    const segundosClases = document.querySelectorAll(".segundos-clases");
    

    for (let i = 0; i < segundosClases.length; i++){
        tiempoTotal  += Number(segundosClases[i].value)
    }

        return tiempoTotal;
}




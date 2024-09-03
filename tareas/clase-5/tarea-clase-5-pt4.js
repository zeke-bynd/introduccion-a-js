//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

    document.querySelector("#calcular-numeros").onclick = function(){

        const listaNumeros = document.querySelectorAll("li");
        const arrayNumeros = [];

        for (let i = 0; i < listaNumeros.length; i++){
            arrayNumeros.push(Number(listaNumeros[i].textContent.trim()));
        }

        const calculoNumeroPromedio = calcularPromedio(arrayNumeros);
        const calculoNumeroPequeno = calcularNumeroPequeno(arrayNumeros);
        const calculoNumeroGrande = calcularNumeroGrande(arrayNumeros);
        const calculoNumeroFrecuente = calcularNumeroFrecuente(arrayNumeros);


        document.getElementById("texto-numero-promedio").innerText = `El promedio de numeros es ${calculoNumeroPromedio}`;
        document.getElementById("texto-numero-pequeno").innerText = `El numero mas pequeno es ${calculoNumeroPequeno}`;
        document.getElementById("texto-numero-grande").innerText = `El numero mas grande es ${calculoNumeroGrande}`;
        document.getElementById("texto-numero-frecuente").innerText = `El numero mas frecuente es ${calculoNumeroFrecuente}`;

        return false;
}

        

function calcularPromedio(arrayNumeros){
    let promedio = 0
    for (let i = 0; i < arrayNumeros.length; i++){
        promedio += arrayNumeros[i]
    }
        return promedio / arrayNumeros.length;
}

function calcularNumeroPequeno(arrayNumeros){
    let numeroPequenio = arrayNumeros[0];
    
    for (let i = 1; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] < numeroPequenio){
            numeroPequenio = arrayNumeros[i];
        }
    }  
        return numeroPequenio; 
}

function calcularNumeroGrande(arrayNumeros){
    let numeroGrande = arrayNumeros[0]

    for (let i = 1; i < arrayNumeros.length; i++){
        if (arrayNumeros[i] > numeroGrande){
            numeroGrande = arrayNumeros[i];
        }
    }
        return numeroGrande;
}

function calcularNumeroFrecuente(arrayNumeros){

    const frecuencia = arrayNumeros.reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const numeroMasFrecuente = Object.keys(frecuencia).reduce((max, num) => {
        return frecuencia[num] > frecuencia[max] ? num : max;
    }, Object.keys(frecuencia)[0]);
    return numeroMasFrecuente
}

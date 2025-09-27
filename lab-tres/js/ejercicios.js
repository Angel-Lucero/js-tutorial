// Ejercicio 1: Angel Lucero - 2021211
function verificarNumero(numero) {
    if (numero > 0) return "Positivo";
    if (numero < 0) return "Negativo";
    return "Cero";
}

function ejecutarEjercicio1() {
    const numeroInput = document.getElementById('numeroInput').value;
    const resultado = document.getElementById('resultado1');
    
    if (!numeroInput) {
        resultado.innerHTML = 'Por favor ingresa un número';
        return;
    }
    
    const numero = parseFloat(numeroInput);
    
    if (isNaN(numero)) {
        resultado.innerHTML = 'Por favor ingresa un número válido';
    } else {
        resultado.innerHTML = `${numero} es: ${verificarNumero(numero)}`;
    }
}

//Ejercicio 2: Angel Lucero - 2021211
function verificarEdad() {
    const edadInput = document.getElementById('edadInput').value;
    const resultado = document.getElementById('resultado2');
    
    if (!edadInput) {
        resultado.innerHTML = 'Por favor ingresa una edad';
        return;
    }
    
    const edad = parseInt(edadInput);
    
    if (isNaN(edad)) {
        resultado.innerHTML = 'Por favor ingresa un número válido';
    } else if (edad >= 18) {
        resultado.innerHTML = 'Eres mayor de edad';
    } else {
        resultado.innerHTML = 'Eres menor de edad';
    }
}

//Ejercicio 14: Angel Lucero - 2021211
function imprimirPares() {
    let numeros = '';
    for (let i = 2; i <= 20; i += 2) {
        numeros += i + ' ';
    }
    document.getElementById('resultado14').innerHTML = numeros;
}

//Ejercicio 16: Angel Lucero - 2021211
function encontrarMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) mayor = numeros[i];
    }
    return mayor;
}

function ejecutarEjercicio16() {
    const array1 = [3, 7, 2, 99];
    const array2 = [-1, -5, -2];
    
    document.getElementById('resultado16').innerHTML = `
        <p>En [${array1}] el mayor es: ${encontrarMayor(array1)}</p>
        <p>En [${array2}] el mayor es: ${encontrarMayor(array2)}</p>
    `;
}

//Ejercicio 22: Angel Lucero - 2021211
function fizzBuzz() {
    let resultado = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultado += 'FizzBuzz ';
        } else if (i % 3 === 0) {
            resultado += 'Fizz ';
        } else if (i % 5 === 0) {
            resultado += 'Buzz ';
        } else {
            resultado += i + ' ';
        }
        
        if (i % 10 === 0) resultado += '<br>';
    }
    document.getElementById('resultado22').innerHTML = resultado;
}

//Ejercicio 23: Angel Lucero - 2021211
function esPalindromo(texto) {
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const textoReverso = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoReverso;
}

function verificarPalindromo() {
    const textoInput = document.getElementById('palindromoInput').value;
    const resultado = document.getElementById('resultado23');
    
    if (!textoInput) {
        resultado.innerHTML = 'Por favor ingresa un texto';
        return;
    }
    
    if (esPalindromo(textoInput)) {
        resultado.innerHTML = `"${textoInput}" es un palíndromo`;
    } else {
        resultado.innerHTML = `"${textoInput}" no es un palíndromo`;
    }
}
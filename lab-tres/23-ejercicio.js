function esPalindromo(texto) {
    let textoLimpio = texto.toLowerCase().replace(/ /g, '');
    let textoReverso = textoLimpio.split('').reverse().join('');
    return textoLimpio === textoReverso;
}

console.log("Ejercicio 23:");
console.log("'anita lava la tina' es palíndromo:", esPalindromo("anita lava la tina"));
console.log("'hola mundo' es palíndromo:", esPalindromo("hola mundo"));
console.log("'reconocer' es palíndromo:", esPalindromo("reconocer"));
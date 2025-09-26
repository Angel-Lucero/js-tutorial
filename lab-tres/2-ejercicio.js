const readline = require('readline');

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function verificarEdad() {
    console.log("Ejercicio 2:")
    leer.question('¿Cuántos años tienes? ', (edadIngresada) => {
        let edad = parseInt(edadIngresada);
        
        if (isNaN(edad)) {
            console.log("Por favor, ingresa un número válido");
        } else if (edad >= 18) {
            console.log("Eres mayor de edad");
        } else {
            console.log("Eres menor de edad");
        }
        
        leer.close();
    });
}

verificarEdad();
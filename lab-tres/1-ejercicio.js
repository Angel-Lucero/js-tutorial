const numero = 17

function verificarNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Cero";
    }
}

console.log("Ejercicio 1:");
console.log("5 es:", verificarNumero(5));
console.log("-3 es:", verificarNumero(-3));
console.log("0 es:", verificarNumero(0));
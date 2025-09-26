function encontrarMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}


console.log("Ejercicio 16:");
console.log("En [3, 7, 2, 9] el mayor es:", encontrarMayor([3, 7, 2, 99]));
console.log("En [-1, -5, -2] el mayor es:", encontrarMayor([-1, -5, -2]));
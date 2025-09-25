/**
 * Se solicite un número a usuario para adivinar un número secreto 
 * que sera generado aleatoriamente entre el rango de 1 a 10
 */

const numeroSecreto = Math.floor(Math.random()*11-1)
const numeroJugador = parseInt(prompt('Adivina el numeroo entre el 1 y 10'))

console.log("El numero que ingresaste fue:" + numeroJugador)

if (numeroJugador === numeroSecreto) {
    console.log('Felicidades, ganaste, adivinaste el numero Secreto')
} else if (numeroJugador< numeroSecreto){
    console.log('El numero secreto es mayor')
} else {
    console.log('El numero secreto es menor al ingresado')
}


console.log('El numero secreto era: ' +numeroSecreto)
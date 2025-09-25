/** 
 * 
 *      TIPO DE DATO NUMBER `number`
 */

// 1. Entero y decimal
const enter = 33
const decimal = 3.34
// 2. Notación cientifica
const cientifica = 5e4
// 3. Infinito y Nan(no es número)
const Infinito = Infinity
const noEsNumer = NaN

//OPERACIONES ARITMÉTICAS
//  1. Suma, resta, multiplicacion y division
const suma = 5 + 5
const resta = 10 - 9
const multiplicacion = 5 * 8
const division = 27/9

// 2. Modulo y exponenciación
const modulo = 16 % 8 //Da 0, porque es el residui de 16/8
const exponenciación = 2**4

//la presición en JavaScript
const resultado = 0.1 + 0.2 //0.3

console.log(resultado)
console.log(resultado.toFixed(1))//Arregla los decimales
console.log(resultado == 0.3) //false
console.log(resultado.toFixed(1) == 0.3)//true

//OPERACIONES AVANZADAS
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto =  Math.abs(-7)
const aleatorio = Math.floor(Math.random()*20+1)
//console.log(raizCuadrada)
//console.log(valorAbsoluto)
console.log(aleatorio)

//Lenguajes de programación

                            //Runtime Exception  
//COMPILADOS: Java (JVM -> .java -> .class -> .jar)
//INTERPRETADOS: javascript --> lee -> ejecuta

const numero = 2;
const boolean = true;
//conversión implicita
console.log(2+boolean)


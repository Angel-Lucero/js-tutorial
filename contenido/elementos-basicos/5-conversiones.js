/** 
 * 
 *          CONVERSIONES -> EXPLICITAS e IMPLICITAS 
 * 
 */
const string = '54'
const integer = parseInt(string)

//console.log(string)     
//console.log(integer)

const float = parseFloat("3.14")
//console.log(typeof floar) //number

const binario = '1010'//10
const decimal = parseInt(binario, 2)
//console.log(decimal)

const hexa = 'CAFE'
const decimalHex = parseInt(hexa, 16)

//console.log(decimalHex)

//Conversino Implicit Type Casting
const resultado = '5' + 3//53
//console.log(resultado)

const sumaConBoolean = '3'+ true
//console.log(sumaConBoolean)

const sumaConNumero = 2 + true
//console.log(sumaConNumero)

const valorSting = '20'
const valorNumber = 10
const valorBoolean = true
console.log('--------------------------')
console.log(valorSting+valorSting)//Concatenar
console.log(valorSting+valorNumber)//Concatenar
console.log(valorSting+valorBoolean)//Concatenar

console.log('--------------------------')
console.log(valorNumber+valorNumber)//sumar
console.log(valorNumber+valorSting)//Concatenar
console.log(valorNumber+valorBoolean)//sumar

console.log('--------------------------')
console.log(valorBoolean+valorBoolean)//sumar
console.log(valorBoolean+valorSting)//sumar
console.log(valorBoolean+valorNumber)//Concatenar

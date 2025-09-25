/**
 * 
 * 
 * ESTRUCTURA SWITCH
 * 
 */

let comprar = 'Naranjas'

switch (comprar) {
    case 'Naranjas':
        console.log('Las naranjas estan a Q10 la mano')
        break;
    case 'Manzanas':
        console.log('Las naranjas estan a Q10 la mano')
        break;
    case 'Platanos':
        console.log('Las naranjas estan a Q10 la mano')
        break;
    default:
        console.log(`
            Lo sentimos, no contamos con ${comprar}`)//Forma de llamar variables: EL: Expression Lenguage
        break;
}
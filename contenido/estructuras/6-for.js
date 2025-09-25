/** 
 * 
 * 
 *          CICLO FOR -> PARA

for (let i = 0; i< Array.length; i++){
    const element = Array[i]
}
*/



let lista = ["comer", "dormir", "code", "repetir"]

for (let i = 0; i< Array.length; i++){
    console.log([lista]);
}

/**
 * 
 *      FOR-OF ------------> FOR EACH
 * 
 *  for (const element of object) {
    
    } 
    
*/

let canasta = ["manzana", "naranjas", "mangos", "uvas"]
for (fruta of canasta) {
    console.log(fruta)
}

/**
 *      FOR-IN
 *      itera sobre las propiedades de un objeto 
 *  
 *      for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

 */
 const canastaDeFrutas = {
    nombre : "manzana",
    precio : 5.0,
    tipo : "verde",
    marca : "Chanita's apples"
 }

for (fruta in canastaDeFrutas){ //este for muestra los atributos de 'canastaDeFrutas'
    console.log(fruta)
}

for (fruta in canastaDeFrutas){ //este for muestra los atributos de 'canastaDeFrutas' con los datos
    console.log(`${fruta} : ${canastaDeFrutas[fruta]}`)
}
/**
 *
 *     Este da error: 
 *     
 *       for(fruta of canastaDeFrutas){
            console.log(fruta)
        }
 *  
 */

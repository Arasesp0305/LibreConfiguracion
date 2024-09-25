console.log("Hola Mundo");

/**
 * Tipos de Datos
 * 
 * string
 * number - enteros y decimales
 * boolean - true / false
 * null
 * undefined
 */

//
var nombre:string = "Alejandro"; // Variable Global
let apellido:string = "Rasero"; // Variable Local
const PI:number = 3.141592;

//Podemos declarar varias variables en una misma linea e inicializarlas en la misma
let a:string = "a", b:string = "b", c:string = "c";

// ARRAY DE DATOS
let alumnos1A:string[] = ["Juan", "Jose", "Alex"]; // Array que solo almacena un tipo de dato
let alumnos2A:string[] = ["Fran"];
let alumnos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"]; // Los tres puntos devuelven todos los valores dentro de un Array
let valores: (string | number | boolean)[] = ["Hola", 2, true]; //Array que almacena varios tipos de datos

console.log(alumnos);

/**
 * formas de concatenar Strings
 * 
 * + -> Une las cadenas de forma literal
 * , -> Une las cadenas con un espacio entre ellas
 * `` -> Al usar estas tildes como comillas podemos declarar las variables dentro del string con el formato ${variable}
 */
console.log("Hola " + nombre + " " + apellido);
console.log("Hola", nombre, apellido);
console.log(`Hola ${nombre} ${apellido}`);


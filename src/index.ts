console.log("Hola Mundo");

/**
 * ------------------------------------------------
 * Tipos de Datos
 * ------------------------------------------------
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

/**
 * -------------------------------------------------------------
 * ARRAYS DE DATOS
 * -------------------------------------------------------------
 */
let alumnos1A:string[] = ["Juan", "Jose", "Alex"]; // Array que solo almacena un tipo de dato
let alumnos2A:string[] = ["Fran"];
let alumnos:string[] = [...alumnos1A, ...alumnos2A, "Pablo"]; // Los tres puntos devuelven todos los valores dentro de un Array
let valores: (string | number | boolean)[] = ["Hola", 2, true]; //Array que almacena varios tipos de datos

console.log(alumnos);

/**
 * ------------------------------------------------------------
 * formas de concatenar Strings
 * ------------------------------------------------------------
 * 
 * + -> Une las cadenas de forma literal
 * , -> Une las cadenas con un espacio entre ellas
 * `` -> Al usar estas tildes como comillas podemos declarar las variables dentro del string con el formato ${variable}
 */
console.log("Hola " + nombre + " " + apellido);
console.log("Hola", nombre, apellido);
console.log(`Hola ${nombre} ${apellido}`);

/**
 * -------------------------------------------------------------
 * OBJETOS
 * -------------------------------------------------------------
 */

//Declaracion de objetos de un solo uso
let misDatos = {
    nombre: "Alejandro",
    apellidos: "Rasero",
    edad: 20
};

let configuracion = {
    versionTS: "Es6",
    versionCodigo: "1.0",
    ...misDatos //Con los 3 puntos podemos concatenar los atributos de otro objeto
};

let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;

console.log(`${propiedad1} ${propiedad2}`);

//Enumeraciones en TypeScript
enum EstadoTarea {"Pendiente" = "P", "Enproceso" = "E", "Terminado" = "T"};

let estadoPendiente = EstadoTarea.Enproceso;

//Interfaces en TypeScript: Las interfaces son modelos de objeto, es decir, constructores
interface Tarea{
    nombre:string,
    prioridad:number,
    estado:EstadoTarea
}

//Declaramos una instancia del objeto
let tarea1:Tarea = {nombre:"Tarea1", prioridad:2, estado:EstadoTarea.Enproceso}

//Comparacion simple para comprobar el funcionamiento de los objetos
if (tarea1.estado == "E"){
    console.log("Estado en proceso")
} else if(tarea1.estado == "P"){
    console.log("Estado pendiente")
} else if(tarea1.estado == "T"){
    console.log("Estado terminado")
}

//Type es un tipo de objeto, muy similar a interface
type Empleado = {
    nombre:string,
    edad:number,
    sueldo:number
}


let empleado1:Empleado = {nombre:"Alejandro", edad:20, sueldo:2500};

console.log(empleado1.edad);

type Administrador = {
    id:number
}

//Se pueden declarar varios Type como tipo de dato para combinar dos constructores
let empleado2:Empleado & Administrador = {
    nombre:"Juan",
    edad:25,
    sueldo:3500,
    id:1234,
}

/**
 * -------------------------------------------------------------
 * BUCLES Y ESTRUCTURAS DE CONTROL
 * -------------------------------------------------------------
 */

//Operador ternario 
//condicion ? verdadero : falso

console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : `La tarea ${tarea1.nombre} aún no se encuentra en ejecucion`)

//IF-ELSE
if(tarea1.estado == "P"){

}else if(tarea1.estado== "E"){

}else {

}

//SWITCH

switch(tarea1.estado){
    case "E":
       console.log(`La tarea ${tarea1.nombre} se encuentra en ejecucion`)
       break;
    case "P":
        console.log(`La tarea ${tarea1.nombre} se encuentra en proceso`)
        break;
    case "T":
        console.log(`La tarea ${tarea1.nombre} se encuentra terminada`)
        break;
    default:
        console.log("Otro estado o no tiene estado")
        break;
}

//Try-Catch
try{
    let numero1:number = 1;
    console.log(numero1.toString());
    let texto:string = "hola"
    texto
}catch(error){
    console.log("Se ha producido un error:",error);
}

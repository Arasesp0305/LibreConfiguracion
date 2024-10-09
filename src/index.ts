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

/**
 * Bucles
 */

let listaTareas: Tarea[] = [
    {
        nombre: "Tarea 1",
        prioridad: 2,
        estado: EstadoTarea.Enproceso
    },
    {
        nombre: "Tarea 2",
        prioridad: 2,
        estado: EstadoTarea.Pendiente
    },
    {
        nombre: "Tarea 3",
        prioridad: 2,
        estado: EstadoTarea.Terminado
    }
]

//For-each
listaTareas.forEach(
    (tarea: Tarea, index: Number) => {
        console.log(`${tarea} - ${index}`)
    }
)

//For
for (let index = 0; index < listaTareas.length; index++) {
    const tarea = listaTareas[index];
    console.log(`${tarea.nombre} - ${index}`)
}

//While
while(tarea1.estado != EstadoTarea.Terminado){
    tarea1.prioridad ++;
    if(tarea1.prioridad == 5){
        tarea1.estado = EstadoTarea.Terminado;
    }
}

tarea1.prioridad = 1;

//Do-While
do {
    tarea1.prioridad ++;
    if(tarea1.prioridad == 5){
        tarea1.estado = EstadoTarea.Terminado;
    }
} while(tarea1.estado != EstadoTarea.Terminado);

/**
 * -------------------------------------------------------------
 * FUNCIONES
 * -------------------------------------------------------------
 */

//Funciones sin parametros
function saludar() {

    let nombre:String = "Alejandro";

    console.log(`Hola ${nombre}`);
}

saludar();

//Funciones con parametros
function saludarPersona(nombre:String){ //Para poner varios parametros los separamos por comas
    console.log(`Hola ${nombre}`)
}

saludarPersona("Alejandro");

//Funciones con parametros por defecto
function despedirPersona(nombre:String = "Pepe"){ 
    console.log(`Adios ${nombre}`);
}

despedirPersona();

//Funcion con parametros opcionales
function despedidaOpcional(nombre?:String){
    if(nombre){
        console.log(`Adios ${nombre}`);
    } else {
        console.log(`Adios`);
    }
}

//Funciones con varios tipos
function ejemploVariosTipos(a: String | number){
    if(typeof(a) == "string"){
        console.log(`Tu parametro es de tipo string`);
    } else {
        console.log(`Tu parametro es de tipo number`);
    }
}

//Funciones que devuelven valores
function ejemploReturn():String{
    let nombre:String = "Alejandro";

    return nombre;
}

let nombre1:String = ejemploReturn();
console.log(nombre1);

//Funciones con multiples parametros
function ejemploMultiplesParams(...nombres:String[]){
    nombres.forEach((nombre:String) => {
        console.log(nombre);
    });
}

ejemploMultiplesParams("Alejandro", "juan", "Jose");

//Funciones Flecha

let empleado:Empleado = {
    nombre:"Alejandro",
    edad: 20,
    sueldo: 15000
}

const mostrarEmpleado = (empleado:Empleado) => `${empleado.nombre} tiene ${empleado.edad} anios`

mostrarEmpleado(empleado);

//Llamada a una API
/**
 * 

type University = {
    domains:string[],
    alpha_two_code:string,
    web_pages:string[],
    name:string,
}

async function getDataUniversity():Promise<University []>{

    const data = await fetch("http://universities.hipolabs.com/search?country=Spain");
    let respuesta:Promise<University[]> = await data.json() as Promise<University[]>;
    return respuesta;

}

getDataUniversity().then((data:University[]) => {
    let contador:number = 0
    data.forEach(
        (universidad) => {
            contador++;
            console.log("\n\n")
            console.log(`Universidad número ${contador}`)
            console.log(`Nombre: ${universidad.name}`)
            console.log(`Dominios: ${universidad.domains}`)
            console.log(`Paginas web: ${universidad.web_pages}`)
        }
    )
});

 */

type WebPage = {
    Name:string,
    Domain:string,
    Descryption:string
}

async function* obtenerDatosWeb(): AsyncGenerator<WebPage>{
    let petition = await fetch("https://haveibeenpwned.com/api/v2/breaches");
    let datos = await petition.json() as WebPage[];

    for (let i = 0; i < datos.length; i++){
        yield datos[i];
    }
}

//Ejercicio 2
function ejercicio2(type:String = "session", key:string, data:Tarea[]){
    console.log("Se ha entrado en el metodo")
    if(type == "session"){
        sessionStorage.setItem(key, data.toString());
        console.log("Datos guardados en SessionStorage");
    } else if (type == "local"){
        localStorage.setItem(key, data.toString());
        console.log("Datos guardados en LocalStorage");
    }
}

//Ejercicio 3
let ejemplo1:Tarea = {
    nombre: "Tarea1",
    prioridad: 1,
    estado: EstadoTarea.Enproceso 
}

let ejemplo2:Tarea = {
    nombre: "Tarea2",
    prioridad: 2,
    estado: EstadoTarea.Pendiente
}

let ejemplo3:Tarea = {
    nombre: "Tarea3",
    prioridad: 3,
    estado: EstadoTarea.Terminado
}

let arrayTarea:Tarea[] = [ejemplo1, ejemplo2, ejemplo3];

ejercicio2("session", "datos", arrayTarea);
ejercicio2("local", "datos", arrayTarea);

//Ejercicio 4
function ejercicio4(type:string = "session", key:string):string|null{
    let temporal:string|null;

    if(type == "session"){
        temporal = sessionStorage.getItem(key);
    }else if(type == "local"){
        temporal = localStorage.getItem(key);
    }else{
        temporal = null;
    }

    return temporal;
}

//Ejercicio 5
function ejercicio5(type:string = "session"){

    if(type == "session"){
        sessionStorage.array.forEach((elemento:string) => {
            console.log(elemento);
        });
    }else if(type == "local"){
        localStorage.array.forEach((elemento:string) => {
            console.log(elemento);
        });
    }else{
        console.log("Tipo incorrecto, introduzca \"session\" o \"local\"")
    }
}

ejercicio5("session");
ejercicio5("local");

//Ejercicio 6
function ejercicio6(type:string = "session", key:string){

    if(type == "session"){
        sessionStorage.removeItem(key);
    }else if(type == "local"){
        localStorage.removeItem(key);
    }else{
        console.log("Tipo incorrecto, introduzca \"session\" o \"local\"")
    }
}

ejercicio6("session", "datos");
ejercicio6("local", "datos");

//Ejercicio 7

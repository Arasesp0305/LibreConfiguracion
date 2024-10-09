/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var nombre = "Alejandro"; // Variable Global
let apellido = "Rasero"; // Variable Local
const PI = 3.141592;
//Podemos declarar varias variables en una misma linea e inicializarlas en la misma
let a = "a", b = "b", c = "c";
/**
 * -------------------------------------------------------------
 * ARRAYS DE DATOS
 * -------------------------------------------------------------
 */
let alumnos1A = ["Juan", "Jose", "Alex"]; // Array que solo almacena un tipo de dato
let alumnos2A = ["Fran"];
let alumnos = [...alumnos1A, ...alumnos2A, "Pablo"]; // Los tres puntos devuelven todos los valores dentro de un Array
let valores = ["Hola", 2, true]; //Array que almacena varios tipos de datos
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
let configuracion = Object.assign({ versionTS: "Es6", versionCodigo: "1.0" }, misDatos //Con los 3 puntos podemos concatenar los atributos de otro objeto
);
let propiedad1 = configuracion.versionTS;
let propiedad2 = configuracion.versionCodigo;
console.log(`${propiedad1} ${propiedad2}`);
//Enumeraciones en TypeScript
var EstadoTarea;
(function (EstadoTarea) {
    EstadoTarea["Pendiente"] = "P";
    EstadoTarea["Enproceso"] = "E";
    EstadoTarea["Terminado"] = "T";
})(EstadoTarea || (EstadoTarea = {}));
;
let estadoPendiente = EstadoTarea.Enproceso;
//Declaramos una instancia del objeto
let tarea1 = { nombre: "Tarea1", prioridad: 2, estado: EstadoTarea.Enproceso };
//Comparacion simple para comprobar el funcionamiento de los objetos
if (tarea1.estado == "E") {
    console.log("Estado en proceso");
}
else if (tarea1.estado == "P") {
    console.log("Estado pendiente");
}
else if (tarea1.estado == "T") {
    console.log("Estado terminado");
}
let empleado1 = { nombre: "Alejandro", edad: 20, sueldo: 2500 };
console.log(empleado1.edad);
//Se pueden declarar varios Type como tipo de dato para combinar dos constructores
let empleado2 = {
    nombre: "Juan",
    edad: 25,
    sueldo: 3500,
    id: 1234,
};
/**
 * -------------------------------------------------------------
 * BUCLES Y ESTRUCTURAS DE CONTROL
 * -------------------------------------------------------------
 */
//Operador ternario 
//condicion ? verdadero : falso
console.log(tarea1.estado == "E" ? `La tarea ${tarea1.nombre} se encuentra en ejecucion` : `La tarea ${tarea1.nombre} aún no se encuentra en ejecucion`);
//IF-ELSE
if (tarea1.estado == "P") {
}
else if (tarea1.estado == "E") {
}
else {
}
//SWITCH
switch (tarea1.estado) {
    case "E":
        console.log(`La tarea ${tarea1.nombre} se encuentra en ejecucion`);
        break;
    case "P":
        console.log(`La tarea ${tarea1.nombre} se encuentra en proceso`);
        break;
    case "T":
        console.log(`La tarea ${tarea1.nombre} se encuentra terminada`);
        break;
    default:
        console.log("Otro estado o no tiene estado");
        break;
}
//Try-Catch
try {
    let numero1 = 1;
    console.log(numero1.toString());
    let texto = "hola";
    texto;
}
catch (error) {
    console.log("Se ha producido un error:", error);
}
/**
 * Bucles
 */
let listaTareas = [
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
];
//For-each
listaTareas.forEach((tarea, index) => {
    console.log(`${tarea} - ${index}`);
});
//For
for (let index = 0; index < listaTareas.length; index++) {
    const tarea = listaTareas[index];
    console.log(`${tarea.nombre} - ${index}`);
}
//While
while (tarea1.estado != EstadoTarea.Terminado) {
    tarea1.prioridad++;
    if (tarea1.prioridad == 5) {
        tarea1.estado = EstadoTarea.Terminado;
    }
}
tarea1.prioridad = 1;
//Do-While
do {
    tarea1.prioridad++;
    if (tarea1.prioridad == 5) {
        tarea1.estado = EstadoTarea.Terminado;
    }
} while (tarea1.estado != EstadoTarea.Terminado);
/**
 * -------------------------------------------------------------
 * FUNCIONES
 * -------------------------------------------------------------
 */
//Funciones sin parametros
function saludar() {
    let nombre = "Alejandro";
    console.log(`Hola ${nombre}`);
}
saludar();
//Funciones con parametros
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}`);
}
saludarPersona("Alejandro");
//Funciones con parametros por defecto
function despedirPersona(nombre = "Pepe") {
    console.log(`Adios ${nombre}`);
}
despedirPersona();
//Funcion con parametros opcionales
function despedidaOpcional(nombre) {
    if (nombre) {
        console.log(`Adios ${nombre}`);
    }
    else {
        console.log(`Adios`);
    }
}
//Funciones con varios tipos
function ejemploVariosTipos(a) {
    if (typeof (a) == "string") {
        console.log(`Tu parametro es de tipo string`);
    }
    else {
        console.log(`Tu parametro es de tipo number`);
    }
}
//Funciones que devuelven valores
function ejemploReturn() {
    let nombre = "Alejandro";
    return nombre;
}
let nombre1 = ejemploReturn();
console.log(nombre1);
//Funciones con multiples parametros
function ejemploMultiplesParams(...nombres) {
    nombres.forEach((nombre) => {
        console.log(nombre);
    });
}
ejemploMultiplesParams("Alejandro", "juan", "Jose");
//Funciones Flecha
let empleado = {
    nombre: "Alejandro",
    edad: 20,
    sueldo: 15000
};
const mostrarEmpleado = (empleado) => `${empleado.nombre} tiene ${empleado.edad} anios`;
mostrarEmpleado(empleado);
function getDataUniversity() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch("http://universities.hipolabs.com/search?country=Spain");
        let respuesta = yield data.json();
        return respuesta;
    });
}
getDataUniversity().then((data) => {
    let contador = 0;
    data.forEach((universidad) => {
        contador++;
        console.log("\n\n");
        console.log(`Universidad número ${contador}`);
        console.log(`Nombre: ${universidad.name}`);
        console.log(`Dominios: ${universidad.domains}`);
        console.log(`Paginas web: ${universidad.web_pages}`);
    });
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map
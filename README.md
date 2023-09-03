# Practica-Intro-JS
Práctica del módulo Introducción a JavaScript del Bootcamp Web15 | Keepcoding

*(La página [index.html](/index.html) ha sido usada para comprobar los resultados de los ejercicios por consola, actualmente configurada con el ejercicio 4)*

## Ejercicio 1
Crea un archivo [`ejercicio1.js`](/ejercicio1.js) que tenga un objeto con los siguientes campos: Nombre,
apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda
activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el
nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array).

## Ejercicio 2 Arreglar bug
Nuestro cliente está intenando calcular el promedio de una lista de números pero nos dice
que no funciona. No nos da el error, solo este código que es el que tiene en producción.
Para este ejercicio tenemos que crear un archivo llamado [`bug.js`](bug.js) con la solución.
```js
const calcularPromedio = (numeros) => {
let sumaTotal = 0;
for (let i = 0; i <= numeros.length; i++) {
sumaTotal += numeros[i];
}
const promedio = sumaTotal / numeros.length;
return promedio;
};
const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
```

## Ejercicio 3 Transformaciones
Nuestro cliente tiene un array de datos y nos a pedido que saquemos la siguiente
información. El listado de los desarrolladores que tengan como habilidad “JavaScript” y el
listado de los proyectos en el que sus desarrolladores trabajan.
Estos son los datos:
```js
const datos = [
{
id: 1,
nombre: 'Juan',
habilidades: ['JavaScript', 'HTML', 'CSS'],
proyectos: [
{ id: 1, nombre: 'Proyecto 1' },
{ id: 2, nombre: 'Proyecto 2' }
]
},
{
id: 2,
nombre: 'María',
habilidades: ['Python', 'SQL', 'Django'],
proyectos: [
{ id: 3, nombre: 'Proyecto 3' },
{ id: 4, nombre: 'Proyecto 4' }
]
},
{
id: 3,
nombre: 'Pedro',
habilidades: ['Java', 'Spring', 'Hibernate'],
proyectos: [
{ id: 5, nombre: 'Proyecto 5' },
{ id: 6, nombre: 'Proyecto 6' }
]
}
];
```
Y el resultado final es:
```js
const desarrolladoresJavascript = [
{
"id": 1,
"nombre": "Juan",
"habilidades": ["JavaScript", "HTML", "CSS"],
"proyectos": [
{ "id": 1, "nombre": "Proyecto 1"},
{ "id": 2, "nombre": "Proyecto 2" }
]
}
]
const nombresProyectos = ['Proyecto 1', 'Proyecto 2', 'Proyecto 3',
'Proyecto 4', 'Proyecto 5', 'Proyecto 6']
```
Hay que crear un archivo [`transform.js`](/transform.js) con la solución.

## Ejercicio 4 Arreglar bug de asincronía
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da *undefined*. Nos a
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado [`bugAsync.js`](/bugAsync.js) con la solución.
```js
// Este programa simula una llamada asincrónica para obtener un usuario
function obtenerUsuario(id) {
let usuario;
setTimeout(() => {
if (id === 1) {
usuario = { id: 1, nombre: 'John Doe' };
}
}, 2000);
return usuario;
}
const usuario = obtenerUsuario(1);
console.log(usuario);
```

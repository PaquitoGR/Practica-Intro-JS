/*
Ejercicio 1
Crea un archivo ejercicio1.js que tenga un objeto con los siguientes campos: Nombre,
apellidos, un array con los temas del bootcamp que ya conoces, si estás en busqueda
activa con un boolean y un array de objetos el cual tenga un link a alguna red social con el
nombre y link de la red social. (Con uno vale, Github por ejemplo, pero dentro de un array)
*/

let student = {
    firstName: "Francisco",
    lastName: "Suárez",
    skills: ["Git", "Html/CSS", "JavaScript", "Python"],
    lookingForAJob: true,
    social: [
        {
            network: "GitHub",
            link: "https://github.com/PaquitoGR",
            
        },
        {
            network: "Twitter",
            link: "https://twitter.com/Fasuco",
        }
    ]
}


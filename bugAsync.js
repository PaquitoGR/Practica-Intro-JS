/*
Ejercicio 4 Arreglar bug de asincronia
Tenemos otro error que nuestro cliente nos pide arreglar. El cliente está pidiendo un usuario
y nos dice que está usando el id correcto el 1. Pero que siempre le da undefined. Nos a
pasado el código que tenemos que revisar y arreglar. Para este problema crear un archivo
llamado bugAsync.js con la solución.
*/

// Este programa simula una llamada asincrónica para obtener un usuario

// Con promise:

// const obtenerUsuario = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === 1) {
//         let user = { id: 1, nombre: "John Doe" };
//         resolve(user);
//       } else {
//         reject("User not found");
//       }
//     }, 2000);
//   });
// };

// async function fetchingData() {
//   const usuario = await obtenerUsuario(1)
//     .then((user) => {
//       return user;
//     })
//     .catch((error) => {
//       console.log(error);
//     })
//     .finally(() => {
//       console.log("End of process");
//     });
//   console.log(usuario);
// }

// fetchingData();

// console.log(usuario);

// con async/await

const obtenerUsuario = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        let user = { id: 1, nombre: "John Doe" };
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 2000);
  });
};

async function solicitaUsuario() {
  try {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
  } catch (err) {
    console.log(err);
  }
}

solicitaUsuario();

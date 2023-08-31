const listaCliente = () =>
  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());

export const clientServices = {
  listaCliente,
};

//abrir http (metodo, url)

// CRUD - Metodos HTTP
// Create   -   POST
// Read     -   GET
// Update   -   PUT/PATCH
// Delete   -   DELETE
//forma base de hacer una peticion a un .json
// const listaCliente = () => {
//     const promise = new Promise((resolve, reject) => {
//         const http = new XMLHttpRequest();
//         http.open("GET", "http://localhost:3000/perfil");

//         http.send();

//         http.onload = () => {
//             const response = JSON.parse(http.response);
//             if (http.status >= 400){
//                 reject(response);
//             }else{
//                 resolve(response);
//             }
//         };
//     });
//     return promise;
// }

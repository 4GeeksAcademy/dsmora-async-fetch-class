import React from "react";

//create your first component
const RestApi = () => {

    const fetchData = async (endpoint) => {
        const response = await fetch(endpoint)
            .then(response => {
                return response.json();
            })
            .catch(error => {
                console.log('Oh No! There was a problem: \n', error);
            });
        console.log(response);
    }

    fetchData('https://pokeapi.co/api/v2/pokemon/');

    return (
        <div className="text-center">
            <h1>
                Rest API Asíncrono
            </h1>
        </div>
    );
};

export default RestApi;


// fetch('https://example.com/users.json', {
//     method: 'POST',
//     mode: 'cors',
//     redirect: 'follow',
//     headers: new Headers({
//         'Content-Type': 'text/plain'
//     })
// })
//     .then(res => res.json())
//     .then(response => { /* manejar la respuesta  })
//   .catch (error => console.error(error))

//   fetch('https://example.com/users', {
//   method: 'PUT', // or 'POST'
//   body: JSON.stringify(data), // la variable data puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(res => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.json();
//   })
//   .then(response => console.log('Success:', response))
//   .catch(error => console.error(error));


// GET 

// const getData = async () => {
//     const response = await fetch('https://example.com/users');
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.log('error: ', response.status, response.statusText);
//         // Realiaza el tratamiento del error que devolvió el request HTTP 
//         return { error: { status: response.status, statusText: response.statusText } };
//     };
// };

// POST 

// const createData = async () => {
//     const response = await fetch('https://example.com/users', {
//         method: 'POST',
//         body: JSON.stringify(dataToSend),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.log('error: ', response.status, response.statusText);
//         // Realiaza el tratamiento del error que devolvió el request HTTP
//         return { error: { status: response.status, statusText: response.statusText } };
//     };

// PUT 

// const updateData = async () => {
//     const response = await fetch('https://example.com/users', {
//         method: 'PUT',
//         body: JSON.stringify(dataToSend),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
//         headers: {
//            'Content-Type': 'application/json'
//         }
//     });
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.log('error: ', response.status, response.statusText);
//         /* Realiaza el tratamiento del error que devolvió el request HTTP */
//         return {error: {status: response.status, statusText: response.statusText}};
//     };
// };

// DELETE 

// const deleteData = async () => {
//     const response = await fetch('https://example.com/users', {
//         method: 'DELETE',
//     });
//     if (response.ok) {
//         const data = await response.json();
//         return data;
//     } else {
//         console.log('error: ', response.status, response.statusText);
//         /* Realiaza el tratamiento del error que devolvió el request HTTP */
//         return {error: {status: response.status, statusText: response.statusText}};
//     };
// };

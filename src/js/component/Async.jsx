import React from "react";

//create your first component
const Async = () => {

    const cargarImagen = () => {
        console.log("¡Cárgala!");

        console.log('Aqui empieza la funcion asincrona')
        fetch('url_vacia').then((response) => {
            if (response.ok) {
                console.log('Aqui termina la funcion asincrona')
                console.log("¡Imagen cargada!");
            } else {
                console.log("Uh-oh algo salió mal");
            }
        }); // tarda 38ms en ejecutarse
    }

    const usuarioEsperando = () => {
        console.log("No me gusta esperar");
    }


    cargarImagen();
    usuarioEsperando();
    console.log('Otra funcion');
    return (
        <div className="text-center">
            <h1>
                Stack Asíncrono
            </h1>
        </div>
    );
};

export default Async;
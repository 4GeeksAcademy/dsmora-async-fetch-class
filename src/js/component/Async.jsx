import React from "react";

//create your first component
const Async = () => {
    cargarImagen = () => {
        console.log("¡Cárgala!");
        fetch('url_vacia').then((response) => {
            if (response.ok) {
                console.log("¡Imagen cargada!");
            } else {
                console.log("Uh-oh algo salió mal");
            }
        });
    }
    usuarioEsperando = () => {
        console.log("No me gusta esperar");
    }
    cargarImagen();
    usuarioEsperando();
    return (
        <div className="text-center">
            <h1>
                Stack Asíncrono
            </h1>
        </div>
    );
};

export default Async;
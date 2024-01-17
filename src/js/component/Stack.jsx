import React from "react";

const Stack = () => {
    // Stack basico
    function correPrimero(){
        console.log("primero");
    }
    function correSegundo(){
        console.log("segundo");
    }
    correSegundo();
    correPrimero();

    // Stack complejo
    // function correPrimero(){
    //     console.log("Quiero correr primero");
    //     correSegundo();
    //     console.log("Yo también quiero correr cuando correPrimero corra");
    // }
    // function correSegundo(){
    //     console.log("¿Dónde estoy corriendo?");
    // }
    // correPrimero();

    // Stack con callbacks
    // function correPrimero(unaFuncion){
    //     console.log("Quiero correr primero");
    //     unaFuncion();
    //     correSegundo();
    //     console.log("También quiero correr cuando se ejecute correPrimero");
    // }
    // function correSegundo(){
    //     console.log("¿Dónde estoy corriendo?");
    // }
    // correPrimero(unaTercera);

    // function unaTercera(){
    //     console.log("Esto es una locura");
    // }

	return (
		<div className="text-center">
            <h1>
			    Stack Sincrono por defecto
            </h1>
		</div>
	);
};

export default Stack;

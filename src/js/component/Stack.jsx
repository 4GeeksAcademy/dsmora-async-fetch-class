import React from "react";

const Stack = () => {

    // Stack con callbacks
    function correPrimero(unaFuncion) {
        console.log("primera funcion"); // 1
        unaFuncion();   // Funcion que recibe como parametro ,  console.log("Esto es una locura"); // 2
        correSegundo(); //  console.log("¿Dónde estoy corriendo?"); 3
        console.log("primera funcion"); // 4
    }

    function correSegundo() {
        console.log("segunda funcion");
    }

    function unaTercera() {
        console.log("tercera funcion");
    }

    console.log('1');
    correPrimero(correSegundo);
    console.log('2');
    correPrimero(unaTercera);



    return (
        <div className="text-center">
            <h1>
                Stack Sincrono por defecto
            </h1>
        </div>
    );
};

export default Stack;



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
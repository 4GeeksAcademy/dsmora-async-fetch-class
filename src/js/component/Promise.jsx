import React from "react";


//create your first component
const PromiseJS = () => {

    const returnedPromiseHere = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Yo soy las imágenes que vienen de la base de datos");
            }, 3000);
        });
    }

    const useAsyncFunction = async () => {
        console.log("Soy una tarea rápida");
        let result = await returnedPromiseHere();
        console.log(result);
        console.log("Tuve que esperar a que el await terminara");
    }
    useAsyncFunction();


    return (
        <div className="text-center">
            <h1>
                Promises
            </h1>
        </div>
    );
};

export default PromiseJS;

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("La promesa se ha resuelto");
//     }, 300);
// });


// myPromise.then((obj) => {
//     console.log(obj);
// });

// console.log(myPromise);
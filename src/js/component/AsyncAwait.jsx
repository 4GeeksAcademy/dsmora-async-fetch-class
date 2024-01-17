import React from "react";

//create your first component
const AsyncAwait = () => {
    // const returnedPromiseHere = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve("Yo soy las imágenes que vienen de la base de datos");
    //         }, 1000);
    //     });
    // }

    // const useAsyncFunction = async () => {
    //     console.log("Soy una tarea rápida");
    //     let result = await returnedPromiseHere();
    //     console.log(result);
    //     console.log("Tuve que esperar a que el await terminara");
    // }
    // useAsyncFunction();



    return (
        <div className="text-center">
            <h1>
                Async Await
            </h1>
        </div>
    );
};

export default AsyncAwait;

/*
function promise1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 1");
        }, 100);
    });
}
function promise2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 2");
        }, 200);
    });
}
function promise3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Estoy resuelta como 3");
        }, 300);
    });
}
async function handlingAllPromises() {
    let first = await promise1();
    let second = await promise2();
    let third = await promise3();

    console.log(first);
    console.log(second);
    console.log(third);
}
handlingAllPromises();

let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

const handlingAllPromises = async () => {
    let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

    console.log(first);
    console.log(second);
    console.log(third);
}

   const fetchData = async (endpoint) => {
        const response = await fetch(endpoint);
        const data = await response.json();
        console.log(data);
    }

    fetchData('https://pokeapi.co/api/v2/pokemon/');
*/
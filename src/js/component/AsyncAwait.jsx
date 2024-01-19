import React, { useEffect, useState } from "react";
//create your first component
const AsyncAwait = () => {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (endpoint) => {
        await fetch(endpoint)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                // Lee la respuesta como JSON
                return response.json();
            })
            .then(responseAsJson => {
                // Haz lo que quieras con la respuesta JSONificada
                setPokemon(responseAsJson.results);
                setLoading(false);
            })
            .catch(error => {
                console.log('Looks like there was a problem: \n', error);
            });
    }

    useEffect(() => {
        fetchData('https://pokeapi.co/api/v2/pokemon/');
    }, []);


    console.log(pokemon);
    console.log(loading);

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="text-center">
            <h1>
                Async Await
            </h1>
            <ul>
                {pokemon.map((item, index) => {
                    return <li key={index}>{item.name}</li>
                })
                }
            </ul>

        </div>
    );
};

export default AsyncAwait;


// function promise1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Estoy resuelta como 1");
//         }, 1000);
//     });
// }

// function promise2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Estoy resuelta como 2");
//         }, 2000);
//     });
// }

// function promise3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Estoy resuelta como 3");
//         }, 3000);
//     });
// }

// function handlingAllPromises() {
//     let first = promise1().then((result) => result);
//     let second = promise2().then((result) => result);
//     let third = promise3().then((result) => result);

//     console.log(first);
//     console.log(second);
//     console.log(third);
// }

// handlingAllPromises();


// let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

// const handlingAllPromises = async () => {
//     let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);

//     console.log(first);
//     console.log(second);
//     console.log(third);
// }

// // // const fetchData = async (endpoint) => {
// // //     const response = await fetch(endpoint);
// // //     const data = await response.json();
// // //     console.log(data);
// // // }

// // // fetchData('https://pokeapi.co/api/v2/pokemon/');

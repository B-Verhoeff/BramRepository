console.log("main.js is running...");
let pok = document.querySelector(".pok");
let pro = document.querySelector(".pro");

fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
    .then((response) => response.json())
    .then((data) => {
        console.log("ontvangen data:/n", data);

        const pokemons = data.results;
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pok.innerHTML += `<li style= "color:purple"> pokemon ${pokemon.name} </li>`

        }
    })

// maak fetch met de url:
// https://dummyjson.com/products

fetch("https://dummyjson.com/products/?limit=10")
    .then((response) => response.json())
    .then((data) => {
        console.log("ontvangen data:/n", data);

        const produks = data.products;
        for (let i = 0; i < produks.length; i++) {
            const products = produks[i];
            pro.innerHTML += `<li style= "color:green"> Products ${products.title} <br>  Description :  ${products.description} </li>`

        }
    })
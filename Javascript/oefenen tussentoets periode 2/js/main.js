// Opdracht 1

let bitcoinWaarden = [40604, 40648, 38275, 30386, 39445, 39121, 38494];

let totaal = 0;
for (let i = 0; i < bitcoinWaarden.length; i++) {
  totaal += bitcoinWaarden[i];
}
let gemiddelde = totaal / bitcoinWaarden.length;
document.querySelector("#gemiddeldeBitcoin").textContent = gemiddelde;

let hoogste = bitcoinWaarden[0];
for (let i = 1; i < bitcoinWaarden.length; i++) {
  if (bitcoinWaarden[i] > hoogste) {
    hoogste = bitcoinWaarden[i];
  }
}
document.querySelector("#hoogsteBitcoin").textContent = hoogste;

let laagste = bitcoinWaarden[0];
for (let i = 1; i < bitcoinWaarden.length; i++) {
  if (bitcoinWaarden[i] < laagste) {
    laagste = bitcoinWaarden[i];
  }
}
document.querySelector("#laagsteBitcoin").textContent = laagste;

// Opdracht 2

let beroepen = [
  { beroep: "Apotheker", salaris: 3450 },
  { beroep: "Automonteur", salaris: 2000 },
  { beroep: "Bouwvakker", salaris: 1650 },
  { beroep: "Elektricien", salaris: 2200 },
  { beroep: "Kinderopvang", salaris: 1890 },
  { beroep: "Metselaar", salaris: 2400 },
  { beroep: "Timmerman", salaris: 2300 },
];

let totaalSalaris = 0;
for (let i = 0; i < beroepen.length; i++) {
  totaalSalaris += beroepen[i].salaris;
}
document.querySelector("#totaalSalaris").textContent = totaalSalaris;

let gemiddeldSalaris = totaalSalaris / beroepen.length;
document.querySelector("#gemiddeldSalaris").textContent = gemiddeldSalaris;

let bestBetaaldBeroep = beroepen[0];
for (let i = 1; i < beroepen.length; i++) {
  if (beroepen[i].salaris > bestBetaaldBeroep.salaris) {
    bestBetaaldBeroep = beroepen[i];
  }
}
document.querySelector("#bestBetaaldBeroep").textContent = bestBetaaldBeroep.beroep;

let minstBetaaldBeroep = beroepen[0];
for (let i = 1; i < beroepen.length; i++) {
  if (beroepen[i].salaris < minstBetaaldBeroep.salaris) {
    minstBetaaldBeroep = beroepen[i];
  }
}
document.querySelector("#minstBetaaldBeroep").textContent = minstBetaaldBeroep.beroep;

// Opdracht 3

let usernameInput = document.querySelector("#username");
let emailInput = document.querySelector("#email");
let sendButton = document.querySelector("#sendButton");

sendButton.addEventListener("click", function() {
  if (usernameInput.value.length < 3) {
    usernameInput.classList.add("red-border");
  } else {
    usernameInput.classList.add("green-border");
  }

  if (emailInput.value === "") {
    emailInput.classList.add("red-border");
  } else {
    emailInput.classList.add("green-border");
  }
});

// Opdracht 4

fetch("https://fakestoreapi.com/products/")
  .then(response => response.json())
  .then(data => {
    let productCards = document.querySelector("#productCards");

    data.forEach(product => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="100">
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <p>€${product.price}</p>
      `;

      productCards.appendChild(card);
    });
  });

//opdr 1
let personen = [
    {
        voornaam: "Bas",
        achternaam: "Veldhuizen",
        hobby: "Voetbal"
    },
    {
        voornaam: "Teun",
        achternaam: "Bevens",
        hobby: "Piano"
    }
];

for (let i = 0; i < personen.length; i++) {
    let persoon = personen[i];

    let div = document.createElement("div");

    div.innerHTML = "Voornaam: " + persoon.voornaam + "<br>" +
        "Achternaam: " + persoon.achternaam + "<br>" +
        "Hobby: " + persoon.hobby;

    document.querySelector("#personenContainer").appendChild(div);
}

//opdr 2
const auto1 = {
    brand: "Tesla",
    model: "X",
    constructionyear: "2015",
    price: "€101.990",
  };
  console.log(auto1);
  
  const auto2 = {
    brand: "Porsche",
    model: "Taycan Turbo S",
    constructionyear: "2019",
    price: "€204.253",
  };
  console.log(auto2);
  
  let autoContainer = document.getElementById("autoContainer");
  let totaalContainer = document.getElementById("totaalContainer");
  let totaalPrijs = 0;
  
  let autos = [auto1, auto2];
  
  for (let i = 0; i < autos.length; i++) {
    let auto = autos[i];
  
    let div = document.createElement("div");
  
    div.innerHTML = "Merk: " + auto.brand + "<br>" +
                    "Model: " + auto.model + "<br>" +
                    "Bouwjaar: " + auto.constructionyear + "<br>" +
                    "Prijs: " + auto.price;
  
    autoContainer.appendChild(div);
  
    let prijsZonderSymbolen = Number(auto.price.replace(/[^0-9.-]+/g,""));
    totaalPrijs += prijsZonderSymbolen;
  }
  
  totaalContainer.innerHTML = "Totaal bedrag van de twee auto's: €" + totaalPrijs.toFixed(2);

console.log("Het werkt");

//opdr 1
let oldSalaris = 2000;
let multiPlyer = 2000 * 0.05;
let newSalaris = oldSalaris + multiPlyer;
console.log(newSalaris);

//opdr 2
let text = document.querySelector(".newPrice")
let prijs = 400000;
let percentage = 400000 * 0.025;
let newPrice = prijs + percentage;
text.innerHTML = "Opdracht" + " 2" + " = " + newPrice
console.log(newPrice)

//opdr 3
let text2 = document.querySelector(".newPrice2")
let jas = 100;
let btw = 1.21;
let inclusiveBTW = jas * btw;
text2.innerHTML = "Opdracht" + " 3" + " = " + inclusiveBTW
console.log(inclusiveBTW)
//opdr 4
let button4 = document.querySelector(".button4")
button4.addEventListener("click", function () {
    result = prompt("Vul een persoon in: • Docent • Student • Directeur ")
    if (result == "Docent") {
        alert("Jij bent een docent")
    }
    if (result == "Student") {
        alert("Jij bent een Student")
    }
    if (result == "Directeur") {
        alert("Jij bent een directeur")
    }
    else {
        alert("Jij bent gek!")
    }
})
//opdr 5
let euros = prompt("Vul een bedrag in in euros");
// omzetten van String naar getal
euros = Number(euros);

let crypto = prompt("Kies een Crypto (BTC, ETH, etc...")

if(crypto === "BTC") {
    // Dan doen we hier bitcoin berekening
    let result = (1/35050)*euros;
    console.log("Bitcoins: ", result);
} else if(crypto === "ETH") {
    // Dan doen we hier Etherium 
    result = (1/1887)*euros;
    console.log("Etherium: ", result);
} else if(crypto === "XRP") {
    // Dan doen we hier XRP berekening
    result = (1/0.7)*euros;
    console.log("XRP: ", result);
} else if(crypto === "DOG") {
    // Dan doen we hier Dodgecoin berekening
    result = (1/0.07)*euros;
    console.log("Dodgecoin: ", result);
} else if(crypto === "SOL") {
    // Dan doen we hier Solerium berekening
    result = (1/40.26)*euros;
    console.log("Solerium: ", result);
}
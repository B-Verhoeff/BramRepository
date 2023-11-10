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

//opdr 6
for (let i = 0; i <= 9; i++) {
    console.log(i);
}
console.log("Einde programma");
 
//opdr 7
let count = 0;
 
while (count < 20) {
    if (count < 10) {
        console.log("Dit is zin nummer 1");
    } else {
        console.log("Dit is zin nummer 2");
    }
    count++;
}
console.log("Einde programma");

//opdr 8
count = 0;
 
while (count < 20) {
    console.log("Loop");
    count++;
 
    if (count === 10) {
        break;
    }
}
//opdr 9
let kleuren = ["rood", "groen", "geel", "blauw", "roze"];
 
for (let kleur of kleuren) {
    document.write(`<p>${kleur}</p>`);
}
 
//opdr 10
let muziekArtiesten = ["Artiest 1", "Artiest 2", "Artiest 3", "Artiest 4", "Artiest 5"];
 
function voegArtiestToe() {
    let randomIndex = Math.floor(Math.random() * muziekArtiesten.length);
    let div = document.createElement("div");
    div.textContent = muziekArtiesten[randomIndex];
    document.body.appendChild(div);
}
 
//opdr 11
let tekstArray = [];
 
function voegToe() {
    let inputTekst = document.getElementById("tekstInput").value;
    tekstArray.push(inputTekst);
    updateUl();
}
 
function wisAlles() {
    tekstArray = [];
    updateUl();
}
 
function updateUl() {
    let ul = document.getElementById("tekstUl");
    ul.innerHTML = "";
    tekstArray.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}
 
//opdr 12
function showMessage(bericht) {
    console.log(bericht);
}
 
showMessage("Dit is een voorbeeldbericht.");
 
//opdr 13
function showSum(a, b) {
    console.log(a + b);
}
 
showSum(5, 10);
 
//opdr 14
function showArray(arr) {
    for (let item of arr) {
        console.log(item);
    }
}
 
showArray(["item1", "item2", "item3"]);
 
//opdr 15
function getProduct(a, b) {
    return a * b;
}
 
console.log(getProduct(5, 10));
 
//opdr 16
function getSumOfArray(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}
 
let resultaat = getSumOfArray([1, 3, 5, 7, 11]);
console.log(resultaat);
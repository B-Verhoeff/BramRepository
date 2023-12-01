//console.log("Het werkt")
////opdr 1 en 2
//prompt
//let password = prompt("wat is het wachtwoord?")
//
//while (password != "bram") {
//    if(password == "quit"){
//        break;
//    }
//    alert("dit is fout");
//    password = prompt("wat is het wachtwoord?")
//} 
//if (word !=="quit"){
//    alert("jij hebt goed geraden")
//}
//alert("Dit is goed");

//opdr 3
let highest = 0
let lowest = 100
let tempratures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];
for (let i = 0; i < tempratures.length; i++) {
    const temp = tempratures[i];
    
    //bepaal de hoogste
    if(temp > highest) {
        highest = temp;
    }

    //bepaal de laagste
    if(temp < lowest) {
        lowest = temp
    }

    if(temp > 10) {
        console.log("Temp groter dan 10: ", temp);
    }
}
console.log("De hoogste temperatuur: ",highest);
console.log("De laasgte temperatuur: ",lowest);

//opdr 4
const b = [
    {
        temp: 3.6,
        month: "Januari",
    }
]

const s = [
    {
        temp: 3.9,
        month: "Februari",
    }
]

const t = [
    {
        temp: 6.5,
        month: "Maart",
    }
]

const ulList = document.querySelector(".list");
for (let i = 0; i < s.length; i++) {
    const temp = s[i];
    ulList.innerHTML += `<li>$(temp.month): $(temp.temp)</li>`;
}

//opdr 6
const btnCard = document.querySelector(".btn-card");
const container = document.querySelector(".container");
btnCard.addEventListener("click")



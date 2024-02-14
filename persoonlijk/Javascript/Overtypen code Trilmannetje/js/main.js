console.log("Äanslagen")

//opsr 1 en 2
let word = promp("Raad een woord");
while (word !== "VSCode") {
    if (word === "quit"){
        break;
    }

    alert("Dit is fout");
    word = prompt("Raad een woord");
}
if (word !== "quit") {
    alert("DikZak")
}

//opdr3
const temperatures = [3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2];
let highest = 0;
let lowest = 100
for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];

    if (temp > highest) {
        highest = temp;
    }
    if (temp < lowest) {
        lowest = temp;
    }

    if (temp > 10) {
        console.log("Groter dan 10: ", temp)
    }
}
console.log("Hoogste temperatuur: ", highest);
console.log("Laagste temperatuur: ", lowest);


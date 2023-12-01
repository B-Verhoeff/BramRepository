console.log("Het werkt")
//Opdr 1.
const me = {
    firstName: "bram",
    lastName: "Verhoeff",
    age: 16,
    course: "Software developer",
    score: 100
};

console.log(me)


//Opdr 2.
const facebook = {
    userName: "BasV",
    title: "BP",
    story: "I went outside today",
    date: "16th of November, 2023",
    Views: 696969696969
};

console.log(facebook)

//opdr 3
const recipt1 = {
    title: "Tomatensoep",
    description: "Een heerlijke tomatensoep",
    healthy: true,
};
const recipt2 = {
    title: "Tomatensoep",
    description: "Een heerlijke tomatensoep",
    healthy: true,
};
const recipt3 = {
    title: "Tomatensoep",
    description: "Een heerlijke tomatensoep",
    healthy: true,
};

//opdr 4
let bmw1 = {
    title: 'BMW 320 Touring Diesel Xdrive',
    description: 'Nette BMW. Motorisch uitstekend. 184 pk. Interieur lichte gebruikers sporen. Exterieur licht parkeerschade voorbumper. En een schaafplek op de achterklep. Staat op gloednieuwe Continental winterbanden. Extra set velgen ( grotere maat) krijgt u erbij. Km stand 173.000 km. 2 sleutels. Handgreep verlichting. Handelaars mogen verder kijken.', price: 8900.00, kilometer: 173000,
    buildDate: 2011
}

//Opdr 5.
const product1 = {
    title: "Fruity king",
    description: "Per can",
    discount: "Actie",
    price: 2.29
};
const product2 = {
    title: "Koekjes",
    description: "Lekker",
    discount: "Actie",
    price: 0.75
};
const product3 = {
    title: "Bananen",
    description: "Per tros",
    discount: "Actie",
    price: 3.29
};
const product4 = {
    title: "WC Papier",
    description: "Per pakket",
    discount: "Actie",
    price: 5.29
};
const product5 = {
    title: "Spaghetti",
    description: "Per verpakkinh",
    discount: "Actie",
    price: 1.29
};
 
console.log(product1)

 
//Opdr 6.
const tweakersArticle1 = {
    title: "Valve brengt SteamOS-update met kleurinstellingen voor Steam Deck uit",
    time: "09:58",
    color: "green",
    comments: 9
};
 
console.log(tweakersArticle1)
//5x
 
//Opdr 7.
 
const array1 = [
    {
        title: "Soep",
        description: "LEKKER ETEN en super gezond. En heel goedkoop",
        healty: true
    },
 
 
    {
        title: "Broodje gezond",
        description: "LEKKER ETEN, super gezond en heel goedkoop",
        healty: true
    },
 
 
    {
        title: "Pizza",
        description: "LEKKER ETEN en super gezond. En heel duur",
        healty: false
    }
];
 
for (let i = 0; i < array1.length; i++) {
    const arrayDisplay = array1[i];
   
    console.log(arrayDisplay.title);
    console.log(arrayDisplay.description);
    console.log(arrayDisplay.healty);
}
 
//Opdr 8.
const array2 = [
    {
        title: "Fruity king",
        description: "Per can",
        discount: "Actie",
        price: 2.29
    }
];
 
for (let i = 0; i < array2.length; i++) {
    const arrayDisplay = array2[i];
   
    console.log(arrayDisplay.title);
    console.log(arrayDisplay.description);
    console.log(arrayDisplay.discount);
    console.log(arrayDisplay.price);
}

//opdr 9
const container = document.querySelector(".container")

for (let index = 0; index < array1.length; index++) {
    const p = array[index];

    console.log(p);

    if (index >= 9){
        break
    }

    const htmlCode = createCard(p);
    container.innerhtml += htmlCode;
}

function createCard(product) {
    const card =
    <div class="card">;
        <h2>${product.title}</h2>
        <p>${product.ingredients}</p>
        <div>
            <span>${product.healthy}</span>
        </div>
    </div>
    ;

    return card;
}
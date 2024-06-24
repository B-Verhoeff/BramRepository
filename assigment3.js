console.log("--- Page 3 ---");


let allPersons = document.querySelector(".persons-container")
let olderPersons = document.querySelector(".adult-container")

fetch("/persons")
    .then(response => response.json())
    .then(data => createCard(data));


function createCard(message) 
    console.log(message);


    for (let i = 0; i < message.length; i++) {
        const persons = message[i];
        allPersons.innerHTML += createCard(persons)
    }


    for (let i = 0; i < message.length; i++) {
        const one = message[i];
        console.log(one);
        if (one.age >= 18) {
            olderPersons.innerHTML += createCard(one)
           }
    }


    const cardElement = 
        <div class="card">
            <div class="message-box">
                <div class="message-content">${message.fullName + " (" + message.age + ")" }</div>
            </div>
            <div class="avatar">
                <img src="../images/female-avatar.svg" alt="avatar" srcset="" width="40" height="40">
            </div>
        </div>
    ;
    return cardElement;

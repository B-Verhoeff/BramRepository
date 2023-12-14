const testBtn = document.querySelector(".run")
const changeBtn = document.querySelector(".change")
const divBox = document.querySelector(".box")

testBtn.addEventListener("click", function(){
    divBox.classList.add("error");
})

changeBtn.addEventListener("click", function(){
    divBox.classList.remove("error");
})

const toggleBtn = document.querySelector(".toggle")

toggleBtn.addEventListener("click", function(){
    divBox.classList.toggle("error")
})

const divBox2 = document.querySelector(".box2")
const animationBtn = document.querySelector(".animation")

animationBtn.addEventListener("click", function (){
    divBox2.classList.toggle("flasher")
    divBox2.classList.toggle("letterType")
})
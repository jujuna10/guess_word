import { shuffle } from "lodash"
const p = document.getElementById("p")
const input = document.getElementById("input")
const btn = document.getElementById("btn")
const start = document.getElementById("start")


p.style.display = "none"
input.style.display = "none"
btn.style.display = "none"

start.addEventListener("click",() =>{
    p.style.display = "block"
    input.style.display = "block"
    btn.style.display = "block"
    randomWord()
})

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"]
function randomWord(){
    const index = Math.floor(Math.random() * words.length)
    result = words[index]
    let shuffledWord = shuffle(result.split('')).join('')
    // const shuffle = require("lodash")
    p.textContent = shuffledWord
}
// randomWord()

btn.addEventListener("click",() => {
    if(input.value === result){
        alert("congurlations")
        input.value = ""
        randomWord()
    }else{
        alert("try again")
        input.value = ""

    }
})












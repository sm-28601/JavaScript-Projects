let one = document.querySelector("#one")
let two= document.querySelector("#two")
let third= document.querySelector("#third")
let fourth = document.querySelector("#fourth")
let fifth = document.querySelector("#fifth")

let body = document.querySelector("body");

one.addEventListener("click",()=>{
    body.style.backgroundColor = "#FFD95F";
})

two.addEventListener("click",()=>{
    body.style.backgroundColor = "#FFEFC8";
})

third.addEventListener("click",()=>{
    body.style.backgroundColor = "#B8D576";
})

fourth.addEventListener("click",()=>{
    body.style.backgroundColor = "#D70654";
})

fifth.addEventListener("click",()=>{
    body.style.backgroundColor = "#E52020";
})


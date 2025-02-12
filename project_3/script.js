let body = document.querySelector("body");

let btn = document.querySelector("#btn");

function bckcolor() {
    // hex color #______
    // 0123456789ABCDEF
    let hexcolor = '#';
    let hex = '0123456789ABCDEF';
    for(let i = 0 ; i < 6 ; i++){
        hexcolor += hex[Math.floor(Math.random()*16)];
    }
    return hexcolor;
}

btn.addEventListener("click",()=>{
    body.style.backgroundColor= bckcolor();
});




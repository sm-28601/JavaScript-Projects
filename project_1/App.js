// select element
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

//make variable to track who's turn is

let turnO = true;//playerx,playerO

// store winningPattern 

const winPtn = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let moves = 0 ;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            //playerO
            box.innerText = "O";          
        }
        else{
            //playerX
            box.innerText = "X";
        }
        turnO = !turnO ;
        box.style.pointerEvents = "none";
        moves++;
        if(checkWinner()){
            return;
        }
        if(moves === 9 ){
            alert(`Match Draw! `);
        }
    });
});

function checkWinner() {
    for(let pattern of winPtn){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 !== "" && pos1 === pos2 && pos2 === pos3){
                alert(`${pos1} wins! 🎉`);
                disableAllBoxes();
                return true;
             
        }
    }
    return false;
}  

function disableAllBoxes() {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}

// Reset button functionality
resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto"; // Enable boxes
    });
    turnO = true; // Reset turn
    moves = 0; 
});
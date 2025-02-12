
let user = document.querySelector("#user");
let comp = document.querySelector("#comp");

let msg = document.querySelector("#msg");


const compChoice = () => {
    const arr = ["rock","paper","scissor"];
    return  arr[Math.floor(Math.random()*3)];

}
let userscore = 0 ;
let compscore = 0 ;

const draw = () =>{
    msg.innerText = "It's a Draw!";

}

const playgame = (userChoice) =>{
    let computerChoice = compChoice();

    if(userChoice === computerChoice){
        //draw
        draw();
        return ;

    }
    let userwins = false;
    if(userChoice === 'rock'){
        // paper , scissor
        if(computerChoice === 'paper'){
            userwins = false;
        }
        else{
            userwins = true ;
        }
    }
    else if(userChoice === 'paper'){
        //rock , scissor
        if(computerChoice === 'rock'){
            userwins = true;
        }
        else{
            userwins = false ;
        }
    }
    else if(userChoice === 'scissor'){
        //paper , rock
        if(computerChoice=== 'rock'){
            userwins = false;
        }
        else{
            userwins = true;
        }
    }

    score(userwins) ;
}

const score = (userwins) =>{
    if(userwins){
        userscore++;
        user.innerText = userscore ;
    }
    else{
        compscore++;
        comp.innerText = compscore ;
    }
    showwinner();
}

const showwinner = () =>{
    if(userscore > compscore){
        msg.innerText = "You wins!";
    }
    else if (userscore < compscore){
        msg.innerText = "Computer wins!";
    }
    else{
        msg.innerText = "It's a Draw!";
    }
}




let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=>{
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);  
        
    })
})
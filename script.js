let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")

const genComChoice=()=>{
 let options=["rock","paper","scissors"]
 const randIdx=Math.floor(Math.random() * 3)
 return options[randIdx]
}

const drawGame=()=>{
msg.innerText="Draw!!"
msg.style.backgroundColor="#081b31"
    
}

const showWinner=(userWin,userchoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore
        msg.innerText=`You win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
    }else{
        compScore++;
         compScorePara.innerText =compScore;
         msg.innerText=`You lose! ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor="red"
        
    }
}
const playGame=(userchoice)=>{
    const compChoice=genComChoice();
     if(userchoice===compChoice){
        drawGame()
     }else{
        let userWin=true;
       if (userchoice==="rock"&&compChoice==="scissors"){
        userWin= true;
       }
       else if (userchoice==="paper"&&compChoice==="rock"){
        userWin= true;
       }
       else if (userchoice==="scissors"&&compChoice==="paper"){
        userWin= true;
       }
       else {
        userWin=false
       }
       showWinner(userWin,userchoice,compChoice)
      
     }

}
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{

const userchoice=choice.getAttribute("id")

playGame(userchoice)
    })
})

  
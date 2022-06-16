//selector
let inputElement=document.querySelector("#inputScore");
let winScoreElement=document.querySelector("#winningScore");
let p1dElement=document.querySelector("#p1dice");
let p2dElement=document.querySelector("#p2dice");
let diceElement=document.querySelector("#dice");
let p1btnElement=document.querySelector("#p1btn");
let p2btnElement=document.querySelector("#p2btn");
let resetbtnElement=document.querySelector("#resetbtn");

//data
let winScore=5;

//set default winning score 
winScoreElement.textContent=winScore;

inputElement.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        let inScore=inputElement.value
        winScoreElement.textContent=inScore;
        winScore=+inScore;
        inputElement.value="";
        //console.log(inputElement.textContent)
    }
})
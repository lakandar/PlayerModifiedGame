//selector
let inputElement=document.querySelector("#inputScore");
let winScoreElement=document.querySelector("#winningScore");
let p1dElement=document.querySelector("#p1dice");
let p2dElement=document.querySelector("#p2dice");
let diceElement=document.querySelector("#dice");
let p1btnElement=document.querySelector("#p1btn");
let p2btnElement=document.querySelector("#p2btn");
let resetbtnElement=document.querySelector("#resetbtnn");

//data
let winScore=10;
let p1score=0;
let p2score=0;
let diceScore=0;
let turnPlayerr="p1";

//set default winning score 
winScoreElement.textContent=winScore;

function handleWinner(ws, ds){
    if(turnPlayerr==="p1"){
        turnPlayerr="p2";
        p1btnElement.setAttribute('disabled', 'disabled');
        p2btnElement.removeAttribute('disabled');
    }
    else if(turnPlayerr==="p2"){
        turnPlayerr="p1";
        p2btnElement.setAttribute('disabled', 'disabled');
        p1btnElement.removeAttribute('disabled');
    }

    if(p1score===winScore || p1score>winScore){
        alert("Player-1 Winner!");
        p1btnElement.setAttribute('disabled', 'disabled');
        p2btnElement.setAttribute('disabled', 'disabled')
    }
    else if(p2score===winScore || p2score>winScore){
        alert("Player-2 Winner!");
        p1btnElement.setAttribute('disabled', 'disabled');
        p2btnElement.setAttribute('disabled', 'disabled')
    }
    
    
}

function resett(){
    winScore=10;
    p1score=0;
    p2score=0;
    diceScore=0;
    winScoreElement.textContent=winScore;
    p1dElement.textContent=p1score;
    p2dElement.textContent=p2score;
    diceElement.textContent=diceScore;
    p1btnElement.removeAttribute('disabled');
    p2btnElement.removeAttribute('disabled')
}

inputElement.addEventListener("keypress", (e)=>{
    if(e.key==="Enter"){
        resett();
        let inScore=inputElement.value
        if(inScore<1){
            alert("Please enter more than 0");
        }
        winScore=+inScore;
        winScoreElement.textContent=winScore;
        inputElement.value="";
        //console.log(inputElement.textContent)
    }
})


p1btnElement.addEventListener("click", (e)=>{
    diceScore=Math.ceil(Math.random()*6);
    diceElement.textContent=diceScore;
    p1score+=diceScore;
    p1dElement.textContent=p1score;
    //diceScore=p1score;
    handleWinner();
    
})

p2btnElement.addEventListener("click", (e)=>{
    diceScore=Math.ceil(Math.random()*6);
    diceElement.textContent=diceScore;
    p2score+=diceScore;
    p2dElement.textContent=p2score;
    handleWinner();
    
})

resetbtnElement.addEventListener("click", (e)=>{
    resett();
})


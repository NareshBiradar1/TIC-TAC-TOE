let boxes = document.querySelector(".game-container");
let turn1 = true;
let turn2 = false;
let turn = document.querySelector("h2");
let player1 = [];
let player2 = [];
let Winner = document.querySelector(".winner");
let count=0;
let body = document.querySelector("body");
let restartText = document.querySelector("h3");

boxes.addEventListener('click',function(e){
    let box = e.target;
    let boxNumber = e.target.classList[1];

    if (box.innerText.trim() !== '') {
        return;
    }
    if(restartText.style.display=="block"){
        return;
    }

    
      
    if(turn1){
        turn1=false;
        turn2=true;
        box.innerText = "X";
        turn.innerText = "Player 2 turn";
        count++;

        player1.push(parseInt(boxNumber));
        player1.sort(function(a, b) {
            return a - b;
        });
        
        //checking if player 1 wins
        if(isCheck(player1)){
            displayWinner("Player 1 wins!")
        }

    }
    else{
        turn1=true;
        turn2=false;
        box.innerText = "O";
        turn.innerText = "Player 1 turn";
        count++;

        player2.push(parseInt(boxNumber));
        player2.sort(function(a, b) {
            return a - b;
        });
        
        //checking if player 1 wins
        if(isCheck(player2)){
            displayWinner("Player 2 Wins!")
        }
    }

    if(count>=9){
        displayWinner("Match Draw !");
    }
})

function isCheck(player){
    if(player.length<3){
        return false;
    }
    for(let i=0;i<=player.length-3;i++){
        let number1=player[i];
        let number2=player[i+1];
        let number3=player[i+2];

        if(((number2==number1+1 && number3==number1+2) && number1%3==1) || ((number2==number1+3 && number3==number1+6) && number1<4) || (player.includes(5) && ((player.includes(1) && player.includes(9)) || (player.includes(3) && player.includes(7))))){
            return true;
        }
    }
    return false;
}

function displayWinner(champion){
    Winner.innerHTML= champion;
    restartText.style.display = "block";
    turn.style.display ="none";

    body.addEventListener('keydown',function(){
        restart();
    })
}

function restart(){
    location.reload();
}
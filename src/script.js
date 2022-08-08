function newGame() {
    game = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    for(let x=0; x<game.length; x++){
        document.getElementById(x).innerHTML = game[x];
    }
    for(let x=0; x<9; x++){
        document.getElementById(x).addEventListener('click', function() {handleEvent(x)}, {once: true});
    }
    document.getElementById('winner').innerHTML = "";
}

let handleEvent =  function(id) {
    addValue(id, currentPlayer);
    changePlayerTurn();
    if(winner()){
        for(let x=0; x<9; x++){
            let old_element = document.getElementById(x);
            let new_element = old_element.cloneNode(true);
            old_element.parentNode.replaceChild(new_element, old_element);
        }
        return;
    }
    tie();
}

function changePlayerTurn(){
    if(currentPlayer === 'X'){
        currentPlayer = 'O';
    }
    else if(currentPlayer === 'O'){
        currentPlayer = 'X';
    }
    else{ 
        console.log('error!');
    }

}

function addValue(id, currentPlayer) {
    document.getElementById(id).innerHTML = currentPlayer;
    game[id] = currentPlayer;
}

function setWinner(x, y, z){
    if(game[x] === 'X' && game[y] === 'X' && game[z] === 'X'){
        document.getElementById('winner').innerHTML = 'PLAYER 1 WINS'
        return(true);
    }
    if(game[x] === 'O' && game[y] === 'O' && game[z] === 'O'){
        document.getElementById('winner').innerHTML = 'PLAYER 2 WINS'
        return(true);
    }
}

function winner(){
    console.log(game);
    if(setWinner(0, 1, 2))
        return true;
    if(setWinner(3, 4, 5))
        return true;
    if(setWinner(6, 7, 8))
        return true;
    if(setWinner(0, 4, 8))
        return true;
    if(setWinner(6, 4, 2))
        return true;
    if(setWinner(0, 3, 6))
        return true;
    if(setWinner(1, 4, 7))
        return true;
    if(setWinner(2, 5, 8))
        return true;
    
    return false;
}

function tie() {
    let temp = true;
    for(let x=0; x<9; x++){
        if(game[x] === 'X' || game[x] === 'O'){
            temp = true;
        }else{
            temp = false;
            break;
        }
    }
    if(temp){
        document.getElementById('winner').innerHTML = 'ITS A TIE';
    }
}


let game = [];
let currentPlayer = 'X';
newGame();

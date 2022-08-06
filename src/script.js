function newGame() {
    const game = ['', '', '', '', '', '', '', '', ''];
    for(let x=0; x<game.length; x++){
        document.getElementById(x).innerHTML = game[x];
    }
}

function handleEvent(id){
    addValue(id, currentPlayer);
    changePlayerTurn();
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
}



newGame();

let currentPlayer = 'X';

for(let x=0; x<9; x++){
    document.getElementById(x).addEventListener('click', function() {handleEvent(x)});
}
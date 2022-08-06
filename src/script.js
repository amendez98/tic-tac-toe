window.onload = function newGame() {
    const game = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
    console.log('test');
    for(let x=0; x<game.length; x++){
        document.getElementById(x).innerHTML = game[x];
        console.log(game[x]);
    }
};
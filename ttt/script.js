const gameBoard = (function() {
    let board = new Array(9).fill(" ");
    
    const getBoard = () => board;
    const printBoard = () => console.log(board);
    const playAtIndex = (index, tag) => {
        if (board[index] === " ") {
            board[index] = tag;
            printBoard();
        }
    };

    return {getBoard, printBoard, playAtIndex};
})();

const gameController = (function() {
    const player1 = {name: "Player 1", tag: "X"};
    const player2 = {name: "Player 2", tag: "O"};
    let currentPlayer = player1;

    const getCurrentPlayer = () => currentPlayer;

    const switchTurn = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        console.log(`Next player: ${currentPlayer.name}`);
    };

    const playRound = (index) => {
        gameBoard.playAtIndex(index, currentPlayer.tag);
        switchTurn();
    };

    return {getCurrentPlayer, playRound};
})();

let game = gameController;
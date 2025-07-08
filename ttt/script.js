const gameBoard = (function() {
    let board = new Array(3).fill(" ").map(() => new Array(3).fill(" "));
    const winCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    const getBoard = () => board;
    const printBoard = () => console.log(board);
    const playAtIndex = (index, tag) => {
        let x = Math.floor(index/3);
        let y = index%3;

        if (index < 0 || index > 8) return false;

        if (board[x][y] === " ") {
            board[x][y] = tag;
            printBoard();
            return true; // Succesfully played the round
        }
        else {
            return false; // Round played unsuccessfully
        }
    };
    
    const checkWinCondition = (playerArray) => {
        for (let i = 0; i < winCombination.length; ++i) {
            let matchingElem = 0;

            for (let j = 0; j < 3; ++j) {
                if (playerArray.includes(winCombination[i][j])) matchingElem++;
            }

            if (matchingElem === 3) {
                return true;
            }
            else {
                matchingElem = 0;
                continue;
            }
        }
    };

    return {getBoard, printBoard, playAtIndex, checkWinCondition};
})();

const gameController = (function() {
    const player1 = {name: "Player 1", tag: "X", playZone: []};
    const player2 = {name: "Player 2", tag: "O", playZone: []};
    let currentPlayer = player1;
    let round = 1;

    const getCurrentPlayer = () => currentPlayer;

    const switchTurn = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        console.log(`Next player: ${currentPlayer.name}`);
    };

    const playRound = (index) => {
        if(gameBoard.playAtIndex(index, currentPlayer.tag)) {
            currentPlayer.playZone.push(index);
            switchTurn();
            round++;
            console.log(`Round ${round} start`);
        }
        else {
            console.log("STOPPED!");
        }
    };

    const gameEnd = (winner) => {
        if (winner !== undefined) {

        }
    };

    return {getCurrentPlayer, playRound};
})();

let game = gameController;
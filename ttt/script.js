const renderer = (function() {
    const grid = document.getElementById("play-grid");

    const createGridCell = (index) => {
        let cell = document.createElement("button");
        cell.type = "button";
        cell.classList.add("cell");
        cell.dataset.index = index;
        cell.addEventListener("click", () => {
            gameController.playRound(cell);
        });
        return cell;
    };

    const renderGrid = () => {
        grid.innerHTML = ""; // Clears the grid first

        for (let i = 0; i < 9; i++) {
            let cell = createGridCell(i);
            grid.appendChild(cell);
        }
    };
    
    return {renderGrid};
})();

const gameBoard = (function() {
    let board;
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
    const resetBoard = () => {
        board = new Array(3).fill(" ").map(() => new Array(3).fill(" "));
    };
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
        if (playerArray.length < 3) return false;

        for (let i = 0; i < winCombination.length; ++i) {
            let matchingElem = 0;

            for (let j = 0; j < 3; ++j) {
                if (playerArray.includes(winCombination[i][j])) matchingElem++;
            }

            if (matchingElem === 3) {
                return true; // Winner found
            }
            else {
                matchingElem = 0;
                continue;
            }
        }

        return false; // No winner found
    };

    resetBoard();

    return {getBoard, resetBoard, printBoard, playAtIndex, checkWinCondition};
})();

const gameController = (function() {
    const player1 = {name: "Player 1", tag: "X", score: 0, playZone: []};
    const player2 = {name: "Player 2", tag: "O", score: 0, playZone: []};
    const player1ScoreID = document.getElementById("player-1-score");
    const player2ScoreID = document.getElementById("player-2-score");
    let currentPlayer = player1;
    let round = 1;

    const getCurrentPlayer = () => currentPlayer;

    const getAllPlayersScore = () => {
        console.log(`PLAYER 1: ${player1.score} || PLAYER 2: ${player2.score}`);
    };

    const switchTurn = () => {
        currentPlayer = currentPlayer === player1 ? player2 : player1;
        round++;
        console.log(`ROUND: ${round} NEXT PLAYER: ${currentPlayer.name}`);
    };

    const playRound = (clickedCell) => {
        const index = parseInt(clickedCell.dataset.index);

        if(gameBoard.playAtIndex(index, currentPlayer.tag)) {
            clickedCell.textContent = currentPlayer.tag;
            currentPlayer.playZone.push(index);
            
            if (gameBoard.checkWinCondition(currentPlayer.playZone)) {
                playerWon(currentPlayer);
                return;
            }

            if (round === 9) {
                console.log("GAME HAS ENDED WITH A TIE! NO WINNERS!");
                startNewGame();
                return;
            }

            switchTurn();
        }
        else {
            console.log("STOPPED!");
        }
    };

    const playerWon = (winner) => {
         if (winner !== undefined || winner !== null) {
            console.log(`${winner.name} HAS WON!!!`);
            winner.score += 1;

            if (winner === player1) {
                player1ScoreID.textContent = winner.score;
            }
            else {
                player2ScoreID.textContent = winner.score;
            }

            startNewGame();
            return;
        }
    }

    const startNewGame = () => {
        renderer.renderGrid();
        gameBoard.resetBoard();
        player1.playZone.length = 0;
        player2.playZone.length = 0;
        currentPlayer = player1;
        round = 1;
        console.log("STARTING A NEW GAME");
        return;
    }

    startNewGame();

    return {getCurrentPlayer, getAllPlayersScore, playRound};
})();
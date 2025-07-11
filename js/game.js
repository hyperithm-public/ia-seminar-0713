// Game logic module
const Game = {
    board: ['', '', '', '', '', '', '', '', ''],
    currentPlayer: 'X',
    gameActive: true,
    
    // Initialize game
    init() {
        this.board = ['', '', '', '', '', '', '', '', ''];
        this.currentPlayer = Config.currentPlayer;
        this.gameActive = true;
        UI.updateStatus(`Player ${this.getCurrentSymbol()}'s turn`);
        UI.clearBoard();
    },
    
    // Get current player's symbol
    getCurrentSymbol() {
        // TODO: Feature B - Modify to use custom symbols from Config
        return Config.playerSymbols[this.currentPlayer];
    },
    
    // Handle cell click
    handleCellClick(index) {
        if (this.board[index] !== '' || !this.gameActive) {
            return;
        }
        
        // Update board state
        this.board[index] = this.currentPlayer;
        
        // Update UI
        UI.updateCell(index, this.currentPlayer, this.getCurrentSymbol());
        
        // Check for winner
        const result = this.checkWinner();
        if (result) {
            this.handleGameEnd(result);
        } else {
            // Switch player
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            UI.updateStatus(`Player ${this.getCurrentSymbol()}'s turn`);
        }
    },
    
    // Check for winner
    checkWinner() {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];
        
        for (const pattern of winPatterns) {
            const [a, b, c] = pattern;
            if (this.board[a] && 
                this.board[a] === this.board[b] && 
                this.board[a] === this.board[c]) {
                return { winner: this.board[a], pattern };
            }
        }
        
        // Check for draw
        if (!this.board.includes('')) {
            return { draw: true };
        }
        
        return null;
    },
    
    // Handle game end
    handleGameEnd(result) {
        this.gameActive = false;
        
        if (result.draw) {
            UI.updateStatus("It's a draw!");
        } else {
            const winnerSymbol = this.getCurrentSymbol();
            UI.updateStatus(`Player ${winnerSymbol} wins!`);
            UI.highlightWinningCells(result.pattern);
        }
    }
};
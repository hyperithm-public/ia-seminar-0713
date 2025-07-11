// UI module
const UI = {
    // Initialize UI
    init() {
        // Add event listeners
        document.getElementById('gameBoard').addEventListener('click', this.handleBoardClick);
        document.getElementById('resetBtn').addEventListener('click', () => Game.init());
        
        // TODO: Feature A - Add theme toggle event listener here
        
        // TODO: Feature B - Add symbol selector event listeners here
        
        // Start game
        Game.init();
    },
    
    // Handle board click
    handleBoardClick(e) {
        if (e.target.classList.contains('cell')) {
            const index = parseInt(e.target.dataset.index);
            Game.handleCellClick(index);
        }
    },
    
    // Update cell display
    updateCell(index, player, symbol) {
        const cell = document.querySelector(`[data-index="${index}"]`);
        cell.textContent = symbol;
        cell.classList.add('taken', player.toLowerCase());
    },
    
    // Clear board
    clearBoard() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('taken', 'x', 'o', 'winner');
            // TODO: Feature B - Remove custom symbol classes here
        });
    },
    
    // Update game status
    updateStatus(message) {
        document.getElementById('status').textContent = message;
    },
    
    // Highlight winning cells
    highlightWinningCells(pattern) {
        pattern.forEach(index => {
            document.querySelector(`[data-index="${index}"]`).classList.add('winner');
        });
    },
    
    // TODO: Feature A - Add theme toggle UI methods here
    // Example: toggleTheme(), updateThemeButton(), etc.
    
    // TODO: Feature B - Add symbol selector UI methods here
    // Example: showSymbolSelector(), updateSymbols(), etc.
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    UI.init();
});
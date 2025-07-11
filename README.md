# Tic-Tac-Toe Game - ccmanager Parallel Development Demo

This is a basic Tic-Tac-Toe game designed specifically for demonstrating parallel development workflows using ccmanager.

## 🎮 Current Features
- Basic two-player Tic-Tac-Toe game
- Turn-based gameplay (X and O)
- Win detection for rows, columns, and diagonals
- Draw detection
- Game reset functionality

## 🛠️ Parallel Development Exercise

This repository is structured to demonstrate how two developers can work on different features simultaneously using ccmanager.

### Feature A: Dark Mode / Light Mode
- Add theme switching functionality
- Implement CSS variables for theming
- Create a toggle button in the UI

### Feature B: Custom Symbols
- Replace hardcoded "X" and "O" with customizable symbols
- Add symbol selection UI
- Update game logic to support custom symbols

## 📋 ccmanager Workflow Instructions

### 1. Setup ccmanager

First, ensure ccmanager is installed and configured.

### 2. Create Worktrees for Parallel Development

```bash
# Start ccmanager
ccmanager

# Create worktree for Feature A (Dark Mode)
# Press 'N' to create new worktree
# Name it: feature/dark-mode

# Create worktree for Feature B (Custom Symbols)  
# Press 'N' again
# Name it: feature/custom-symbols
```

### 3. Open Separate IDE Windows

```bash
# For each worktree, open a new Cursor/Windsurf window
# Use Ctrl+↑ (or Cmd+↑ on Mac) to create new windows

# Window 1: Work on dark mode feature
# Window 2: Work on custom symbols feature
```

### 4. Implement Features in Parallel

#### Window 1 - Dark Mode Feature:
Look for TODO comments marked with "Feature A" in:
- `index.html` - Add theme toggle button
- `css/main.css` - Implement theme variables
- `js/ui.js` - Add theme toggle logic
- `js/config.js` - Add theme configuration

#### Window 2 - Custom Symbols Feature:
Look for TODO comments marked with "Feature B" in:
- `index.html` - Add symbol selector UI
- `css/game.css` - Style custom symbols
- `js/game.js` - Update game logic for custom symbols
- `js/config.js` - Add symbol configuration

### 5. Merge Features

```bash
# In ccmanager, press 'M' to merge
# Select the branches to merge back to main
```

## 🚀 Running the Game

Simply open `index.html` in a web browser. No build process required!

## 📁 Project Structure

```
tic-tac-toe/
├── index.html          # Main HTML file
├── css/
│   ├── main.css       # Layout and theme styles
│   └── game.css       # Game-specific styles
├── js/
│   ├── config.js      # Configuration module
│   ├── game.js        # Game logic
│   └── ui.js          # UI interactions
└── README.md          # This file
```

## 💡 Tips for the Exercise

1. **Feature Independence**: Notice how the code is structured so both features can be developed without conflicts
2. **Clear Separation**: CSS variables make theme implementation independent from game logic
3. **Modular JavaScript**: Separate modules for config, game logic, and UI make parallel work easier
4. **TODO Comments**: Follow the TODO comments to know exactly where to add your code

## 🔔 Post-hook Configuration (Optional)

To get notified when tasks complete, you can set up a post-hook in ccmanager:

```bash
# Example: Play a sound when done
# Configure in your ccmanager settings
```

Happy coding! 🎉
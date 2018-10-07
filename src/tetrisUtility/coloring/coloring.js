import config from '../config';
const BACKGROUND_COLOR = config.bgColor;

const colorAssign = (piece, board, customColor = null) => {
    const { pattern, row, col, color } = piece;
    if(customColor === null) {
        customColor = color;
    }
    pattern.forEach((_, rIndex) => {
        pattern[rIndex].forEach((_, cIndex) => {
            if(pattern[rIndex][cIndex] && (row + rIndex) >= 0) {
                board[row + rIndex][col + cIndex] = customColor;
            }
        });
    });
}

const colorSet = (piece, board) => {
    colorAssign(piece, board);
}

const colorReset = (piece, board, color = BACKGROUND_COLOR) => { 
    colorAssign(piece, board, color);
}

export default {
    colorReset,
    colorSet,
}
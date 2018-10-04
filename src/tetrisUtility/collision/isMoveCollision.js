import config from '../config';
import coloring from '../coloring/coloring';

const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BACKGROUND_COLOR = config.bgColor;

export const isMoveCollision = (piece, x, y, board) => {
    const { pattern, row, col } = piece;
    const rowLength = pattern.length;
    const colLength = pattern[0].length;
    coloring.colorReset(piece, board);
    for(var r = 0; r < rowLength; r++) {
        for(var c = 0; c < colLength; c++) {
            if(pattern[r][c]) {
                var newCol = col + c + x;
                var newRow = row + r + y;
                if(newCol < 0 || newCol > BOARD_WIDTH - 1 || newRow > BOARD_HEIGHT - 1) {
                    return true;
                }
                if(board[newRow][newCol] !== BACKGROUND_COLOR) {
                    return true;
                }
            }
        }
    }
    return false;
}
import config from '../config';
const [BOARD_WIDTH] = config.boardSize;
const BACKGROUND_COLOR = config.bgColor;
const ROW_ZERO = 0;

export const isGameOver = (piece, board) => {
    if(piece.row <= 0) {
        for(var c = 0; c < BOARD_WIDTH; c++) {
            if(board[ROW_ZERO][c] !== BACKGROUND_COLOR) {
                return true;
            }
        }
    }
    return false;
}
import config from '../config';

const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BACKGROUND_COLOR = config.bgColor;

const shiftDown = (board, row) => {
    while(row > 0) {
        var prev_row = row - 1;
        for(var c = 0; c < BOARD_WIDTH; c++) {
            board[row][c] = board[prev_row][c];
            board[prev_row][c] = BACKGROUND_COLOR;
        }
        row = row - 1;
    }
}

export const lock = (board, setScore) => {
    var score = 0;
    for(var r = 0; r < BOARD_HEIGHT; r++) {
        var isFull = true;
        for(var c = 0; c < BOARD_WIDTH; c++) {
            if(board[r][c] === BACKGROUND_COLOR) {
                isFull = false;
                break;
            }
        }
        if(isFull) {
            shiftDown(board, r)
            score = score + 10;
        }
    }
    setScore(score);
}
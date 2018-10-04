import config from '../config';
import coloring from '../coloring/coloring';
const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BACKGROUND_COLOR = config.bgColor;

const generateInitialBoard = () => {
    return Array(BOARD_HEIGHT).fill().map(() => Array(BOARD_WIDTH).fill(BACKGROUND_COLOR));
} 

export const generateBoard = (current_piece, board = generateInitialBoard(), prev_piece = null) => {
    if(prev_piece !== null) {
        coloring.colorReset(prev_piece, board);
    }
    coloring.colorSet(current_piece, board);
    return board;
}
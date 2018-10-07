import config from '../config'
import { generatePiece } from '../../tetrisUtility/piece/generatePiece';
import { generateBoard } from '../../tetrisUtility/board/generateBoard';

const BACKGROUND_COLOR = config.bgColor;

export const resetBoard = (board, updateBoard) => {
    board.forEach((_, rIndex) => {
        board[rIndex].forEach((color, cIndex) => {
            if(color !== BACKGROUND_COLOR) {
                board[rIndex][cIndex] = BACKGROUND_COLOR;
            }
        })
    })
    var piece = generatePiece();
    board = generateBoard(piece);
    updateBoard(piece, board);
}
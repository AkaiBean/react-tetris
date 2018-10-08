import { Direction } from '../config';
import { movePiece } from './movePiece';
import { generateBoard } from '../board/generateBoard';
import { nextPiece } from '../piece/nextPiece';
import { isMoveCollision } from '../collision/isMoveCollision';

const move = (direction, prev_piece, prev_board, setState) => {
    var current_piece = movePiece(prev_piece, direction);
    var board = generateBoard(current_piece, prev_board, prev_piece);
    setState(current_piece, board);
}

const moveDown = (piece, board, setState, setScore, setGameEnd, setGameStart, handleOpenModal, intervalId, setStartTimer) => {
    if(!isMoveCollision(piece, 0, 1, board)) {
        move(Direction.DOWN, piece, board, setState);
    } else {
        nextPiece(piece, board, setState, setScore, setGameEnd, setGameStart, handleOpenModal, intervalId, setStartTimer);
    }
}

export default {
    move,
    moveDown,
}
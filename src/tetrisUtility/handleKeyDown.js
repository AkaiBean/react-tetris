import { Direction } from './config';
import { isMoveCollision } from './collision/isMoveCollision';
import { isRotateCollision } from './collision/isRotateCollision';
import { nextPiece } from './piece/nextPiece';
import move from './movement/move';
import rotate from './movement/rotate';

export const handleKeyDown = (e, piece, board, setState, setScore, setGameEnd, getGameEnd, setGameStart, getGameStart, handleOpenModal, intervalId, setStartTimer) => {
    if(getGameStart() && !getGameEnd()) {
        switch(e.keyCode) {
            case 37:
                e.preventDefault();
                if(!isMoveCollision(piece, -1, 0, board)) {
                    move.move(Direction.LEFT, piece, board, setState);
                }
                break;
            case 38:
                e.preventDefault();
                if(!isRotateCollision(piece, board)) {
                    rotate.rotate(piece, board, setState);
                }
                break;
            case 39:
                e.preventDefault();
                if(!isMoveCollision(piece, 1, 0, board)) {
                    move.move(Direction.RIGHT, piece, board, setState);
                }
                break;
            case 40:
                e.preventDefault();
                if(!isMoveCollision(piece, 0, 1, board)) {
                    move.move(Direction.DOWN, piece, board, setState);
                } else {
                    nextPiece(piece, board, setState, setScore, setGameEnd, setGameStart, handleOpenModal, intervalId, setStartTimer);
                }
                break;
            default:
                break;
        }
    }
}
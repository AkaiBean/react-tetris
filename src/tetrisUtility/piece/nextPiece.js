import { generateBoard } from "../board/generateBoard";
import { isGameOver } from "../gameOver/isGameOver";
import { generatePiece } from "./generatePiece";
import { isNextPieceCollision } from "../collision/isNextPieceCollision";
import { lock } from '../lock/lock';

export const nextPiece = (piece, board, setState, openModal, setScore, intervalId = null) => {
    board = generateBoard(piece, board);
    setState(piece, board);
    if(!isGameOver(piece, board)) {
        lock(board, setScore);
        var nextPiece = generatePiece();
        isNextPieceCollision(nextPiece, board);
        var newBoard = generateBoard(nextPiece, board);
        setState(nextPiece, newBoard);
        if(nextPiece.erased) {
            openModal();
            clearInterval(intervalId);
        }
    } else {
        openModal();
        clearInterval(intervalId);
    }
}
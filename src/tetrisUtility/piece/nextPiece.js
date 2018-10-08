import { generateBoard } from "../board/generateBoard";
import { isGameOver } from "../gameOver/isGameOver";
import { generatePiece } from "./generatePiece";
import { isNextPieceCollision } from "../collision/isNextPieceCollision";
import { lock } from '../lock/lock';

const SET_TRUE = true;
const SET_FALSE = false;

export const nextPiece = (piece, board, setState, setScore, setGameEnd, setGameStart, handleOpenModal, intervalId, setStartTimer) => {
    board = generateBoard(piece, board);
    if(!isGameOver(piece, board)) {
        lock(board, setScore);
        piece = generatePiece();
        isNextPieceCollision(piece, board);
        board = generateBoard(piece, board);
        setState(piece, board);
        if(piece.erased) {
            setGameEnd(SET_TRUE);
            setGameStart(SET_FALSE);
            setStartTimer(SET_FALSE);
            handleOpenModal();
            clearInterval(intervalId);
        }
    } else {
        setGameEnd(SET_TRUE);    
        setGameStart(SET_FALSE);
        setStartTimer(SET_FALSE);  
        handleOpenModal();
        clearInterval(intervalId);
    }
}
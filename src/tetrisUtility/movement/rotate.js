import { generateBoard } from '../board/generateBoard';
import { rotatePiece } from './rotatePiece';

const rotate = (prev_piece, prev_board, setState) => {
    var current_piece = rotatePiece(prev_piece);
    var board = generateBoard(current_piece, prev_board, prev_piece);
    setState(current_piece, board);
}

export default {
    rotate,
}
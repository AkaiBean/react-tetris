import config from '../config';
import coloring from '../coloring/coloring';
import { rotatePiece } from '../movement/rotatePiece';

const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BACKGROUND_COLOR = config.bgColor;

const kick = (piece, columnCount, rowCount) => {
    if(piece.col < 0) {
        piece.col = 0;
    }
    for(var i = 0; i < columnCount; i++) {
        piece.col = piece.col - 1;
    }
    for(var j = 0; j < rowCount; j++) {
        piece.row = piece.row - 1;
    }
}

const isAnotherPieceThere = (board, row, col) => {
    if(row > BOARD_HEIGHT - 1) {
        return false;
    }
    if(row < 0 || (typeof(board[row][col]) !== 'undefined' && board[row][col] !== BACKGROUND_COLOR)) {
        return true;
    }
}

export const isRotateCollision = (piece, board) => {
    var columnCount = 0;
    var recordedColumn = null;
    var rowCount = 0;
    var recordedRow = null;

    var virtualRotatedPiece = rotatePiece(piece);
    coloring.colorReset(piece, board);
    const rowHeight = virtualRotatedPiece.pattern.length;
    const colWidth = virtualRotatedPiece.pattern[0].length;

    for(var r = 0; r < rowHeight; r++) {
        for(var c = 0; c < colWidth; c++) {
            if(virtualRotatedPiece.pattern[r][c]) {
                var newRow = virtualRotatedPiece.row + r;
                var newCol = virtualRotatedPiece.col + c;
                if(isAnotherPieceThere(board, newRow, newCol)) {
                    return true;
                }
                if(newCol > BOARD_WIDTH - 1 && recordedColumn !== c) {
                    recordedColumn = c;
                    columnCount = columnCount + 1;
                }
                if(newRow > BOARD_HEIGHT - 1 && recordedRow !== r) {
                    recordedRow = r;
                    rowCount = rowCount + 1;
                }
            }
        }
    }
    kick(piece, columnCount, rowCount)
    return false;
}
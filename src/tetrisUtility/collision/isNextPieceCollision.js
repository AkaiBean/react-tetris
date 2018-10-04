import config from '../config';
const BACKGROUND_COLOR = config.bgColor;

export const isNextPieceCollision = (piece, board) => {
    var isCollision = false;
    const rowHeight = piece.pattern.length;
    const colWidth = piece.pattern[0].length;
    for(var r = rowHeight - 1; r >= 0; r--) {
        for(var c = 0; c < colWidth; c++) {
            if(piece.pattern[r][c]) {
                var newCol = piece.col + c;
                var newRow = piece.row + r;
                if(!isCollision && board[newRow][newCol] !== BACKGROUND_COLOR) {
                    isCollision = true;
                    piece.row = piece.row - 1;
                }
                newRow = piece.row + r;
                if(newRow < 0) {
                    piece.pattern[r][c] = 0;
                    piece.erased = true;
                }
            }
        }
    } 
}
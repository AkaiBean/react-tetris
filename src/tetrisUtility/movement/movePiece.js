import { Direction } from '../config';

export const movePiece = (piece, direction) => {
    var newPiece = {...piece};
    switch(direction) {
        case Direction.LEFT:
            newPiece.col = newPiece.col - 1;
            break;
        case Direction.RIGHT:
            newPiece.col = newPiece.col + 1;
            break;
        case Direction.DOWN:
            newPiece.row = newPiece.row + 1;
            break;
        default:
            break;
    }

    return newPiece;
}
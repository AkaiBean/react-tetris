export const rotatePiece = (piece) => {   
    var patternNum = (piece.patternNum + 1) % 4;
    var pattern = piece.tetrimino[patternNum];
    var newPiece = {
        ...piece,
        patternNum,
        pattern,
    };
    return newPiece;
}
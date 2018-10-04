import pieces from './pieces';

const { I, J, L, O, S, T, Z } = pieces;
const pieceAndColor = [
    [I, 'cyan'],
    [J, 'orange'],
    [L, 'purple'],
    [O, 'blue'],
    [S, 'green'],
    [T, 'yellow'],
    [Z, 'red'],
];
const NUMBER_OF_PIECES = pieceAndColor.length;


export const generatePiece = () => {
    var pieceNum = Math.floor(Math.random() * NUMBER_OF_PIECES);
    var patternNum = 0;
    var row = 0;
    var col = 4;
    var erased = false;

    return {
        tetrimino: pieceAndColor[pieceNum][0],
        color: pieceAndColor[pieceNum][1],
        pattern: pieceAndColor[pieceNum][0][patternNum],
        patternNum,
        pieceNum,
        row,
        col,
        erased,
    }
}
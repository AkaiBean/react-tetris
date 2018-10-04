import config from '../../../tetrisUtility/config';
import { StyleSheet } from 'aphrodite/no-important';
const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BLOCK_SIZE = config.blockSize;
const CANVAS_HEIGHT =  BLOCK_SIZE * BOARD_HEIGHT;
const CANVAS_WIDTH = BLOCK_SIZE * BOARD_WIDTH;

const matrix = {
    position: 'absolute',
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
    left: '50%',
    marginLeft: -(CANVAS_WIDTH/2),
    top: 20,
};
const matrixAnimation = {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    },
};

const hidden = {
    visibility: 'hidden',
};

export const styles = StyleSheet.create({
    matrix: {
        ...matrix,
        ...hidden,
    },
    matrixAnimate: {
        ...matrix,
        animationName: matrixAnimation,
        animationDuration: '1s',
        animationFillMode: 'forwards',
    }
});
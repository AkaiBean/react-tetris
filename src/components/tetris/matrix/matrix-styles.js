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
    boxShadow: '0px 0px 10px 10px rgba(0, 0, 0, 0.1)',
    
};
const matrixAnimation = {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    },
};

const matrixDisappear = {
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0,
    }
};

const hidden = {
    visibility: 'hidden',
}

export const styles = StyleSheet.create({
    matrixHidden: {
        ...matrix,
        ...hidden,
    },
    matrixFade: {
        ...matrix,
        animationName: matrixDisappear,
        animationDuration: '1s',
        animationFillMode: 'forwards',
    },
    matrixAnimate: {
        ...matrix,
        animationName: matrixAnimation,
        animationDuration: '1s',
        animationFillMode: 'forwards',
    }
});
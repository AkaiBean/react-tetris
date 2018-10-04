import config from '../../../tetrisUtility/config';
const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BLOCK_SIZE = config.blockSize;
const CANVAS_HEIGHT =  BLOCK_SIZE * BOARD_HEIGHT;
const CANVAS_WIDTH = BLOCK_SIZE * BOARD_WIDTH;

const root = {
    position: 'absolute',
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
    left: '50%',
    marginLeft: -(CANVAS_WIDTH/2),
    top: 20,
}

const hidden = {
    visibility: 'hidden',
}

export default {
    root,
    rootHidden: {
        ...root,
        ...hidden,
    },
}
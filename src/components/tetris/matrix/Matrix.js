import React from 'react';
import config from '../../../tetrisUtility/config';
import { css } from 'aphrodite/no-important';
import { styles } from './matrix-styles';

const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BLOCK_SIZE = config.blockSize;
const CANVAS_HEIGHT =  BLOCK_SIZE * BOARD_HEIGHT;
const CANVAS_WIDTH = BLOCK_SIZE * BOARD_WIDTH;
const BORDER_COLOR = config.borderColor;

class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.canvasContainer = React.createRef();
    }

    componentDidMount() {
        this.drawBoard(this.props.board);
        this.canvasContainer.current.addEventListener('animationend', this.props.startGame);
    }

    componentWillUnmount() {
        this.canvasContainer.current.removeEventListener('animationend', this.props.startGame);
    }

    componentDidUpdate() {
        this.drawBoard(this.props.board);
    }

    drawSquare = (x, y, color) => {
        const canvas = this.canvas.current;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = color;
        ctx.fillRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        ctx.strokeStyle = BORDER_COLOR;
        ctx.strokeRect(x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
    }

    drawBoard = (board) => {
        board.forEach((_, rIndex) => {
            board[rIndex].forEach((col, cIndex) => {
                this.drawSquare(cIndex, rIndex, col);
            });
        });
    }

    isAnimationStart = () => {
        return this.props.getAnimationStartMatrix() ? css(styles.matrixAnimate) : css(styles.matrix);
    }

    render() {
        return (
            <div ref={this.canvasContainer} className={this.isAnimationStart()}>
                <canvas ref={this.canvas} height={CANVAS_HEIGHT} width={CANVAS_WIDTH}></canvas>
            </div>
        );
    }
}

export default Matrix;
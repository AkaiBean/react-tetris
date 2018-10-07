import React from 'react';
import config from '../../../tetrisUtility/config';
import { css } from 'aphrodite/no-important';
import { styles } from './matrix-styles';
import { resetBoard } from '../../../tetrisUtility/board/resetBoard';

const [BOARD_WIDTH, BOARD_HEIGHT] = config.boardSize;
const BLOCK_SIZE = config.blockSize;
const CANVAS_HEIGHT =  BLOCK_SIZE * BOARD_HEIGHT;
const CANVAS_WIDTH = BLOCK_SIZE * BOARD_WIDTH;
const BORDER_COLOR = config.borderColor;
const SET_TRUE = true;
const SET_FALSE = false;

class Matrix extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
        this.canvasContainer = React.createRef();
        
    }


    componentDidMount() {
        this.drawBoard(this.props.board);
        this.canvasContainer.current.addEventListener('animationend', (e) => {
            e.stopPropagation();
            if(!this.props.getGameStart() && !this.props.getGameEnd()) {
                this.props.startGame();
            } else {
                resetBoard(this.props.board, this.props.updateBoard);
                this.props.setAnimationStartFade(SET_FALSE);
                this.props.setAnimationStartHome(SET_FALSE);
                this.props.setAnimationStartShrink(SET_TRUE);
                this.props.setAnimationStartDisplay(SET_TRUE);
            }
        });
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
        var className;
        if(this.props.getAnimationStartMatrix()) {
            className = css(styles.matrixAnimate);
        } else if(this.props.getAnimationStartFade()) {
            className = css(styles.matrixFade);
        } else {
            className = css(styles.matrixHidden);
        }
        return className;
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
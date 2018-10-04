import React from 'react';
import { css } from 'aphrodite/no-important';
import { generatePiece } from '../../tetrisUtility/piece/generatePiece';
import { generateBoard } from '../../tetrisUtility/board/generateBoard';
import { handleKeyDown } from '../../tetrisUtility/handleKeyDown';
// import TetrisHome from './tetrisHome/TetrisHome';
import Matrix from './matrix/Matrix';
import Modal from 'react-modal';
import move from '../../tetrisUtility/movement/move';
import { styles } from './tetris-styles';

class Tetris extends React.Component {
    constructor(props) {
        super(props);
        var current_piece = generatePiece();
        this.state = {
            board: generateBoard(current_piece),
            current_piece,
            score: 0,
            showModal: false,
            intervalId: null,
            timerStart: false,
        }
    }

    componentDidMount() {
        Modal.setAppElement('#app');
        document.addEventListener('keydown', (e) => {
            const { current_piece, board } = this.state;
            handleKeyDown(e, current_piece, board, this.updateBoard, this.handleOpenModal, this.updateScore, this.getModal, this.getTimerStart);
        })
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', handleKeyDown);
    }

    updateBoard = ( current_piece, board ) => {
        this.setState({
            board,
            current_piece,
        })
    }

    updateScore = (newScore) => {
        this.setState(prevState => ({
            score: prevState.score + newScore,
        }))
    }

    handleOpenModal = () => {
        this.setState({
            showModal: true,
            timerStart: false,
        })
    }

    handleCloseModal = () => {
        this.setState({
            showModal: false,
        })
    }

    getModal = () => {
        return this.state.showModal;
    }

    getTimerStart = () => {
        return this.state.timerStart;
    }

    play = () => {
        var intervalId = setInterval(() => {
            const { current_piece, board, intervalId } = this.state;
            move.moveDown(current_piece, board, this.updateBoard, this.handleOpenModal, this.updateScore, intervalId);
        }, 500);
        this.setState({
            intervalId,
            timerStart: true,
        })
    }

    render() {
        const {
            board,
            showModal,
        } = this.state;

        return (
            <div>
                <div className={css(styles.gameboy)}>
                    <div className={css(styles.screen)}><Matrix board={board} getTimerStart={this.getTimerStart} /></div>
                    <div className={css(styles.controllerShade)}></div>
                    <div className={css(styles.dpad)}></div>
                    <div className={css(styles.btns)}></div>
                </div>

                {/* <TetrisHome play={this.play} getTimerStart={this.getTimerStart} /> */}

                <Modal 
                    isOpen={showModal} >
                    <p>Hello from Modal</p>
                    <button onClick={this.handleCloseModal}>Game Over</button>
                </Modal>
            </div>
        );
    }
}



export default Tetris;
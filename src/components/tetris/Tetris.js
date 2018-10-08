import React from 'react';
import { css } from 'aphrodite/no-important';
import { generatePiece } from '../../tetrisUtility/piece/generatePiece';
import { generateBoard } from '../../tetrisUtility/board/generateBoard';
import { handleKeyDown } from '../../tetrisUtility/handleKeyDown';
import Matrix from './matrix/Matrix';
import PlayButton from './playButton/PlayButton';
import move from '../../tetrisUtility/movement/move';
import Modal from 'react-modal';
import { styles } from './tetris-styles';
import { scoreBoardStyles } from './scoreBoard-styles';
import { resetBoard } from '../../tetrisUtility/board/resetBoard';

const SET_TRUE = true;
const SET_FALSE = false;
const RESET_SCORE = 0;

class Tetris extends React.Component {
    constructor(props) {
        super(props);
        var current_piece = generatePiece();
        this.gameboy = React.createRef();
        this.state = {
            board: generateBoard(current_piece),
            current_piece,
            score: 0,
            intervalId: null,
            animationStartHome: false,
            animationStartShrink: false,
            animationStartMatrix: false,
            animationStartFade: false,
            animationStartDisplay: false,
            gameStart: false,
            gameEnd: false,
            showModal: false,
            startDisable: false,
        }
    }

    componentDidMount() {
        Modal.setAppElement('#app')
        document.addEventListener('keydown', (e) => {
            const { current_piece, board } = this.state;
            handleKeyDown(
                e, 
                current_piece, 
                board, 
                this.updateBoard, 
                this.updateScore, 
                this.setGameEnd,
                this.getGameEnd,
                this.setGameStart,
                this.getGameStart,
                this.handleOpenModal,
                this.state.intervalId,
                );
        });
        this.gameboy.current.addEventListener('animationend', (e) => {
            e.stopPropagation();
            if(this.getAnimationStartHome() && !this.getAnimationStartShrink()) {
                this.setAnimationStartMatrix(SET_TRUE);
            } 
            // else {
            //     this.setAnimationStartDisplay(SET_FALSE);
            // }
        });
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', handleKeyDown);
        this.gameboy.current.removeEventListener('animationend', this.setAnimationStartMatrix);
    }

    updateBoard = ( current_piece, board ) => {
        this.setState({
            current_piece,
            board,
        })
    }

    updateScore = (newScore) => {
        this.setState(prevState => ({
            score: prevState.score + newScore,
        }))
    }

    setScore = (score) => {
        this.setState({
            score,
        })
    }

    getScore = () => {
        return this.state.score;
    }

    handleOpenModal = () => {
        this.setState({
            showModal: true,
        })
    }
    handleCloseModal = () => {
        this.setState({
            showModal: false,
        })
    }

    setGameStart = (gameStart) => {
        this.setState({
            gameStart,
        })
    }

    getGameStart = () => {
        return this.state.gameStart;
    }

    setGameEnd = (gameEnd) => {
        this.setState({
            gameEnd,
        })
    }

    getGameEnd = () => {
        return this.state.gameEnd;
    }

    startGame = () => {
        var intervalId = setInterval(() => {
            const { current_piece, board, intervalId } = this.state;
            move.moveDown(current_piece, board, this.updateBoard, this.updateScore, this.setGameEnd, this.setGameStart, this.handleOpenModal, intervalId);
        }, 500);
        this.setState({
            intervalId,
            gameStart: true,
        })
    }

    setAnimationStartHome = (animationStartHome) => {
        this.setState({
            animationStartHome,
        })
    }
    getAnimationStartHome = () => {
        return this.state.animationStartHome;
    }
    // --------------------------------------------------
    setAnimationStartShrink = (animationStartShrink) => {
        this.setState({
            animationStartShrink,
        })
    }
    getAnimationStartShrink = () => {
        return this.state.animationStartShrink;
    }
    // --------------------------------------------------
    setAnimationStartMatrix = (animationStartMatrix) => {
        this.setState({
            animationStartMatrix,
        })
    }
    getAnimationStartMatrix = () => {
        return this.state.animationStartMatrix;
    }
    // --------------------------------------------------
    setAnimationStartFade = (animationStartFade) => {
        this.setState({
            animationStartFade,
        })
    }
    getAnimationStartFade = () => {
        return this.state.animationStartFade;
    }
    // --------------------------------------------------
    setAnimationStartDisplay = (animationStartDisplay) => {
        this.setState({
            animationStartDisplay,
        })
    }
    getAnimationStartDisplay = () => {
        return this.state.animationStartDisplay;
    }
    // --------------------------------------------------
    setStartDisable = (startDisable) => {
        this.setState({
            startDisable,
        })
    }
    getStartDisable = () => {
        return this.state.startDisable;
    }

    isAnimationStart = {
        gameboy: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.gameboyAnimate);
            } else if(this.getAnimationStartShrink()) {
                return css(styles.gameboyReverseAnimate);
            } else {
                return css(styles.gameboy);
            }
        },
        screen: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.screenAnimate);
            } else if(this.getAnimationStartShrink()) {
                return css(styles.screenReverseAnimate);
            } else {
                return css(styles.screen);
            }
        },
        display: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.displayFade);
            } else if(this.getAnimationStartDisplay()) {
                return css(styles.displayAnimate);
            } else {
                return css(styles.display);
            }
        },
        controllerShade: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.controllerShadeAnimate);
            } else if(this.getAnimationStartShrink()) {
                return css(styles.controllerShadeReverseAnimate);
            } else {
                return css(styles.controllerShade);
            }
        },
        dpad: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.dpadAnimate);
            } else if(this.getAnimationStartShrink()) {
                return css(styles.dpadReverseAnimate);
            } else {
                return css(styles.dpad);
            }
        },
        btns: () => {
            if(this.getAnimationStartHome()) {
                return css(styles.btnsAnimate);
            } else if(this.getAnimationStartShrink()) {
                return css(styles.btnsReverseAnimate);
            } else {
                return css(styles.btns);
            }
        },
    }


    playAgainBtnOnClickHandler = () => {
        this.handleCloseModal();
        resetBoard(this.state.board, this.updateBoard);
        this.setScore(RESET_SCORE);
        this.setGameEnd(SET_FALSE);
        this.startGame();
    }

    homeBtnOnClickHandler = () => {
        this.handleCloseModal();
        this.setScore(RESET_SCORE);
        this.setAnimationStartMatrix(SET_FALSE);
        this.setAnimationStartFade(SET_TRUE);
        this.setStartDisable(SET_TRUE);
    }

    render() {
        const {
            board,
        } = this.state;

        return (
            <div>
                <div ref={this.gameboy} className={this.isAnimationStart.gameboy()}>
                    <div className={css(styles.gameboyLineVertical)}></div>
                    <div className={css(styles.gameboyLineHorizontal)}></div>
                    <div className={css(scoreBoardStyles.scoreBoard)}>
                        <div className={css(scoreBoardStyles.frames)}></div>
                        <div className={css(scoreBoardStyles.title)}>Score</div>
                        <div className={css(scoreBoardStyles.bevel)}>{this.getScore()}</div>
                    </div>
                    <div className={this.isAnimationStart.screen()}>
                        <Matrix 
                            board={board}
                            updateBoard={this.updateBoard} 
                            getAnimationStartMatrix={this.getAnimationStartMatrix}
                            setAnimationStartMatrix={this.setAnimationStartMatrix}
                            getAnimationStartFade={this.getAnimationStartFade}
                            setAnimationStartFade={this.setAnimationStartFade}
                            setAnimationStartShrink={this.setAnimationStartShrink}
                            getAnimationStartShrink={this.getAnimationStartShrink} 
                            setAnimationStartHome={this.setAnimationStartHome}
                            setAnimationStartDisplay={this.setAnimationStartDisplay}
                            setGameEnd={this.setGameEnd}
                            startGame={this.startGame}
                            getGameStart={this.getGameStart} 
                            getGameEnd={this.getGameEnd} />
                        <Modal isOpen={this.state.showModal} className={css(styles.modal)} >
                            <div className={css(styles.modalFrame)}></div>
                            <button className={css(styles.playAgainBtn)} onClick={this.playAgainBtnOnClickHandler}>Play Again</button>
                            <button className={css(styles.homeBtn)} onClick={this.homeBtnOnClickHandler}>Home</button>
                            <button className={css(styles.statsBtn)}>Stats</button>
                        </Modal>
                    </div>
                    <div className={this.isAnimationStart.display()}>
                        <PlayButton 
                        getAnimationStartHome={this.getAnimationStartHome}
                        setAnimationStartHome={this.setAnimationStartHome} 
                        getAnimationStartDisplay={this.getAnimationStartDisplay}
                        setGameEnd={this.setGameEnd}
                        getAnimationStartShrink={this.getAnimationStartShrink}
                        setAnimationStartShrink={this.setAnimationStartShrink}
                        setStartDisable={this.setStartDisable}
                        getStartDisable={this.getStartDisable} />
                    </div>
                    <div className={this.isAnimationStart.controllerShade()}></div>
                    <div className={this.isAnimationStart.dpad()}></div>
                    <div className={this.isAnimationStart.btns()}></div>
                </div>
            </div>
        );
    }
}



export default Tetris;
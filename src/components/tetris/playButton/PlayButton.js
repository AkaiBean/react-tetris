import React from 'react';
import { css } from 'aphrodite/no-important';
import { styles } from './playButton-styles';

const SET_TRUE = true;
const SET_FALSE = false;

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.playButton = React.createRef();
        this.state = {
            animationStartPlayButton: false,
        }
    }

    componentDidMount() {
        this.playButton.current.addEventListener('animationend', (e) => {
            e.stopPropagation();
            if(!this.props.getAnimationStartHome() && !this.props.getAnimationStartShrink()) {
                this.props.setAnimationStartHome(SET_TRUE);
                this.setAnimationPlayButton(SET_FALSE);
            } else {
                this.props.setAnimationStartShrink(SET_FALSE);
                this.props.setStartDisable(SET_FALSE);
                this.props.setGameEnd(SET_FALSE);
            }
        });
    }

    componentWillUnmount() {
        this.playButton.current.removeEventListener('animationend', this.props.setAnimationStartHome);
    }

    isAnimationStart = () => {
        if(this.getAnimationPlayButton() || this.props.getAnimationStartHome()) {
            return css(styles.playButtonFade);
        } else if(this.props.getAnimationStartDisplay() && this.props.getStartDisable()) {
            return css(styles.playButtonAnimate);
        } else {
            return css(styles.playButton);
        }
    }

    getAnimationPlayButton = () => {
        return this.state.animationStartPlayButton;
    }

    setAnimationPlayButton = (animationStartPlayButton) => {
        this.setState({
            animationStartPlayButton,
        })
    }

    startAnimationPlayButton = () => {
        this.setAnimationPlayButton(SET_TRUE);
    }


    render() {
        return (
            <button 
                ref={this.playButton} 
                type='button' 
                className={this.isAnimationStart()} 
                onClick={this.startAnimationPlayButton} 
                disabled={this.props.getStartDisable()} >
                    Play
            </button>
        );
    }
}

export default PlayButton;
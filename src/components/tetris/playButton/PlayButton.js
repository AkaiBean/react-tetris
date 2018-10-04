import React from 'react';
import { css } from 'aphrodite/no-important';
import { styles } from './playButton-styles';

class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.playButton = React.createRef();
        this.state = {
            animationStartPlayButton: false,
        }
    }

    componentDidMount() {
        this.playButton.current.addEventListener('animationend', this.props.setAnimationStartHome);
    }

    componentWillUnmount() {
        this.playButton.current.removeEventListener('animationend', this.props.setAnimationStartHome);
    }

    isAnimationStart = () => {
        return this.state.animationStartPlayButton ? css(styles.playButtonFade) : css(styles.playButton);
    }

    startAnimationPlayButton = () => {
        this.setState({
            animationStartPlayButton: true,
        })
    }

    render() {
        return (
            <button ref={this.playButton} type='button' className={this.isAnimationStart()} onClick={this.startAnimationPlayButton}>Play</button>
        );
    }
}

export default PlayButton;
import React from 'react';
import play_button from '../../../../images/play_button.svg';
import styles from './playButton-styles';

class PlayButton extends React.Component {

    getTimerStartButton = () => {
        return this.props.getTimerStart() ? styles.buttonHidden : styles.button;
    }

    getTimerStartImage = () => {
        return this.props.getTimerStart() ? styles.imageHidden : styles.image;
    }

    render() {
        return (
            <button key='play_button' onClick={this.props.play} style={this.getTimerStartButton()}>
                <img key='play_button_image' src={play_button} alt='playButton' style={this.getTimerStartImage()} />
            </button>
        );
    }
}

export default PlayButton;
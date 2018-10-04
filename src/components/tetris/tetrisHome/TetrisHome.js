import React from 'react';
import PlayButton from './playButton/PlayButton';
import styles from './tetrisHome-styles';
import logo from '../../../images/logo.svg';


class TetrisHome extends React.Component {
    getGameStartSvg = () => {
        console.log
        return this.props.getTimerStart() ? styles.svgHidden : styles.svg;
    }

    getGameStartCorners = () => {
        return this.props.getTimerStart() ? styles.cornersHidden : styles.corners;
    }

    getGameStartHomePage = () => {
        return this.props.getTimerStart() ? styles.homePageHidden : styles.homePage;
    }

    render() {
        return (
            <div>
                <div style={this.getGameStartCorners()}></div>
                <img src={logo} alt='logo' style={this.getGameStartSvg()} />
                <div style={this.getGameStartHomePage()}></div>
                <PlayButton play={this.props.play} getTimerStart={this.props.getTimerStart} />
            </div>
        );
    }
}

export default TetrisHome;
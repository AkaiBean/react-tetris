import React from 'react';
import { css } from 'aphrodite/no-important';
import { styles } from './timer-styles';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.timerId = null;
        this.state = {
            elapsed: 0,
        }
    }
    componentDidUpdate(prevProps) {
        if(this.props.getStartTimer && (this.props.getStartTimer !== prevProps.getStartTimer)) {
            this.timerId = setInterval(this.timerStart, 50);
        } else if(!this.props.getStartTimer && (!this.props.getStartTimer !== !prevProps.getStartTimer)) {
            clearInterval(this.timerId);
        }
        if(this.props.getResetTimer && (this.props.getResetTimer !== prevProps.getResetTimer)) {
            this.setState({
                elapsed: 0,
            })
        }
    }

    timerStart = () => {
        this.setState({
            elapsed: new Date() - this.props.startTime,
        })
    }

    getTimer = () => {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);
        return seconds;
    }

    render() {
        return(
            <div className={css(styles.timerBoard)}>
                <div className={css(styles.frames)}></div>
                <div className={css(styles.title)}>Timer</div>
                <div className={css(styles.bevel)}>{this.getTimer()}</div>
            </div>
        );
    }
}

export default Timer;
import { StyleSheet } from 'aphrodite/no-important';
const button = {
    position: 'absolute',
    height: 40,
    width: 130,
    left: '50%',
    marginLeft: -65,
    top: 75,
    background: '#a93671',
    border: 'none',
    borderRadius: 10,
    fontSize: '1.25em',
    fontWeight: 500,
    userSelect: 'none',
    cursor: 'pointer',
    color: '#e6e6e6',
    boxShadow: 'inset 0px 0px 5px 3px #74254e',


    ':focus': {
        outline: 'none',
    },
}
const playButton = {
    ...button,

    ':hover': {
        background:'#9b3168'
    },

    ':active': {
        boxShadow: 'inset 0px 0px 5px 5px #e09ec0',
        transform: 'translateY(2px)',
        color: '#f9ecf2',
    } ,
}

const fade = {
    '0%': {
        opacity: 1,
    },

    '100%': {
        opacity: 0,
        visibility: 'hidden',
    }
}

const animate = {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
}

export const styles = StyleSheet.create({
    playButton,
    playButtonFade: {
        ...button,
        cursor: 'auto',
        animationName: fade,
        animationDuration: '1s',
        animationFillMode: 'forwards',
    },
    playButtonAnimate: {
        ...playButton,
        cursor: 'auto',
        animationName: animate,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    }
});
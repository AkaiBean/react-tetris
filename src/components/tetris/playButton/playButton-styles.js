import { StyleSheet } from 'aphrodite/no-important';
const button = {
    position: 'absolute',
    height: 40,
    width: 130,
    left: '50%',
    marginLeft: -65,
    top: 75,
    background: '#ae9b32',
    border: '3px dashed black',
    borderRadius: 5,
    fontFamily: 'Arial',
    fontSize: '1.25em',
    userSelect: 'none',
    cursor: 'pointer',

    ':focus': {
        outline: 'none',
    },
}
const playButton = {
    ...button,
    
    ':hover': {
        background:'#8a7c28'
    },

    ':active': {
        transform: 'translateY(4px)',
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

export const styles = StyleSheet.create({
    playButton,
    playButtonFade: {
        ...button,
        cursor: 'auto',
        animationName: fade,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
});
import config from '../../tetrisUtility/config';
import { StyleSheet } from 'aphrodite/no-important';
const [WIDTH, HEIGHT] = config.gameboySize;
const GAMEBOY_BLOCK = config.gameboyBlock;
const GAMEBOY_HEIGHT = GAMEBOY_BLOCK * HEIGHT;
const GAMEBOY_WIDTH = GAMEBOY_BLOCK * WIDTH;


const gameboy = {
    position: 'relative',
    margin: '50px auto',
    height: 600,
    width: GAMEBOY_WIDTH,
    background: '#01b4dd',
    borderRadius: '20px 20px 80px 20px',
    boxShadow: '7px 7px rgba(0, 0, 0, 0.1)',
    
    ':before': {
        position: 'absolute',
        width: GAMEBOY_WIDTH,
        height: 30,
        borderBottom: '7px solid #01cffe',
        content: '""',
    },

    ':after': {
        position: 'absolute',
        width: GAMEBOY_WIDTH - 75,
        height: 30,
        left: 30,
        borderLeft: '7px solid #01cffe',
        borderRight: '7px solid #01cffe',
        content: '""',
    },
};
const gameboyAnimation = {
    '0%': {
        height: 600,
    },
    '100%': {
        height: GAMEBOY_HEIGHT,
    }
};


const screen = {
    position: 'absolute',
    width: GAMEBOY_WIDTH - 75,
    height: 275, //400
    left: 38,
    top: 65,
    background: '#777',
    borderRadius: '10px 10px 60px 10px',
};
const screenAfter = {
    ':after': {
        position: 'absolute',
        height: 10,
        width: 10,
        left: 17,
        top: 125,
        borderRadius: '100%',
        background: "#B00",
        content: '""',
    },
};
const screenAnimation = {
    '0%': {
        height: 275,
    },
    '100%': {
        height: 450,
    }
};
const screenAfterAnimation = {
    '0%': {
        top: 125,
    },
    '100%': {
        top: 200,
    }
};
const screenAfterAnimate = {
    ':after': {
        position: 'absolute',
        height: 10,
        width: 10,
        left: 17,
        top: 125,
        borderRadius: '100%',
        background: "#B00",
        content: '""',
        animationName: screenAfterAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
}


const display = {
    position: 'absolute',
    width: GAMEBOY_WIDTH - 175,
    height: 225,
    left: '50%',
    marginLeft: -113,
    top: 90,
    background: '#ae9b32',
};
const displayFadeAnimation = {
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0,
    }
};

const controllerShade = {
    position: 'absolute',
    width: 110,
    height: 110,
    top: 365, // 565
    left: 40,
    background: '#0191b2',
    borderRadius: '100%',

    ':before': {
        position: 'absolute',
        height: 110,
        width: 55,
        left: 250,
        background:'#0191b2',
        borderRadius: 50,
        transform: 'rotate(45deg)',
        content: '""',
    },

    ':after': {
        position: 'absolute',
        height: 55,
        width: 10,
        top: 170,
        left: 260,
        background: '#0191b2',
        borderRadius: 10,
        transform: 'rotate(-45deg)',
        boxShadow: 
            `15px 0 #0191b2, 
            30px 0 #0191b2,
            45px 0 #0191b2,
            60px 0 #0191b2,
            75px 0 #0191b2`,
        content: '""',
    },
};
const controllerShadeAnimation = {
    '0%': {
        top: 365,
    },
    '100%': {
        top: 565,
    }
};

const dpad = {
    position: 'absolute',
    width: 30,
    height: 100,
    top: 370, // 570
    left: 80,
    background: '#444',
    borderRadius: '7px',
    
    ':before': {
        position: 'absolute',
        width: 100,
        height: 30,
        top: 35,
        left: -35,
        background: '#444',
        borderRadius: '7px',
        content: '""',
    },

    ':after': {
        position: 'absolute',
        width: 30,
        height: 30,
        top: 35,
        background: '#333',
        borderRadius: '100%',
        content: '""',
    },
};
const dpadAnimation = {
    '0%': {
        top: 370,
    },
    '100%': {
        top: 570,
    }
};

const btns = {
    position: 'absolute',
    height: 45,
    width: 45,
    top: 378, // 578
    left: 315,
    borderRadius: '100%',
    background: '#a93671',
    boxShadow: '-40px 40px #a93671',

    ':before': {
        position: 'absolute',
        height: 10,
        width: 50,
        top: 120,
        left: -170,
        background: '#444',
        borderRadius: 10,
        boxShadow: '70px 0 #444',
        content: '""'
    },
};
const btnsAnimation = {
    '0%': {
        top: 378,
    },
    '100%': {
        top: 579,
    }
};

export const styles = StyleSheet.create({
    gameboy,
    gameboyAnimate: {
        ...gameboy,
        animationName: gameboyAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    screen: {
        ...screen,
        ...screenAfter,
    },
    screenAnimate: {
        ...screen,
        ...screenAfterAnimate,
        animationName: screenAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    display,
    displayFade: {
        ...display,
        animationName: displayFadeAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    controllerShade,
    controllerShadeAnimate: {
        ...controllerShade,
        animationName: controllerShadeAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    dpad,
    dpadAnimate: {
        ...dpad,
        animationName: dpadAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    btns,
    btnsAnimate: {
        ...btns,
        animationName: btnsAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    }
});
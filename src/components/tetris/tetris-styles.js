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
        left: 37,
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
const gameboyReverseAnimation = {
    '0%': {
        height: GAMEBOY_HEIGHT,
    },
    '100%': {
        height: 600,
    }
}

const screen = {
    position: 'absolute',
    width: GAMEBOY_WIDTH - 75,
    height: 275,
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
const screenReverseAnimation = {
    '0%': {
        height: 450,
    },
    '100%': {
        height: 275,
    }
}
const screenAfterAnimation = {
    '0%': {
        top: 125,
    },
    '100%': {
        top: 200,
    }
};
const screenAfterReverseAnimation = {
    '0%': {
        top: 200,
    },
    '100%': {
        top: 125,
    }
}
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
const screenAfterReverseAnimate = {
    ':after': {
        position: 'absolute',
        height: 10,
        width: 10,
        left: 17,
        top: 200,
        borderRadius: '100%',
        background: "#B00",
        content: '""',
        animationName: screenAfterReverseAnimation,
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
    boxShadow: 'inset 3px 3px rgba(0, 0, 0, 0.1)',
};
const displayFadeAnimation = {
    '0%': {
        opacity: 1,
    },
    '100%': {
        opacity: 0,
    }
};
const displayAnimation = {
    '0%': {
        opacity: 0,
    },
    '100%': {
        opacity: 1,
    }
}

const controllerShade = {
    position: 'absolute',
    width: 110,
    height: 110,
    top: 365,
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
const controllerShadeReverseAnimation = {
    '0%': {
        top: 565,
    },
    '100%': {
        top: 365,
    },
}

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
const dpadReverseAnimation = {
    '0%': {
        top: 570,
    },
    '100%': {
        top: 370,
    }
}

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
const btnsReverseAnimation = {
    '0%': {
        top: 579,
    },
    '100%': {
        top: 378,
    }
}

const modal = {
    position: 'absolute',
    height: 410,
    width: 250,
    top: 130,
    // left: '50%',
    marginLeft: -123,
    background: '#01b4dd',
    border: '1px solid rgb(204, 204, 204)',
    borderRadius: 10,
    overflow: 'hidden',
}

const modalFrame = {
    position: 'absolute',
    height: 410,
    width: 200,
    left: 24,
    borderLeft: '7px solid #01cffe',
    borderRight: '7px solid #01cffe',
    
    ':after': {
        position: 'absolute',
        width: 250,
        height: 350,
        top: 30,
        left: -31,
        background: '#01b4dd',
        borderTop: '7px solid #01cffe',
        borderBottom: '7px solid #01cffe',
        content: '""',
    },
}

const modalBtn = {
    position: 'absolute',
    fontSize: '1.25em',
    fontWeight: 500,
    textAlign: 'center',
    cursor: 'pointer',
    height: 40,
    width: 130,
    left: '50%',
    marginLeft: -65,
    border: 'none',
    borderRadius: 10,
    background: '#a93671',
    color: '#e6e6e6',
    boxShadow: 'inset 0px 0px 5px 3px #74254e',

    ':focus': {
        outline: 'none',
    },

    ':hover': {
        background:'#9b3168'
    },

    ':active': {
        boxShadow: 'inset 0px 0px 5px 5px #e09ec0',
        transform: 'translateY(2px)',
        color: '#f9ecf2',
    }

}
const playAgainBtn = {
    ...modalBtn,
    top: 110,
}
const homeBtn = {
    ...modalBtn,
    top: 170,
}
const statsBtn = {
    ...modalBtn,
    top: 230,
}

export const styles = StyleSheet.create({
    gameboy,
    gameboyAnimate: {
        ...gameboy,
        animationName: gameboyAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards', 
    },
    gameboyReverseAnimate: {
        ...gameboy,
        height: GAMEBOY_HEIGHT,
        animationName: gameboyReverseAnimation,
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
    screenReverseAnimate: {
        ...screen,
        height: 450,
        ...screenAfterReverseAnimate,
        animationName: screenReverseAnimation,
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
    displayAnimate: {
        ...display,
        animationName: displayAnimation,
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
    controllerShadeReverseAnimate: {
        ...controllerShade,
        top: 565,
        animationName: controllerShadeReverseAnimation,
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
    dpadReverseAnimate: {
        ...dpad,
        top: 570,
        animationName: dpadReverseAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },

    btns,
    btnsAnimate: {
        ...btns,
        animationName: btnsAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    btnsReverseAnimate: {
        ...btns,
        top: 579,
        animationName: btnsReverseAnimation,
        animationDuration: '3s',
        animationFillMode: 'forwards',
    },
    
    modal,
    modalFrame,
    playAgainBtn,
    homeBtn,
    statsBtn,
});
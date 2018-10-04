import config from '../../tetrisUtility/config';
import { StyleSheet } from 'aphrodite/no-important';
const [WIDTH, HEIGHT] = config.gameboySize;
const GAMEBOY_BLOCK = config.gameboyBlock;
const GAMEBOY_HEIGHT = GAMEBOY_BLOCK * HEIGHT;
const GAMEBOY_WIDTH = GAMEBOY_BLOCK * WIDTH;

export const styles = StyleSheet.create({
    gameboy: {
        position: 'relative',
        margin: '50px auto',
        height: GAMEBOY_HEIGHT,
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
    },

    screen: {
        position: 'absolute',
        width: GAMEBOY_WIDTH - 75,
        height: 450,
        left: 38,
        top: 65,
        background: '#777',
        borderRadius: '10px 10px 60px 10px',

        ':after': {
            position: 'absolute',
            height: 10,
            width: 10,
            left: 17,
            top: 200,
            borderRadius: '100%',
            background: "#B00",
            content: '""',
        }
    },

    controllerShade: {
        position: 'absolute',
        width: 110,
        height: 110,
        top: 565,
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
        }
    },

    dpad: {
        position: 'absolute',
        width: 30,
        height: 100,
        top: 570,
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
    },
    
    btns: {
        position: 'absolute',
        height: 45,
        width: 45,
        top: 578,
        left: 315,
        borderRadius: '100%',
        background: '#A93671',
        boxShadow: '-40px 40px #A93671',

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
    },
});
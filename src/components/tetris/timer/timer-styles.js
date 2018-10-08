import { StyleSheet } from 'aphrodite/no-important';

const timerBoard = {
    position: 'relative', 
    height: 200,
    width: 200,
    left: 450,
    top: -150,
    background: '#01b4dd',
    borderRadius: 10,
    boxShadow: '7px 7px rgba(0, 0, 0, 0.1)',
}

const frames = {
    position: 'absolute',
    height: 200,
    width: 160,
    left: 20,
    borderLeft: '7px solid #01cffe',
    borderRight: '7px solid #01cffe',

    ':after': {
        position: 'absolute',
        height: 170,
        width: 200,
        left: -27,
        top: 15,
        borderTop: '7px solid #01cffe',
        borderBottom: '7px solid #01cffe',
        content: '""',
    },
}

const title = {
    position: 'absolute',
    height: 40,
    width: 130,
    left: '50%',
    top: 30,
    marginLeft: -65,
    fontSize: '1.25em',
    fontWeight: 500,
    borderRadius: 10,
    background: '#a93671',
    color: '#fff',
    boxShadow: 'inset 0px 0px 5px 3px #74254e',
    textAlign: 'center',
}

const bevel = {
    position: 'absolute',
    height: 80,
    width: 130,
    top: 80,
    left: '50%',
    marginLeft: -65,
    borderRadius: 10,
    background: '#545454',
    color: '#ffffff',
    fontSize: '1.25em',
    fontWeight: 500,
    boxShadow: 'inset 0px 0px 5px 3px #3b3b3b',
    textAlign: 'center',
    lineHeight: 3.7,
}

export const styles = StyleSheet.create({
    timerBoard,
    frames,
    title,
    bevel,
});
const btn = {
    position: 'absolute',
    cursor: 'pointer',
    height: 106,
    width: 206,
    padding: 0,
    left: '50%',
    marginLeft: -103,
    top: 500,
    border: '3px solid #a6a6a6',
    outlineStyle: 'none',
    ':active': {
        transform: 'translateY(4px)',
    },
}

const img = {
    height: 100,
    width: 200,
    ':hover': {
        opacity: '.9',
    },
}

const hidden = {
    visibility: 'hidden',
}

export default {
    button: {
        ...btn,
    },
    image: {
        ...img,
    },
    buttonHidden: {
        ...btn,
        ...hidden,
    },
    imageHidden: {
        ...img,
        ...hidden,
    }
}
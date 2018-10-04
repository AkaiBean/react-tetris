const svg = {
    position: 'absolute',
    height: 400,
    width: 400,
    left: '50%',
    marginLeft: -200,
}

const homePage = {
    position: 'absolute',
    backgroundColor: '#434343',
    top: 275,
    height: 600,
    width: 400,
    left: '50%',
    marginLeft: -200,
    borderRadius: 25,
}

const corners = {
    position: 'absolute',
    backgroundColor: '#434343',
    top: 50,
    height: 50,
    width: 400,
    left: '50%',
    marginLeft: -200,
    borderRadius: 25,
}

const hidden = {
    visibility: 'hidden',
}

export default {
    svg,
    homePage,
    corners,
    svgHidden: {
        ...svg,
        ...hidden,
    },
    homePageHidden: {
        ...homePage,
        ...hidden,
    },
    cornersHidden: {
        ...corners,
        ...hidden,
    }


}
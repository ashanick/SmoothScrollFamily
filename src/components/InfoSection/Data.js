// Source of images is undraw.svg, source of video is pexel.com

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Iyengar Genealogy',
    headLine: 'A small community with a large footprint',
    description: 'Curious if you are related to an Iyengar you have never met? Come onboard and check out our collection of history',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../Images/svg-1.svg'),
    routePath: "/members",
    alt: 'Iyengars1',
    dark: true,
    dark2: false,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Discover Iyengars',
    headLine: 'Generations spanning back to 1880s',
    description: 'Curious if you are related to an Iyengar you have never met? Come onboard and check out our collection of history',
    buttonLabel: 'Find Connections',
    imgStart: true,
    img: require('../../Images/Shanka.png'),
    routePath: "/members",
    alt: 'Iyengars2',
    darkText: true,
    dark: false,
    dark2: true,
    primary: false,
}
export const homeObjThree = {
    id: 'templetowns',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Temple Towns',
    headLine: 'Banks of the Cauvery',
    description: 'From Tanjavur to Kumbakonam and from all the way to Karnataka and West Bengal',
    buttonLabel: 'Learn More',
    imgStart: false,
    img: require('../../Images/svg-3.svg'),
    routePath: "/templetowns",
    alt: 'paper',
    dark: true,
    dark2: false,
    primary: true,
}

export const homeObjFour = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join Our Historical Journey',
    headLine: 'Add new members/stories',
    description: 'Widen the already large existing web of Iyengars +++',
    buttonLabel: 'Get Started',
    imgStart: true,
    img: require('../../Images/svg-3.svg'),
    routePath: "/signin",
    alt: 'paper',
    dark: false,
    dark2: true,
    primary: false,
}
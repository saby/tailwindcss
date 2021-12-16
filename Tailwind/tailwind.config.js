module.exports = {
    prefix: 'tw-',
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        width: {
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '3/4': '75%',
            full: '100%',
            screen: '100vw'
        },
        height: {
            full: '100%',
            screen: '100vh'
        },
        screens: {
            sm: {min: "640px"},
            md: {min: "768px"},
            lg: {min: "1024px"}
        }
    },
    variants: {
        extend: {},
        appearance: []
    },
    corePlugins: [
        'flex',
        'flexDirection',
        'flexGrow',
        'flexShrink',
        'flexWrap',
        'container',
        'display',
        'float',
        'gridAutoColumns',
        'gridAutoFlow',
        'gridAutoRows',
        'gridColumn',
        'gridColumnEnd',
        'gridColumnStart',
        'gridRow',
        'gridRowEnd',
        'gridRowStart',
        'gridTemplateColumns',
        'gridTemplateRows',
        'clear',
        'overflow',
        'overscrollBehavior',
        'position',
        'visibility',
        'zIndex',
        'order',
        'justifyContent',
        'justifyItems',
        'justifySelf',
        'alignContent',
        'alignItems',
        'alignSelf',
        'placeItems',
        'placeSelf',
        'cursor',
        'wordBreak',
        'height',
        'width'
    ]
}

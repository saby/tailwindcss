module.exports = {
    prefix: 'tw-',
    darkMode: 'media',
    theme: {
        width: {
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '3/4': '75%',
            full: '100%',
            screen: '100vw',
            auto: 'auto'
        },
        height: {
            full: '100%',
            screen: '100vh',
            auto: 'auto'
        },
        screens: {
            sm: {min: "640px"},
            md: {min: "768px"},
            lg: {min: "1024px"},
            xl: {min: "1280px"}
        }
    },
    variants: {
        extend: {},
        appearance: []
    },

    // Plugins from the list
    // https://tailwindcss.com/docs/configuration#core-plugins
    corePlugins: [
        'alignContent',
        'alignItems',
        'alignSelf',
        'clear',
        'container',
        'cursor',
        'display',
        'flex',
        'flexDirection',
        'flexGrow',
        'flexShrink',
        'flexWrap',
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
        'height',
        'justifyContent',
        'justifyItems',
        'justifySelf',
        'order',
        'overflow',
        'overscrollBehavior',
        'placeItems',
        'placeSelf',
        'position',
        'textOverflow',
        'visibility',
        'width',
        'wordBreak',
        'zIndex',
        'minWidth',
        'minHeight',
    ],

    // TODO: remove after fixing usage of tailwind classes in ts{x}, wml and tmpl files.
    // https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
    safelist: [
        {
            pattern: /./,
            variants: ['sm', 'md', 'lg', 'xl']
        },
    ]
}

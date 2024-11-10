/**
 * Общая базовая конфигурация (пресет) для генерации Tailwind классов, которая используется
 * - в saby/builder для динамической сборки;
 * - в saby/tailwindcss для статической сборки;
 *
 * Здесь размещаются все настройки, которые необходимы и для статической, и для динамической сборки.
 *
 * С ОСТОРОЖНОСТЬЮ! Опции конфигурации объединяются по-разному.
 * https://tailwindcss.com/docs/presets#merging-logic-in-depth
 */

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
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        }
    },
    variants: {
        extend: { },
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
    ]
};

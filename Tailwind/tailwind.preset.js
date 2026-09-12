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
const FLEX_SCALE = {
  DEFAULT: '1',
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
};

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
            lg: '1024px'
        }, 
        flexShrink: FLEX_SCALE,
        flexGrow: FLEX_SCALE,
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
        'boxSizing'
    ],
    plugins: [
        ({ addUtilities }) => {
            addUtilities({
              ".hidden-important": {
                display: "none !important",
              },
              ".invisible-important": {
                visibility: "hidden !important",
              },
              ".absolute-important": {
                position: "absolute !important",
              },
              ".m-0": {
                margin: "0",
              },
            });
        }
    ]
};

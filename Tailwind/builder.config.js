/**
 * Конфигурация для генерации непустого динамического css-файла, который размещается в обрабатываемом модуле.
 *
 * Процессом генерации управляет saby/builder.
 *
 * Здесь указываются только те опции, которые необходимы только для генерации динамического файла.
 * Если опция должна распространяться и на статически генерируемый css-файл, ее следует разместить в base.preset.js.
 *
 * В данном файле запрещено использовать require для загрузки плагинов! Это необходимо делать в saby/builder.
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
        },
        extend: {
            containers: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
            },
            gap: {
                '3xs': 'var(--offset_3xs)',
                '2xs': 'var(--offset_2xs)',
                xs: 'var(--offset_xs)',
                s: 'var(--offset_s)',
                st: 'var(--offset_st)',
                m: 'var(--offset_m)',
                l: 'var(--offset_l)',
                xl: 'var(--offset_xl)',
                '2xl': 'var(--offset_2xl)',
                '3xl': 'var(--offset_3xl)',
            }
        }
    },
    variants: {
        extend: { },
        appearance: []
    },
    corePlugins: {
        preflight: false, // disable preflight
    }
};

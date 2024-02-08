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
    presets: [
        require('./base.preset.js')
    ],

    // Plugins from the list
    // https://tailwindcss.com/docs/configuration#core-plugins
    corePlugins: {
        backgroundColor: true,
        backgroundOpacity: true,
        backgroundImage: true,
        backgroundSize: true,
        backgroundAttachment: true,
        backgroundClip: true,
        backgroundPosition: true,
        backgroundRepeat: true,
        backgroundOrigin: true,

        borderWidth: true,
        borderStyle: true,
        borderColor: true,
        borderOpacity: true,
        borderRadius: true, // .tw-rounded-x classes

        boxSizing: true, // .tw-box-x classes
        fontFamily: true, // .tw-font-sans .tw-font-mono classes
        fontSize: true, // .tw-text-sm and similar classes
        fontWeight: true, // .tw-font-x classes
        gap: true, // .tw-gap-x classes based on spacing
        inset: true, // placement classes .tw-top-x based on spacing + some more
        lineHeight: true, // .tw-leading-x classes
        margin: true, // .tw-m-x classes based on spacing
        maxHeight: true, // tw-max-height classes .tw-max-h-x based on spacing + some more
        maxWidth: true, // tw-max-width classes .tw-max-w-x based on spacing + some more
        minHeight: true, // tw-min-height classes .tw-min-h-x based on spacing + some more
        minWidth: true, // tw-min-width classes .tw-min-w-x based on spacing + some more
        opacity: true, // tw-opacity-x classes
        padding: true, // .tw-p-x classes based on spacing
        pointerEvents: true, //.tw-pointer-events-none .tw-pointer-events-auto
        preflight: false, // disable preflight

        textAlign: true, // .tw-text-x classes
        textTransform: true, // tw-uppercase, .tw-capitalize
        textOverflow: true,
        textIndent: true,
        textColor: true,
        textOpacity: true,
        textDecoration: true,
        textDecorationColor: true,
        textDecorationStyle: true,
        textDecorationThickness: true,
        textUnderlineOffset: true,

        userSelect: true, // .tw-select-none classes
        verticalAlign: true, // .tw-align-x classes
        whitespace: true, // tw-whitespace-x classes
    },
    theme: {
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
    }
};

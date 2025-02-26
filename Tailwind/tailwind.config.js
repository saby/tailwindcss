/**
 * Конфигурация для генерации статического css-файла, который размещается в модуле Tailwind.
 *
 * Также этот файл копируется в корень проектов!
 *
 * Здесь указываются только те опции, которые необходимы только для генерации статического файла.
 * Если опция должна распространяться и на динамически генерируемый css-файл, ее следует разместить в base.preset.js
 *
 * С ОСТОРОЖНОСТЬЮ! Опции конфигурации объединяются по-разному.
 * https://tailwindcss.com/docs/presets#merging-logic-in-depth
 */

module.exports = {
    presets: [
        require('./base.preset.js')
    ],

    // TODO: remove after fixing usage of tailwind classes in ts{x}, wml and tmpl files.
    // https://tailwindcss.com/docs/content-configuration#class-detection-in-depth
    safelist: [
        {
            pattern: /./,
            variants: ['sm', 'md', 'lg']
        },
    ]
};

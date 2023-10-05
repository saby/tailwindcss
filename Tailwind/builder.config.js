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
        "margin": true,
        "padding": true,
        "inset": true
    }
};

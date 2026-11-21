module.exports = {
    plugins: [
        require('tailwindcss')('Tailwind/tailwind.config.js'),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        })
    ]
}

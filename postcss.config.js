module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-cssnext'),
        require('stylelint-webpack-plugin')
    ]
}
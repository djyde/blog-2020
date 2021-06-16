module.exports = {
  darkMode: 'class',
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 1
    }),
    require('tailwindcss')({
      purge: [
        './src/**/*.njk',
        './src/**/*.pcss'
      ],
      theme: {
        extend: {
          spacing: {
            '144': '36rem',
            'container': '36rem'
          }
        },
        colors: require('@egoist/md-colors')
      }
    })
  ]
}
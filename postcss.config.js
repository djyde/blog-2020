module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')({
      purge: process.env.NODE_ENV === 'minify' ? [
        './src/**/*.njk',
        './src/**/*.pcss'
      ] : [],
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
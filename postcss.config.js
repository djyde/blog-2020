module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')({
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
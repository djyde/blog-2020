module.exports = {
  plugins: [
    require('autoprefixer'),
    require('tailwindcss')({
      theme: {
        extend: {
          spacing: {
            'container': '36rem'
          }
        },
        colors: require('@egoist/md-colors')
      }
    })
  ]
}
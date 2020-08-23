const pluginRss = require('@11ty/eleventy-plugin-rss')

const dayjs = require('dayjs')

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats([
    'css',
    'md',
    'njk'
  ])

  eleventyConfig.addNunjucksShortcode('formatDate', (date, format) => {
    if (!format) {
      return dayjs(date).format('YYYY-MM-DD')
    } else {
      return dayjs(date).format(format)
    }
  })

  eleventyConfig.addPlugin(pluginRss);
}
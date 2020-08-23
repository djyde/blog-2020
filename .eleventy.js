const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSEO = require("eleventy-plugin-seo");

const dayjs = require('dayjs')

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats([
    'css',
    'md',
    'njk'
  ])

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Randy's Blog",
    author: 'Randy Lu',
    twitter: 'randyloop'
  });


  eleventyConfig.addNunjucksShortcode('formatDate', (date, format) => {
    if (!format) {
      return dayjs(date).format('YYYY-MM-DD')
    } else {
      return dayjs(date).format(format)
    }
  })

  eleventyConfig.addPlugin(pluginRss);
}
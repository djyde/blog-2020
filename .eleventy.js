const pluginRss = require('@11ty/eleventy-plugin-rss')
const pluginSEO = require("eleventy-plugin-seo");

const dayjs = require('dayjs')

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats([
    'css',
    'md',
    'njk',
    'ico',
  ])

  eleventyConfig.addPlugin(pluginSEO, {
    title: "Randy's Blog",
    author: 'Randy Lu',
    description: `Randy is blogging about life, tech and music.`,
    twitter: 'randyloop',
    url: 'https://lutaonan.com',
    image: 'https://gbstatic.djyde.com/assets/Snapseed%204.jpg?x-oss-process=style/80'
  });


  eleventyConfig.addNunjucksShortcode('formatDate', (date, format) => {
    if (!format) {
      return dayjs(date).format('YYYY-MM-DD')
    } else {
      return dayjs(date).format(format)
    }
  })

  const markdownIt = require("markdown-it");
  const options = {
    html: true
  }
  const markdownItLib = markdownIt(options).use(require('markdown-it-anchor')).use(require('markdown-it-table-of-contents'), {
    includeLevel: [1, 2, 3, 4],
    containerHeaderHtml: `<div class="toc-container-header">索引</div>`
  })

  eleventyConfig.setLibrary('md', markdownItLib)

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addPassthroughCopy("_redirects");
}
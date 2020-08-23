const postcss = require('postcss')
const path = require('path')
const fs = require('fs')

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
}
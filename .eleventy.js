const postcss = require('postcss')
const path = require('path')
const fs = require('fs')

module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats([
    'css',
    'md',
    'njk'
  ])
}
const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPlugin(pluginWebc, {
    components: "_includes/**/*.webc",
  });
};

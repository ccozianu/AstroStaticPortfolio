module.exports = function (eleventyConfig) {
  // Pass through the CSS file to the output directory
  eleventyConfig.addPassthroughCopy("style.css");

  eleventyConfig.setServerOptions({
    host: "0.0.0.0"
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    }
  };
};

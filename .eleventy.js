const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(pluginRss);

  // Markdown
  const md = markdownIt({ html: true, linkify: true, typographer: true });
  md.use(markdownItAnchor, {
    permalink: false,
    level: [2, 3],
    slugify: (s) =>
      s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  });
  eleventyConfig.setLibrary("md", md);

  // --------------- Collections ---------------

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/blog/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("wiki", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/wiki/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  eleventyConfig.addCollection("glossary", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/glossary/*.md")
      .sort((a, b) => a.data.title.localeCompare(b.data.title));
  });

  eleventyConfig.addCollection("pages", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/*.md");
  });

  // --------------- Filters ---------------

  eleventyConfig.addFilter("year", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "LLLL d, yyyy"
    );
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO();
  });

  eleventyConfig.addFilter("truncate", (str, len) => {
    if (!str) return "";
    if (str.length <= len) return str;
    return str.slice(0, len).trimEnd() + "…";
  });

  eleventyConfig.addFilter("stripHtml", (str) => {
    if (!str) return "";
    return str.replace(/<[^>]+>/g, "");
  });

  eleventyConfig.addFilter("slugify", (str) => {
    if (!str) return "";
    return str
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  });

  eleventyConfig.addFilter("latest", (arr, n) => {
    if (!arr) return [];
    return arr.slice(0, n);
  });

  eleventyConfig.addFilter("backlinksTo", (collection, url) => {
    if (!collection || !url) return [];
    return collection.filter(
      (item) =>
        item.url !== url &&
        item.templateContent &&
        item.templateContent.includes('href="' + url + '"')
    );
  });

  // --------------- Shortcodes ---------------

  eleventyConfig.addPairedShortcode("callout", (content, type = "info") => {
    return `<div class="callout callout--${type}">\n${md.render(content)}\n</div>`;
  });

  eleventyConfig.addShortcode("stat", (value, label) => {
    return `<div class="stat"><span class="stat__value">${value}</span><span class="stat__label">${label}</span></div>`;
  });

  // --------------- Passthrough ---------------

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("admin");

  // --------------- Config ---------------

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"],
  };
};

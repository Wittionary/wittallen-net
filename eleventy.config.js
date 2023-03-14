const htmlmin = require("html-minifier");

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
module.exports = function (eleventyConfig) {
    // minify HTML
    eleventyConfig.addTransform("htmlmin", function (content) {
        if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    // inclusive language linter
    eleventyConfig.addLinter("inclusive-language", function (content, inputPath, outputPath) {
        let words = "simply,obviously,basically,of course,clearly,just,everyone knows,however,easy".split(",");

        if (inputPath.endsWith(".md")) {
            for (let word of words) {
                let regexp = new RegExp("\\b(" + word + ")\\b", "gi");
                if (content.match(regexp)) {
                    console.warn(`Inclusive Language Linter (${inputPath}) Found: ${word}`);
                }
            }
        }
    });

    // notes or digital garden copy-paste section
    const markdownIt = require('markdown-it');
    const markdownItOptions = {
        html: true,
        linkify: true
    };

    const md = markdownIt(markdownItOptions)
        .use(require('markdown-it-footnote'))
        .use(require('markdown-it-attrs'))
        .use(function (md) {
            // Recognize Mediawiki links ([[text]])
            md.linkify.add("[[", {
                validate: /^\s?([^\[\]\|\n\r]+)(\|[^\[\]\|\n\r]+)?\s?\]\]/,
                normalize: match => {
                    const parts = match.raw.slice(2, -2).split("|");
                    parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
                    match.text = (parts[1] || parts[0]).trim();
                    match.url = `/notes/${parts[0].trim()}/`;
                }
            })
        })

    eleventyConfig.addFilter("markdownify", string => {
        return md.render(string)
    })

    eleventyConfig.setLibrary('md', md);
    eleventyConfig.addCollection("notes", function (collection) {
        return collection.getFilteredByGlob(["_src/notes/**/*.md", "index.html"]);
    });

    eleventyConfig.addPassthroughCopy('assets');

    // directory configs
    return {
        dir: {
            input: '_src',
            output: '_site',
            includes: '../_includes',
            layouts: '../_layouts'
        }
    };
};


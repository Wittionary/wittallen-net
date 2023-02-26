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

    // directory configs
    return {
        dir: {
            input: '_src',
            output: '_site',
            includes: '../_includes'
        }
    };
};


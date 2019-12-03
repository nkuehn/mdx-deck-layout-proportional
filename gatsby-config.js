const proj = require("./package.json").name;

module.exports = {
  pathPrefix: `/${proj}`,
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        cli: true,
        contentPath: "decks"
      }
    }
  ]
};

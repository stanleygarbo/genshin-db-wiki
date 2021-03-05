/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const characters = require('./src/content/characters.json')
const articles = require('./src/content/articles.json')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const CharacterPageTemplate = path.resolve(`./src/templates/Character.js`)
    const ArticlePageTemplate = path.resolve(`./src/templates/Article.js`)


    characters.forEach((character) => {
        createPage({
          path: `/character/${character.name}`,
          component: CharacterPageTemplate,
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: character.name,
          },
        })
    })
    articles.forEach(article=>{
      createPage({
        path: `/article/${article.slug}`,
        component: ArticlePageTemplate,
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: article.slug,
        },
      })
    })
}
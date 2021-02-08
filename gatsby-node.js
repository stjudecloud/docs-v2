/**
import getFileContributors from './src/utils/github';
import getFileContributors from './src/utils/github';
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { getFileContributors } = require(`./src/utils/github`)

/**
 * Borrowed from https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-filesystem/src/create-file-path.js#L4-L27
 * as they don't export this by default.
 */
function findFileNode({ node, getNode }) {
  // Find the file node.
  let fileNode = node

  let whileCount = 0
  while (
    fileNode.internal.type !== `File` &&
    fileNode.parent &&
    getNode(fileNode.parent) !== undefined &&
    whileCount < 101
  ) {
    fileNode = getNode(fileNode.parent)

    whileCount += 1
    if (whileCount > 100) {
      console.log(
        `It looks like you have a node that's set its parent as itself`,
        fileNode
      )
    }
  }

  return fileNode
}

const createFileRelativePath = ({ node, getNode }) => {
  // Find the File node
  const fileNode = findFileNode({ node, getNode })
  if (!fileNode) return undefined

  const relativePath = slash(fileNode.relativePath)
  return path.posix.join(`/`, relativePath)
}

/**
 * Adds a `slug` property to each of the MarkdownRemark
 * node types. This ultimately determines where the
 * path to each Markdown file lives on the site.
 */
exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const relativeFilepath = "/docs" + createFileRelativePath({ node, getNode })
    const slug = "/docs" + createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `relativeFilepath`,
      value: relativeFilepath,
    })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })

    if (process.env.GITHUB_TOKEN) {
      const contributors = await getFileContributors(relativeFilepath)
      createNodeField({
        node,
        name: `contributors`,
        value: contributors,
      })
    }
  }
}

/**
 * Tap into the `createPages` API to generate one page per
 * Markdown file parsed. Note that any variables passed into
 * the `context` parameter below are also available in the
 * GraphQL query on each page.
 */
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(result.errors)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/docs/doc.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

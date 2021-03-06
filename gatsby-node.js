// @ts-check
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { createFilePath } = require(`gatsby-source-filesystem`);
const { parse, sep } = require('path');

exports.onCreateNode = (params) => {
  let { node, actions, getNode, basePath} = params

  if (node.internal.type === `Mdx`) {
    const { createNodeField } = actions
    const dirArr = parse(node.fileAbsolutePath).dir.split(sep);

    const dir = dirArr[dirArr.length - 1]
    createNodeField({
      name: `dir`,
      node,
      value: dir,
    });


    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      name: `slug`,
      node,
      value: `/${dir}${slug}`,
    });
  }
};

const addDirField = ({ node, actions, getNode, basePath}) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    let dir = parse(node.fileAbsolutePath).dir.split(sep);

    const value = dir[dir.length - 1]
    createNodeField({
      name: `dir`,
      node,
      value,
    });
  }
};
const addSlugField = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
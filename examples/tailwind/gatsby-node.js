const { onCreateNode } = require('gatsby-theme-mdx-blog');
exports.onCreateNode = ({ node, actions, loaders, getNode }) => {
  onCreateNode({ node, actions, getNode });
};

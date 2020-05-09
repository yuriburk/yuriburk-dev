const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({
      node,
      getNode,
    });
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const separtorIndex = slug.indexOf('--') ? slug.indexOf('--') : 0;
    const shortSlugStart = separtorIndex ? separtorIndex + 2 : 0;

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: `${separtorIndex ? '/' : ''}${slug.substring(shortSlugStart)}`,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: separtorIndex ? slug.substring(1, separtorIndex) : '',
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const indexTemplate = path.resolve('src/templates/index.tsx');
    const postTemplate = path.resolve('src/templates/Post/index.tsx');
    const tagTemplate = path.resolve('src/templates/Tag/index.tsx');
    const categoryTemplate = path.resolve('src/templates/Category/index.tsx');
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  id
                  fields {
                    slug
                    prefix
                    source
                  }
                  frontmatter {
                    title
                    image
                    tags
                    category
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        const tagSet = new Set();
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { tags },
            },
          } = edge;

          if (tags && tags !== null) {
            tags.forEach(tag => tagSet.add(tag));
          }
        });

        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tag/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });

        const posts = items.filter(item => item.node.fields.source === 'posts');
        posts.forEach(({ node }, index) => {
          const { slug, source } = node.fields;
          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              source,
            },
          });
        });

        const itemsPerPage = 5;
        paginate({
          createPage,
          items: posts,
          itemsPerFirstPage: itemsPerPage,
          itemsPerPage,
          pathPrefix: '/',
          component: indexTemplate,
        });

        const categories = items
          .filter(item => item.node.frontmatter.category)
          .map(x => {
            const { category } = x.node.frontmatter;
            return category;
          });

        categories.forEach(category =>
          createPage({
            path: `/category/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          }),
        );
      }),
    );
  });
};

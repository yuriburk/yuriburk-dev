import config from '../data/config';
import path from 'path';

export default {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    siteUrl: config.siteUrl,
  },
  plugins: [
    'gatsby-plugin-typescript',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-polished',
    'gatsby-plugin-netlify-cms',
    'netlify-plugin-gatsby-cache',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `Montserrat\:500,600,800`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.resolve(`${__dirname}`, '..', 'content', 'posts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.resolve(`${__dirname}`, '..', 'content', 'images'),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              aliases: {
                sh: 'bash',
                react: 'jsx',
                txt: '',
              },
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        fields: ['title', 'tags', 'description'],
        resolvers: {
          MarkdownRemark: {
            title: node => node.frontmatter.title,
            slug: node => node.frontmatter.slug,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `burk`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        date
                        slug
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Gatsby RSS Feed',
          },
        ],
      },
    },
  ],
};

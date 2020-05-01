import config from '../data/config';

export default {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['500', '800'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}\\..\\content\\posts`,
      },
    },
  ],
};

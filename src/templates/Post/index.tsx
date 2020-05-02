import React from 'react';
import { graphql, Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Container } from './styles';
import { useTheme } from '../../hooks/theme';

interface PostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        tags: string[];
        date: Date;
        description: string;
        featuredImage: {
          childImageSharp: {
            fluid: FluidObject;
          };
        };
      };
      fields: {
        slug: string;
      };
    };
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { dark } = useTheme();
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const { slug } = markdownRemark.fields;
  const {
    title,
    tags,
    date,
    description,
    featuredImage,
  } = markdownRemark.frontmatter;

  return (
    <Layout>
      <Container dark={dark}>
        <SEO title={title} url={slug} description={description} article />
        <h2>{title}</h2>
        <p>
          {tags.map(tag => (
            <Link key={tag} to={`/tag/${_.kebabCase(tag)}`}>
              {tag}
            </Link>
          ))}
        </p>
        <p>{date}</p>
        <div className="content">
          <Img
            style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
            imgStyle={{ objectFit: 'contain' }}
            fluid={featuredImage.childImageSharp.fluid}
            fadeIn={false}
          />
          <ReactMarkdown source={html} escapeHtml={false} />
        </div>
      </Container>
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              aspectRatio
              src
              srcSet
              tracedSVG
              srcWebp
              srcSetWebp
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;

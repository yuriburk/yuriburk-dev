import React from 'react';
import { graphql, Link } from 'gatsby';
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
        image: {
          publicURL: string;
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
  const { title, tags, date, description, image } = markdownRemark.frontmatter;

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
          <div className="flex-center">
            <img src={image.publicURL} alt="post-img" />
          </div>
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
        image {
          publicURL
        }
      }
      fields {
        slug
      }
    }
  }
`;

import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../../components/Layout';
import { Container } from './styles';

interface PostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        tags: string[];
        date: Date;
      };
    };
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { html } = data.markdownRemark;
  const { title, tags, date } = data.markdownRemark.frontmatter;

  return (
    <Layout>
      <Container>
        <h2>{title}</h2>
        <p>
          {tags.map(tag => (
            <Link key={tag} to={`/tag/${_.kebabCase(tag)}`}>
              {tag}
            </Link>
          ))}
        </p>
        <p>{date}</p>
        <div>
          <p className="content">
            <ReactMarkdown source={html} escapeHtml={false} />
          </p>
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
      }
      fields {
        slug
      }
    }
  }
`;

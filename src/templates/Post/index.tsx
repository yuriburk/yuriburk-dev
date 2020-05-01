import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Container } from './styles';

interface PostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        tags: string[];
        date: Date;
        description: string;
      };
      fields: {
        slug: any;
      };
    };
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { markdownRemark } = data;
  const { html } = markdownRemark;
  const { slug } = markdownRemark.fields;
  const { title, tags, date, description } = markdownRemark.frontmatter;

  return (
    <Layout>
      <Container>
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
      }
      fields {
        slug
      }
    }
  }
`;

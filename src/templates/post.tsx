import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';

import Layout from '../components/Layout';

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
      <div
        style={{
          backgroundColor: '#FFF',
          padding: '1.5rem',
          borderRadius: '0.50rem',
          margin: '10px 15px',
        }}
      >
        <h2 style={{ fontSize: '22px', fontWeight: 'bold' }}>{title}</h2>
        <p>
          {tags.map(tag => (
            <Link
              style={{ color: '#000', marginRight: '10px' }}
              key={tag}
              to={`/tag/${_.kebabCase(tag)}`}
            >
              {tag}
            </Link>
          ))}
        </p>
        <p>{date}</p>
        <div className="content">
          <p
            style={{
              lineHeight: 1.5,
              textAlign: 'justify',
              margin: '22px 0px',
            }}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
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

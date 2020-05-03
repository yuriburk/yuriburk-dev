import React from 'react';
import { graphql, Link } from 'gatsby';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown/with-html';
import { FaCircle } from 'react-icons/fa';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Container, PostInfo, Tag } from './styles';
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
      timeToRead: number;
    };
  };
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { dark } = useTheme();
  const { markdownRemark } = data;
  const { html, frontmatter, timeToRead } = markdownRemark;
  const { slug } = markdownRemark.fields;
  const { title, tags, date, description, image } = frontmatter;

  return (
    <Layout>
      <Container dark={dark}>
        <SEO title={title} url={slug} description={description} article />
        <h2>{title}</h2>
        <PostInfo dark={dark}>
          <Tag dark={dark}>
            {tags.map(tag => (
              <Link key={tag} to={`/tag/${_.kebabCase(tag)}`}>
                {tag}
              </Link>
            ))}
          </Tag>
          <FaCircle size={5} />
          <p>{date}</p>
          <FaCircle size={5} />
          <p>{timeToRead} min de leitura</p>
        </PostInfo>
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

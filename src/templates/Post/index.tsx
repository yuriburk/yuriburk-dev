import React from 'react';
import { graphql } from 'gatsby';
import ReactMarkdown from 'react-markdown/with-html';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Container } from './styles';
import { useTheme } from '../../hooks/theme';
import PostInfo from '../../components/PostInfo';

interface PostProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        tags: string[];
        date: Date;
        description: string;
        image: string;
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
        <PostInfo
          title={title}
          tags={tags}
          date={date}
          timeToRead={timeToRead}
          clickable
        />
        <div className="content">
          <div className="flex-center">
            {image && <img src={image} alt="post-img" />}
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
        image
      }
      fields {
        slug
      }
    }
  }
`;

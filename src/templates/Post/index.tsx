import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PostInfo from '../../components/PostInfo';
import Content from '../../components/Content';
import IMarkdownRemark from '../../interfaces/IMarkdownRemark';
import { useTheme } from '../../hooks/theme';
import { Container } from './styles';
import Comment from '../../components/Comment';

interface IPostProps {
  data: IMarkdownRemark;
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { dark } = useTheme();
  const { markdownRemark } = data;
  const { html, frontmatter, timeToRead } = markdownRemark;
  const { title, tags, date, description, image, slug } = frontmatter;

  return (
    <Layout>
      <Container dark={dark}>
        <SEO
          title={title}
          url={slug}
          description={description}
          article
          datePublished={date}
        />
        <PostInfo
          title={title}
          tags={tags}
          date={date}
          timeToRead={timeToRead}
          clickable
        />
        <Content image={image} html={html} />
      </Container>
      <Comment slug={slug} title={title} />
    </Layout>
  );
};

export default Post;

export const pageQuery = graphql`
  query PostPage($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
        description
        image
        slug
      }
    }
  }
`;

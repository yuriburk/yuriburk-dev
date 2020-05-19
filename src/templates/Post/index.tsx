import React from 'react';
import { graphql, navigate } from 'gatsby';

import profile from '../../../content/images/yuriburk.jpg';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PostInfo from '../../components/PostInfo';
import Content from '../../components/Content';
import IMarkdownRemark from '../../interfaces/IMarkdownRemark';
import { useTheme } from '../../hooks/theme';
import Comment from '../../components/Comment';
import SocialsShare from '../../components/Socials/Share';
import { Container, Bottom, Author } from './styles';

interface IPostProps {
  data: IMarkdownRemark;
}

const Post: React.FC<IPostProps> = ({ data }) => {
  const { dark } = useTheme();
  const { markdownRemark } = data;
  const { html, frontmatter, timeToRead } = markdownRemark;
  const {
    title,
    tags,
    date,
    description,
    image,
    smallImage,
    slug,
  } = frontmatter;

  return (
    <Layout>
      <Container dark={dark}>
        <SEO
          title={title}
          url={slug}
          description={description}
          article
          datePublished={date}
          image={image}
          smallImage={smallImage}
        />
        <PostInfo
          title={title}
          tags={tags}
          date={date}
          timeToRead={timeToRead}
          clickable
        />
        <Content image={image} html={html} />
        <Bottom>
          <SocialsShare title={title} slug={slug} />
          <Author onClick={() => navigate('/about')}>
            <img src={profile} alt="Yuri Burk" />
            <h2>Yuri Burk</h2>
          </Author>
        </Bottom>
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
        smallImage
        slug
      }
    }
  }
`;

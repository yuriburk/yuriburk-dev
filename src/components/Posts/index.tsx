import React from 'react';
import { graphql, navigate } from 'gatsby';
import { FaChevronRight } from 'react-icons/fa';

import { Container, Post, Title, ImageContainer } from './styles';
import { useTheme } from '../../hooks/theme';
import PostInfo from '../PostInfo';

interface PostsProps {
  data: any;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const { dark } = useTheme();

  return (
    <Container>
      {edges.map(({ node }: any) => (
        <Post
          dark={dark}
          key={node.fields.slug}
          onClick={() => navigate(node.fields.slug)}
        >
          <ImageContainer url={node.frontmatter.image.publicURL} />
          <div>
            <Title>
              <h2>{node.frontmatter.title}</h2>
              <FaChevronRight />
            </Title>
            <PostInfo
              tags={node.frontmatter.tags}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
            />
            <p>{node.frontmatter.description}</p>
          </div>
        </Post>
      ))}
    </Container>
  );
};

export default Posts;

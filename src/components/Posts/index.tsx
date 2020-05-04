import React from 'react';
import { navigate } from 'gatsby';
import { FaChevronRight } from 'react-icons/fa';

import {
  Container,
  Post,
  ImageContainer,
  InfoContainer,
  TitleContainer,
} from './styles';
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
          {node.frontmatter.image && (
            <ImageContainer>
              <img
                src="https://tender-curran-293ad9.netlify.app/img/posts/icon.png"
                alt="t"
              />
            </ImageContainer>
          )}
          <InfoContainer>
            <TitleContainer>
              <h2>{node.frontmatter.title}</h2>
              <FaChevronRight />
            </TitleContainer>
            <PostInfo
              tags={node.frontmatter.tags}
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
            />
            <p>{node.frontmatter.description}</p>
          </InfoContainer>
        </Post>
      ))}
    </Container>
  );
};

export default Posts;

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
import IAllMarkdownRemark from '../../interfaces/IAllMarkdownRemark';

interface IPostsProps {
  data: IAllMarkdownRemark;
}

const Posts: React.FC<IPostsProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const { dark } = useTheme();

  return (
    <Container>
      {edges.map(({ node }: object) => (
        <Post
          dark={dark}
          key={node.frontmatter.slug}
          onClick={() => navigate(node.frontmatter.slug)}
        >
          {(node.frontmatter.smallImage || node.frontmatter.image) && (
            <ImageContainer>
              <img
                src={node.frontmatter.smallImage ?? node.frontmatter.image}
                alt="post-img"
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

import React from 'react';
import { Link } from 'gatsby';

import { Container, Post } from './styles';
import { useTheme } from '../../hooks/theme';

interface PostsProps {
  data: any;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;
  const { dark } = useTheme();

  const posts = edges.map(({ node }: any) => (
    <Post dark={dark} key={node.fields.slug}>
      <Link to={node.fields.slug}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p className="post-date">{node.frontmatter.date}</p>
      <p>{node.frontmatter.description}</p>
    </Post>
  ));
  return <Container>{posts}</Container>;
};

export default Posts;

import React from 'react';
import { Disqus, CommentCount } from 'gatsby-plugin-disqus';

import config from '../../../data/config';
import { useTheme } from '../../hooks/theme';
import { Container } from './styles';

interface ICommentProps {
  slug: string;
  title: string;
}

const Comment: React.FC<ICommentProps> = ({ slug, title }) => {
  const { dark } = useTheme();

  const disqusConfig = {
    url: `${config.siteUrl}${slug}`,
    identifier: slug,
    title,
  };

  return (
    <Container dark={dark}>
      <CommentCount config={disqusConfig} placeholder="Comentários 😊" />
      <Disqus config={disqusConfig} />
    </Container>
  );
};

export default Comment;

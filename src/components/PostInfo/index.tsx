import React, { useCallback } from 'react';
import { navigate } from 'gatsby';
import { FaCircle } from 'react-icons/fa';
import { kebabCase } from 'lodash';

import { Container, TagContainer, Tag } from './styles';

interface InfoProps {
  tags: string[];
  date: Date;
  timeToRead: number;
  clickable?: boolean;
}

const PostInfo: React.FC<InfoProps> = ({
  tags,
  date,
  timeToRead,
  clickable,
}) => {
  const handleClick = useCallback(
    (tag: string) => {
      if (clickable) {
        navigate(`/tag/${kebabCase(tag)}`);
      }
    },
    [clickable],
  );

  return (
    <Container>
      <TagContainer>
        {tags?.map(tag => (
          <Tag key={tag} clickable={clickable} onClick={() => handleClick(tag)}>
            {tag}
          </Tag>
        ))}
      </TagContainer>
      <FaCircle size={5} />
      <p>{date}</p>
      <FaCircle size={5} />
      <p>{timeToRead} min de leitura</p>
    </Container>
  );
};

export default PostInfo;

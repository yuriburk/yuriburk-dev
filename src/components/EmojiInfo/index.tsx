import React from 'react';

import { Container, Text } from './styles';

interface EmojiInfoProps {
  emoji: {
    text: string;
    ariaLabel: string;
  };
  text: string;
}

const EmojiInfo: React.FC<EmojiInfoProps> = ({ emoji, text }) => (
  <Container>
    <div>
      <span role="img" aria-label={emoji.ariaLabel}>
        {emoji.text}
      </span>
      <span>{text}</span>
    </div>
  </Container>
);

export default EmojiInfo;

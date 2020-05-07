import React, { useCallback } from 'react';
import { IconType } from 'react-icons/lib/cjs';

import { Container } from './styles';

interface SocialIconProps {
  icon: IconType;
  size?: number;
  url: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon: Icon,
  size = 35,
  url,
}) => {
  const handleClick = useCallback(() => window.open(url), [url]);

  return (
    <Container onClick={handleClick}>
      <Icon size={size} />
    </Container>
  );
};

export default SocialIcon;

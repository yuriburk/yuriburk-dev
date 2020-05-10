import React, { useCallback } from 'react';
import { IconType } from 'react-icons/lib/cjs';

import { Container } from './styles';

interface ISocialIconProps {
  icon: IconType;
  url: string;
  size?: number;
  color?: string;
}

const SocialIcon: React.FC<ISocialIconProps> = ({
  icon: Icon,
  size = 35,
  url,
  color,
}) => {
  const handleClick = useCallback(() => {
    const newWindow = window.open(url);

    if (newWindow) {
      newWindow.opener = null;
    }
  }, [url]);

  return (
    <Container color={color} onClick={handleClick}>
      <Icon size={size} />
    </Container>
  );
};

export default SocialIcon;

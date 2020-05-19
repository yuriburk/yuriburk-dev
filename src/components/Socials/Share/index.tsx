import React from 'react';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  LinkedinIcon,
} from 'react-share';

import config from '../../../../data/config';
import { Container } from './styles';

interface ISocialsShare {
  title: string;
  slug: string;
}

const SocialsShare: React.FC<ISocialsShare> = ({ title, slug }) => {
  const url = `${config.siteUrl}${slug}`;

  return (
    <Container>
      <div>
        <h1>
          Compartilhe{' '}
          <span role="img" aria-label="smile">
            😃
          </span>
        </h1>
      </div>
      <div>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon round size={35} />
        </TwitterShareButton>
        <WhatsappShareButton url={url} title={title}>
          <WhatsappIcon round size={35} />
        </WhatsappShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon round size={35} />
        </FacebookShareButton>
        <LinkedinShareButton url={url}>
          <LinkedinIcon round size={35} />
        </LinkedinShareButton>
      </div>
    </Container>
  );
};

export default SocialsShare;

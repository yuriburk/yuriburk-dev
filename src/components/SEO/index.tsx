import React from 'react';
import { Helmet } from 'react-helmet';
import UrlJoin from 'url-join';

import config from '../../../data/config';
import SchemaOrg from './SchemaOrg';
import favicon from '../../../static/favicon.png';

interface ISEOProps {
  title?: string;
  description?: string;
  url?: string;
  article?: boolean;
  datePublished?: Date;
  image?: string;
  smallImage?: string;
}

const SEO: React.FC<ISEOProps> = ({
  title,
  description,
  url,
  article,
  datePublished,
  image,
  smallImage,
}) => {
  const seo = {
    siteTitle: config.siteTitle,
    title: title ? `${title} | ${config.siteTitle}` : config.siteTitle,
    description: description || config.siteDescription,
    image: image
      ? UrlJoin(config.siteUrl, image)
      : UrlJoin(config.siteUrl, config.siteImage),
    smallImage: smallImage
      ? UrlJoin(config.siteUrl, smallImage)
      : UrlJoin(config.siteUrl, config.siteSmallImage),
    url: url ? `${config.siteUrl}${url}` : '',
    datePublished: article ? datePublished : false,
  };

  return (
    <>
      <Helmet title={seo.title}>
        <html lang="pt" />
        <link rel="icon" href={favicon} />
        <meta name="description" content={seo.description} />
        <meta
          name="google-site-verification"
          content={process.env.GATSBY_GOOGLE_SITE_VERIFICATION}
        />
        <meta name="image" content={seo.image} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {article ? (
          <meta property="og:type" content="article" />
        ) : (
          <meta property="og:type" content="website" />
        )}
        <meta property="og:locale" content="pt_BR" />
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.title && <meta property="og:site_name" content={seo.siteTitle} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        <meta property="og:image" content={seo.image} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1290" />
        <meta property="og:image:height" content="759" />
        <meta property="og:image" content={seo.smallImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="256" />
        <meta property="og:image:height" content="256" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
      </Helmet>
      <SchemaOrg
        author={{ name: config.siteTitle }}
        siteUrl={config.siteUrl}
        datePublished={datePublished}
        defaultTitle={seo.title}
        article={!!article}
        description={description}
        image={config.siteSmallImage}
        organization={{
          logo: config.siteLogo,
          name: config.siteTitle,
          url: seo.url,
        }}
        title={seo.title}
        url={seo.url}
      />
    </>
  );
};

export default SEO;

import React from 'react';
import { Helmet } from 'react-helmet';

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
}

const SEO: React.FC<ISEOProps> = ({
  title,
  description,
  url,
  article,
  datePublished,
  image,
}) => {
  const seo = {
    title: title ? `${title} | ${config.siteTitle}` : config.siteTitle,
    description: description || config.siteDescription,
    image: image || `${config.siteUrl}${config.siteImage}`,
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
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
      <SchemaOrg
        author={{ name: config.siteTitle }}
        siteUrl={config.siteUrl}
        datePublished={datePublished}
        defaultTitle={seo.title}
        article={!!article}
        description={description}
        image={config.siteDescription}
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

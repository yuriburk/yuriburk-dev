import React from 'react';
import { Helmet } from 'react-helmet';

interface ISchemaOrgProps {
  author: {
    name: string;
  };
  siteUrl: string;
  datePublished?: Date;
  defaultTitle: string;
  description?: string;
  image: string;
  article: boolean;
  organization: {
    url: string;
    logo: string;
    name: string;
  };
  title: string;
  url: string;
}

const SchemaOrg: React.FC<ISchemaOrgProps> = ({
  author,
  siteUrl,
  datePublished,
  defaultTitle,
  description,
  image,
  article,
  organization,
  title,
  url,
}) => {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ];

  const schema = article
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: `${siteUrl}${image}`,
          },
          description,
          author: {
            '@type': 'Person',
            name: author.name,
          },
          publisher: {
            '@type': 'Organization',
            url: organization.url,
            logo: {
              '@type': 'ImageObject',
              url: organization.logo,
            },
            name: organization.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteUrl,
          },
          datePublished,
        },
      ]
    : baseSchema;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default React.memo(SchemaOrg);

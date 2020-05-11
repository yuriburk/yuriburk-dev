export default interface IMarkdownRemark {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
      tags: string[];
      date: Date;
      description: string;
      image: string;
    };
    fields: {
      slug: string;
    };
    timeToRead: number;
  };
}

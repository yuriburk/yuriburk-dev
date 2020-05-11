export default interface IAllMarkdownRemark {
  allMarkdownRemark: {
    edges: {
      node: {
        fields: {
          slug: string;
        };
        frontmatter: {
          title: string;
          tags: string[];
          date: Date;
          description: string;
          image: string;
        };
        timeToRead: number;
      };
    }[];
  };
}

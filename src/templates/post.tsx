import React from 'react';
import Layout from '../components/Layout';

interface PostProps {
  data: any;
}

const Post: React.FC<PostProps> = ({ data }) => (
  <Layout>
    <p>{/* Aqui vai todo o conteúdo do seu post */}</p>
  </Layout>
);

export default Post;

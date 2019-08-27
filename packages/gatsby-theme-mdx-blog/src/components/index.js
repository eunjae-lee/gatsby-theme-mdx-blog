import React from 'react';
import Layout from './layout';
import ArticleList from './articleList';

export default ({ data }) => {
  return (
    <Layout title={data.site.siteMetadata.title}>
      <ArticleList data={data} />
    </Layout>
  );
};

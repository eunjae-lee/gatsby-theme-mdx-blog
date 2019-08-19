import React from 'react';
import Layout from './layout';

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <pre style={{ whiteSpace: 'pre-wrap' }}>
      {JSON.stringify(data, null, 2)}
    </pre>
  </Layout>
);

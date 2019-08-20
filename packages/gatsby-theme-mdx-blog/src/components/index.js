import React from 'react';
import { Link } from 'gatsby';
import Layout from './layout';

export default ({ data }) => {
  console.log('data', data);
  return (
    <Layout title={data.site.siteMetadata.title}>
      {data.allMdx.edges.map(({ node }) => (
        <article key={node.fields.slug}>
          <h1>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </h1>
          <footer>
            <p>{node.frontmatter.date}</p>
          </footer>
        </article>
      ))}
    </Layout>
  );
};

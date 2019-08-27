import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, author },
      },
    }) => (
      <h1 className="p-8 text-lg text-gray-800">
        <Link to="/">{author}</Link>
      </h1>
    )}
  />
);

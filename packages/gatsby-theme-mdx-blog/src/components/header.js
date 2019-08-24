import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

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
      <header>
        <p>
          {title} by {author}
        </p>
      </header>
    )}
  />
);

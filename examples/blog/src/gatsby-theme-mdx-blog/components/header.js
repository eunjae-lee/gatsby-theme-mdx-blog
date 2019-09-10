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
            description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { title, author, description },
      },
    }) => (
      <header>
        <h1>
          {title} by <Link to="/about">{author}</Link>
        </h1>
        <p>{description}</p>
      </header>
    )}
  />
);

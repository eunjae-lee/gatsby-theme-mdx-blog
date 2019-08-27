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
          {title} by {author} (2)
        </p>
        <div class="md:flex bg-white rounded-lg p-6">
          <div class="text-center md:text-left">
            <h2 class="text-lg">Erin Lindford</h2>
            <div class="text-purple-500">Customer Support</div>
            <div class="text-gray-600">erinlindford@example.com</div>
            <div class="text-gray-600">(555) 765-4321</div>
          </div>
        </div>
      </header>
    )}
  />
);

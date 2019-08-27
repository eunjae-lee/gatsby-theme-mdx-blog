import React from 'react';
import { Link } from 'gatsby';

export default ({ data }) => (
  <section class="p-8">
    {data.allMdx.edges.map(({ node }) => (
      <article key={node.fields.slug} class="mb-16">
        <h1 class="text-xl text-gray-800">
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h1>
        <p class="text-lg text-gray-600">
          {node.excerpt}
          <Link to={node.fields.slug} class="ml-2 text-blue-600">
            Read →
          </Link>
        </p>
      </article>
    ))}
  </section>
);

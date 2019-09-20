import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import SEO from './seo';
import Header from './header';

function Layout(props) {
  const { title, pageContext, children } = props;
  const { frontmatter = {} } = pageContext || {};
  const isPostContext = Boolean(pageContext);
  return (
    <div>
      <SEO
        title={frontmatter.title || title}
        description={frontmatter.description}
      />
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
          <Header title={title} description={description} author={author} />
        )}
      />
      {isPostContext ? <article>{children}</article> : children}
    </div>
  );
}

export default Layout;

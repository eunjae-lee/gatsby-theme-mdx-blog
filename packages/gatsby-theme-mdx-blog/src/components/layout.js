import React from 'react';
import SEO from './seo';

function Layout({ title, pageContext = {}, children }) {
  const { frontmatter = {} } = pageContext;
  return (
    <>
      <SEO title={frontmatter.title || title} />
      {children}
    </>
  );
}

export default Layout;

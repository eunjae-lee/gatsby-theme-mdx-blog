import React from 'react';
import SEO from './seo';
import Header from './header';

function Layout({ title, pageContext = {}, children }) {
  const { frontmatter = {} } = pageContext;
  return (
    <>
      <SEO title={frontmatter.title || title} />
      <Header />
      {children}
    </>
  );
}

export default Layout;

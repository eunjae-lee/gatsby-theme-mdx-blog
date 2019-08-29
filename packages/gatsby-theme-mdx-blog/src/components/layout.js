import React from 'react';
import SEO from './seo';
import Header from './header';
import PostWrapper from './postWrapper';

function Layout(props) {
  const { title, pageContext, children } = props;
  const { frontmatter = {} } = pageContext || {};
  const isPostContext = Boolean(pageContext);
  return (
    <>
      <SEO title={frontmatter.title || title} />
      <Header />
      {isPostContext ? (
        <PostWrapper {...props}>{children}</PostWrapper>
      ) : (
        children
      )}
    </>
  );
}

export default Layout;

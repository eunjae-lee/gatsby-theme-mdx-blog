import React from 'react';
import SEO from './seo';
import Header from './header';
import ArticleWrapper from './articleWrapper';

function Layout(props) {
  const { title, pageContext, children } = props;
  const { frontmatter = {} } = pageContext || {};
  const isPostContext = Boolean(pageContext);
  return (
    <>
      <SEO title={frontmatter.title || title} />
      <Header />
      {isPostContext ? (
        <ArticleWrapper {...props}>{children}</ArticleWrapper>
      ) : (
        children
      )}
    </>
  );
}

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';

function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <p>current title is {title}</p>
      {children}
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;

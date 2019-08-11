import React from 'react';
import PropTypes from 'prop-types';
import SEO from './seo';

function Layout(opts) {
  const { title, children } = opts;
  console.log(opts.data);
  return (
    <>
      <SEO title={title} />
      {children}
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Layout;

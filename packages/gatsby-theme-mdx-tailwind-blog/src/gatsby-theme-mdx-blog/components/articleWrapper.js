import React from 'react';
import { MDXProvider } from '@mdx-js/react';

export default ({
  children,
  pageContext: {
    frontmatter: { title, date },
  },
}) => {
  return (
    <MDXProvider
      components={{
        h1: props => <h1 {...props} />,
        h2: props => <h2 {...props} className="text-lg" />,
        h3: props => <h3 {...props} />,
        h4: props => <h4 {...props} />,
        h5: props => <h5 {...props} />,
        h6: props => <h6 {...props} />,
        p: props => <p {...props} />,
      }}
    >
      <article className="p-8">
        <h2 className="text-xl text-gray-800 mb-8">{title}</h2>
        {children}
      </article>
    </MDXProvider>
  );
};

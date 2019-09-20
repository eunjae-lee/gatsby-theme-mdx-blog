import React from 'react';
import { Link } from 'gatsby';

export default ({ title, description, author }) => (
  <header>
    <p>
      {title} by <Link to="/about">{author}</Link>
    </p>
    <p>{description}</p>
  </header>
);

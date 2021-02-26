import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PageNotFound = () => {
  const location = useLocation();
  return (
    <div>
      <h1>
        { `Page not found: ${location.pathname}` }
      </h1>
      <Link to="/">Return to stocks</Link>
    </div>
  );
};

export default PageNotFound;

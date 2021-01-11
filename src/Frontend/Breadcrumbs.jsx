import React from 'react';
import { Link } from 'react-router-dom';

import './Breadcrumbs.css';
const Breadcrumbs = ({ crumbs }) => {
  // Don't render a single breadcrumb.
  if (crumbs.length <= 1) {
    return null;
  }
  return (
    <div className="Breadcrumbs">
      {/* Link back to any previous steps of the breadcrumb. */}
      {crumbs.map(({ title, url }, key) =>
        key + 1 === crumbs.length ? (
          <span key={key}>{title}</span>
        ) : (
          <>
            <Link key={key} to={url} className="breadcrumb">
              {title.toUpperCase()}
            </Link>
            <span key={key}> / </span>
          </>
        )
      )}
    </div>
  );
};
export default Breadcrumbs;

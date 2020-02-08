import React from 'react';
import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

export default function BookmarkLink({ url, title, faviconURL }) {
  return (
    <a href={url} className="bookmark" rel="noopener noreferrer" target="_self">
      <Bookmark faviconURL={faviconURL} title={title} />
    </a>
  );
}


BookmarkLink.defaultProps = {
  title: 'Bookmark',
};
BookmarkLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  faviconURL: PropTypes.string.isRequired,
};

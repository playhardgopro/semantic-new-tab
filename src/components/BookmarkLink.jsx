import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

export default class BookmarkLink extends PureComponent {
  render() {
    const { url, title, faviconURL } = this.props;
    return (
      <a href={url} className="bookmark" rel="noopener noreferrer" target="_self">
        <Bookmark faviconURL={faviconURL} title={title} />
      </a>
    );
  }
}

BookmarkLink.defaultProps = {
  title: 'Bookmark',
};
BookmarkLink.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  faviconURL: PropTypes.string.isRequired,
};

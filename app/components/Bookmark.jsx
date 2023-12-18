import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';

export default class Bookmark extends PureComponent {
  render() {
    const { url, title, faviconURL } = this.props;
    return (
      <a href={url} className="one thumbnail" rel="noopener noreferrer" target="_blank">
        <FavIcon faviconURL={faviconURL} title={title} />
      </a>
    );
  }
}

Bookmark.defaultProps = {
  title: 'TiTiLe',
  faviconURL: 'FaViCoN',
};
Bookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  faviconURL: PropTypes.string,
};

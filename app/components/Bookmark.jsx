import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';

export default class Bookmark extends PureComponent {
  render() {
    const { url, title, faviconURL } = this.props;
    return (
      <a href={url} className="one thumbnail" rel="noopener noreferrer" target="_self">
        <FavIcon faviconURL={faviconURL} title={title} />
      </a>
    );
  }
}

Bookmark.defaultProps = {
  title: 'Bookmark',
  faviconURL: 'https://img2.freepng.ru/20180320/ore/kisspng-computer-icons-bookmark-favicon-icon-image-free-bookmark-5ab0c99bb94e37.849385561521535387759.jpg',
};
Bookmark.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  faviconURL: PropTypes.string,
};

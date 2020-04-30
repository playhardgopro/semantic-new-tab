import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import BookmarkLink from './BookmarkLink';


export default function ListView({ bookmarks }) {
  const items = (bookmarks.map((b) => (
    <BookmarkLink title={b.title} url={b.url} key={b.id} faviconURL={b.faviconURL} />
  )));
  return (
    <List items={items} className="bookmarks-position" />
  );
}


ListView.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
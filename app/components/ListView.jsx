import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'semantic-ui-react';
import Bookmark from './Bookmark';


export default class ListView extends PureComponent {
  render() {
    const { bookmarks } = this.props;
    const items = (bookmarks.map((b) => (
      <Bookmark title={b.title} url={b.url} key={b.id} faviconURL={b.faviconURL} />
    )));
    return (
      <List items={items} className="list-flex" />
    );
  }
}

ListView.propTypes = {
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

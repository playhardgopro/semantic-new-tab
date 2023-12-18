import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const setBookmark = (value) => {
  const selectedOption = value;
  browser.storage.local.set({ bookmarkId: selectedOption });
  window.location.reload();
};
export default class BookmarkFolder extends PureComponent {
  render() {
    const { bookmark, folders } = this.props;
    let selectOptions = [];
    selectOptions = folders.map(({ id, title }, i) => ({ key: i, value: id, text: title }));
    // TODO: create a button for submit
    return (
      <Form id="folderForm">
        <Form.Select
          placeholder={bookmark.title}
          options={selectOptions}
          onChange={(e, { value }) => setBookmark(value)}
        />
      </Form>
    );
  }
}
BookmarkFolder.propTypes = {
  folders: PropTypes.arrayOf(PropTypes.string).isRequired,
  bookmark: PropTypes.objectOf(PropTypes.string).isRequired,
};

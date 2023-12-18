import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Header, Divider, Icon,
} from 'semantic-ui-react';
import getAll from '../../helpers';

async function onCreateFolder() {
  async function addBookmarksToFolder(id) {
    function createBookmarks(links, parentId) {
      return links.map((link) => browser.bookmarks.create({
        title: link.title,
        url: link.url,
        parentId,
      }));
    }

    const allItems = await browser.bookmarks.search({});
    const allBookmarks = getAll('bookmark', allItems);
    createBookmarks(allBookmarks, id);
  }

  const id = await browser.storage.local.get('allFolderId');
  if (typeof id.allFolderId === 'undefined') {
    const createdFolder = await browser.bookmarks.create({
      title: 'All bookmarks', type: 'folder', parentId: 'unfiled_____',
    });
    const createdFolderId = await createdFolder.id;
    await browser.storage.local.set({ allFolderId: createdFolderId });
    addBookmarksToFolder(createdFolderId);
  }
}

async function onDeleteFolder() {
  const id = await browser.storage.local.get('allFolderId');
  if (typeof id.allFolderId !== 'undefined') {
    await browser.bookmarks.removeTree(id.allFolderId);
    await browser.storage.local.remove(['allFolderId', 'shownFolderId']);
  }
}

const setBookmark = (value) => {
  const selectedOption = value;
  browser.storage.local.set({ shownFolderId: selectedOption });
};


export default class SettingsModalFormFolder extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selectOptions: [] };
    this.updateSelect = this.updateSelect.bind(this);
  }

  componentDidMount() {
    this.updateSelect();
  }

  async updateSelect() {
    const allItems = await browser.bookmarks.search({});
    const folders = getAll('folder', allItems);
    this.setState(() => {
      const selectOptions = folders.map(({ id, title }, i) => (
        { key: i, value: id, text: title }
      ));
      return { selectOptions };
    });
  }

  render() {
    const { bookmark } = this.props;
    const { selectOptions } = this.state;

    return (
      <Form id="folderForm">
        <Divider horizontal>
          <Header as="h3">
            <Icon name="folder open" size="small" />
Bookmarks
          </Header>
        </Divider>
        <Header as="h4" content="Select a new bookmark folder" />

        <Form.Select
          placeholder={bookmark.title}
          options={selectOptions}
          onChange={(e, { value }) => {
            setBookmark(value);
          }}
        />
        <Form.Button
          inverted
          onClick={() => window.location.reload()}
          color="green"
          content="Update"
        />
        <Header as="h4" content="Folder with all bookmarks inside" />
        <Form.Group>
          <Form.Button
            onClick={() => {
              onCreateFolder();
              this.updateSelect();
            }}
            color="green"
            content="Create"
          />
          <Form.Button
            onClick={() => {
              onDeleteFolder();
              this.updateSelect();
            }}
            color="red"
            content="Delete"
          />
        </Form.Group>
      </Form>
    );
  }
}
SettingsModalFormFolder.propTypes = {
  bookmark: PropTypes.objectOf(PropTypes.string).isRequired,
};

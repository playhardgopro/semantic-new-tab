import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import ListView from './ListView';
import SettingsModal from './SettingsModal/SettingsModal';

async function createBookmarks() {
  const prefs = await browser.storage.local.get();
  let { faviconServerURL } = prefs;
  if (typeof faviconServerURL === 'undefined') {
    browser.storage.local.set({ faviconServerURL: 'https://icon-fetcher-go.herokuapp.com' });
    faviconServerURL = 'https://icon-fetcher-go.herokuapp.com';
  }
  const allBookmarks = await browser.bookmarks.search({});
  let currentFolderBookmarks = allBookmarks.filter(({ type, parentId }) => type === 'bookmark' && (parentId === (prefs.shownFolderId || 'toolbar_____')));
  currentFolderBookmarks = currentFolderBookmarks.map((el) => {
    const bookmark = el;
    if (bookmark.url.startsWith('http')) {
      bookmark.faviconURL = `${faviconServerURL}/icon?size=180&url=${el.url}`;
    } else bookmark.faviconURL = 'https://icon-fetcher-go.herokuapp.com/icon?size=180&url=https://www.mozilla.org/ru/firefox/central/';
    return bookmark;
  });
  return currentFolderBookmarks;
}

async function setCustomCss() {
  const prefs = await browser.storage.local.get();
  if (typeof prefs.style !== 'undefined') {
    ReactDOM.render(prefs.style, document.getElementById('style'));
  }
}
export default class MainContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { bookmarks: [] };
    this.renderBookmarks = this.renderBookmarks.bind(this);
  }

  componentDidMount() {
    this.renderBookmarks();
  }

  async renderBookmarks() {
    this.setState({ bookmarks: await createBookmarks() });
  }

  render() {
    const { bookmarks } = this.state;
    setCustomCss();
    return (
      <Container fluid>
        <div className="settings-position">
          <SettingsModal />
        </div>
        <ListView bookmarks={bookmarks} />
      </Container>
    );
  }
}

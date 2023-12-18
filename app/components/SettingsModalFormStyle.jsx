import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Form, Message } from 'semantic-ui-react';
import SettingsModalFormFolder from './SettingsModalFormFolder';

const updateStyle = () => {
  const css = document.getElementById('reactCss').value;
  browser.storage.local.set({ style: css });
  window.location.reload();
};

function getAllFolders(allBookmarks) {
  return allBookmarks.filter((bookmark) => (bookmark.type === 'folder'));
}

async function renderBookmarkFolder() {
  const prefs = await browser.storage.local.get();
  document.getElementById('serverDomain').value = prefs.faviconServerURL || 'https://icon-fetcher-go.herokuapp.com';
  const bookmark = await browser.bookmarks.get(prefs.bookmarkId || 'toolbar_____');
  const allBookmarks = await browser.bookmarks.search({});
  const allFolders = getAllFolders(allBookmarks);
  ReactDOM.render(<SettingsModalFormFolder bookmark={bookmark[0]} folders={allFolders} />, document.getElementById('bookmark-folder'));
}
export default class SettingsModalFormStyle extends PureComponent {
  componentDidMount() {
    renderBookmarkFolder();
    browser.storage.local.get('style').then((css) => {
      if (typeof css.style !== 'undefined') {
        document.getElementById('reactCss').value = css.style;
      }
    });
  }

  render() {
    return (
      <Form id="styleForm" onSubmit={updateStyle}>
        <Form.TextArea
          placeholder="Enter your Custom CSS here."
          name="reactCss"
          id="reactCss"
        />
        <Form.Button inverted color="green" type="submit" content="Update" />
        <Message>
          <p>
Please Note: This CSS will be added as a style tag in the head section of the document.
          </p>
          <p>
To use pre-defined templates, please visit this&nbsp;
            <a
              href="https://github.com/ramkumar-kr/react-new-tab-firefox/blob/master/TEMPLATES.md"
              target="_blank"
              rel="noopener noreferrer"
            >
link
            </a>
.

          </p>
        </Message>
      </Form>
    );
  }
}

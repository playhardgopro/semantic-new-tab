import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {
  Form, Label, Header, Divider,
} from 'semantic-ui-react';
import SettingsModalFormFolder from './SettingsModalFormFolder';
// import getAll from '../../helpers';

const updateStyle = () => {
  const css = document.getElementById('reactCss').value;
  browser.storage.local.set({ style: css });
  window.location.reload();
};

async function renderBookmarkFolder() {
  const prefs = await browser.storage.local.get();
  document.getElementById('serverDomain').value = prefs.faviconServerURL || 'https://icon-fetcher-go.herokuapp.com';
  const bookmark = await browser.bookmarks.get(prefs.bookmarkId || 'toolbar_____');
  // const allItems = await browser.bookmarks.search({});
  // const allFolders = getAll('folder', allItems);
  ReactDOM.render(<SettingsModalFormFolder bookmark={bookmark[0]} />, document.getElementById('bookmark-folder'));
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
        <Divider />
        <Header as="h4" content="Custom CSS" />
        <Label pointing="below" content="This CSS will be added as a style tag in the head section of the document." />
        <Form.TextArea
          style={{ minHeight: 300 }}
          placeholder="Enter CSS here."
          name="reactCss"
          id="reactCss"
        />
        <Form.Button inverted color="green" type="submit" content="Update" />
      </Form>
    );
  }
}

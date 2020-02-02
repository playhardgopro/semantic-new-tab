import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';
import ListView from './ListView';
import SettingsModal from './SettingsModal';


function getAllBookmarks(bookmarkTree, faviconServerURL) {
  const bookmarks = [];
  for (let i = 0; i < bookmarkTree.length; i += 1) {
    const element = bookmarkTree[i];
    if ((typeof element.url !== 'undefined') && (element.url.startsWith('http'))) {
      element.faviconURL = `${faviconServerURL}/icon?size=128&url=${element.url}`;
      bookmarks.push(element);
    } else if (typeof element.children !== 'undefined') {
      bookmarks.push(getAllBookmarks(element.children, faviconServerURL));
    }
  }
  return bookmarks;
}

function flatten(ary) {
  let ret = [];
  for (let i = 0; i < ary.length; i += 1) {
    if (Array.isArray(ary[i])) {
      ret = ret.concat(flatten(ary[i]));
    } else {
      ret.push(ary[i]);
    }
  }
  return ret;
}


function getFlatBookmarks(bookmarkTree, faviconServerURL) {
  const bookmarks = getAllBookmarks(bookmarkTree, faviconServerURL);
  const flattenedBookmarks = flatten(bookmarks);
  return flattenedBookmarks;
}


async function renderBookmarks() {
  const prefs = await browser.storage.local.get();
  let { faviconServerURL } = prefs;
  const bookmarkTree = await browser.bookmarks.getSubTree(prefs.bookmarkId || 'toolbar_____');
  if (typeof faviconServerURL === 'undefined') {
    faviconServerURL = 'https://icon-fetcher-go.herokuapp.com';
  }
  const flattenedBookmarks = getFlatBookmarks(bookmarkTree, faviconServerURL);
  if (typeof prefs.style !== 'undefined') {
    ReactDOM.render(prefs.style, document.getElementById('style'));
  }
  ReactDOM.render(<ListView bookmarks={flattenedBookmarks} />, document.getElementById('bookmarks-list'));
}


export default class MainContainer extends PureComponent {
  componentDidMount() {
    renderBookmarks();
  }

  render() {
    return (
      <Container fluid>
        <div className="settings-position">
          <SettingsModal />
        </div>
        <div id="bookmarks-list" />
      </Container>
    );
  }
}

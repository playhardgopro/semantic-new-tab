import React from 'react';
import {
  Form, Message, Header, Divider, Icon,
} from 'semantic-ui-react';

function updateServer() {
  const domainName = document.getElementById('serverDomain').value;
  browser.storage.local.set({ faviconServerURL: domainName });
  window.location.reload();
}
export default function SettingsModalFormServer() {
  return (
    <Form id="serverForm" onSubmit={updateServer}>
      <Divider horizontal>
        <Header as="h3">
          <Icon name="warning circle" size="small" />
Advanced
        </Header>
      </Divider>
      <Header as="h4" content="Icon Server" />
      <Form.Input
        placeholder="https://icon-fetcher-go.herokuapp.com"
        name="serverDomain"
        id="serverDomain"
      />
      <Form.Button inverted color="green" type="submit" content="Update" />
      <Message
        as="p"
      >
To serve high quality icons for the bookmarks, we use&nbsp;
        <a href="https://icon-fetcher-go.herokuapp.com ">icon-fetcher-go</a>
&nbsp;
deployed on&nbsp;
        <a href="https://heroku.com">heroku</a>
. In case you wish to host it yourself, please follow the instructions provided in the&nbsp;
        <a href="https://github.com/mat/besticon">favicon fetcher service</a>
        &nbsp;and replace the domain in the text box above.
      </Message>
      <Divider />
    </Form>
  );
}
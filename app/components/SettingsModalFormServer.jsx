import React, { PureComponent } from 'react';
import { Form, Message } from 'semantic-ui-react';

const updateServer = () => {
  const domainName = document.getElementById('serverDomain').value;
  browser.storage.local.set({ faviconServerURL: domainName });
  window.location.reload();
};
class SettingsModalFormServer extends PureComponent {
  render() {
    // const { value } = this.state
    return (
      <Form id="serverForm" onSubmit={updateServer}>
        <Form.Input
          placeholder="https://icon-fetcher-go.herokuapp.com"
          name="serverDomain"
          id="serverDomain"
        />
        <Form.Button inverted color="green" type="submit" content="Update" />
        <Message
          as="p"
        >
To serve high quality icons for the bookmarks, I have deployed a&nbsp;
          <a href="https://github.com/mat/besticon">favicon fetcher service</a>
&nbsp;deployed on&nbsp;
          <a href="https://heroku.com">heroku</a>
. In case you wish to host it yourself, please follow the instructions provided in the&nbsp;
          <a href="https://github.com/mat/besticon">favicon fetcher service</a>
        &nbsp;and replace the domain in the text box below.
        </Message>
      </Form>
    );
  }
}

export default SettingsModalFormServer;

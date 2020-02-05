import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header, Image, Dimmer } from 'semantic-ui-react';


export default class Bookmark extends Component {
  constructor(props) {
    super(props);
    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {};
  }

  handleShow() { this.setState({ active: true }); }

  handleHide() { this.setState({ active: false }); }

  render() {
    const { active } = this.state;
    const { faviconURL, title } = this.props;

    const content = (
      <Header as="h4" className="bookmark-title" inverted>
        {title}
      </Header>
    );
    return (
      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size="medium"
        src={faviconURL}
      />
    );
  }
}

Bookmark.defaultProps = {
  title: 'Bookmark',
  faviconURL: 'https://img2.freepng.ru/20180320/ore/kisspng-computer-icons-bookmark-favicon-icon-image-free-bookmark-5ab0c99bb94e37.849385561521535387759.jpg',
};


Bookmark.propTypes = {
  faviconURL: PropTypes.string,
  title: PropTypes.string,
};

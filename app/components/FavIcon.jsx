import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

export default class FavIcon extends PureComponent {
  render() {
    const { faviconURL, title } = this.props;
    return (
      <Card>
        <Image src={faviconURL} size="medium" circular />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
        </Card.Content>
      </Card>
    );
  }
}

FavIcon.defaultProps = {
  title: 'TiTiLe',
  faviconURL: 'FaViCoN',
};


FavIcon.propTypes = {
  faviconURL: PropTypes.string,
  title: PropTypes.string,
};

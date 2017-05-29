import React, { Component, PropTypes } from 'react';
import Auth, { defaultTokenKey } from './Auth';

const JWT = (key = defaultTokenKey) => Container => {
  class ContainerWrapper extends Component {
    getChildContext() {
      const payload = Auth.getPayload(Auth.getToken(key));
      return { isAuthenticated: !!payload, jwtPayload: payload };
    }

    render() {
      const payload = Auth.getPayload(Auth.getToken(key));
      return (
        <Container
          isAuthenticated={ !!payload }
          jwtPayload={ payload }
          { ...this.props }
        />
      );
    }
  }

  ContainerWrapper.childContextTypes = {
    isAuthenticated: PropTypes.bool,
    jwtPayload: PropTypes.object,
  };

  return ContainerWrapper;
};

export default JWT;

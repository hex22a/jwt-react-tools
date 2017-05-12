import React, { Component, PropTypes } from 'react';
import Auth from './Auth';

const ContainerWrapperHOC = Container => {
  class ContainerWrapper extends Component {
    getChildContext() {
      const payload = Auth.getPayload();
      return { isAuthenticated: !!payload, jwtPayload: payload };
    }

    render() {
      return <Container { ...this.props } />;
    }
  }

  ContainerWrapper.childContextTypes = {
    isAuthenticated: PropTypes.bool,
    jwtPayload: PropTypes.object,
  };

  return ContainerWrapper;
};

export default ContainerWrapperHOC;

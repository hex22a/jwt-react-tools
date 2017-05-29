/* eslint-disable react/no-multi-comp */
/**
 * Crafted by x22a on 02.04.17.
 */

import React, { Component, PropTypes } from 'react';
import JWT from '../jwt';
import { expect } from 'chai';
import { shallow } from 'enzyme';

@JWT()
class Container extends Component {
  render() {
    const { isAuthenticated, jwtPayload } = this.context;
    return (
      <div>{ isAuthenticated } { jwtPayload }</div>
    );
  }
}

const customKey = 'token';

@JWT(customKey)
class ContainerWithTokenKey extends Component {
  render() {
    const { isAuthenticated, jwtPayload } = this.context;
    return (
      <div>{ isAuthenticated } { jwtPayload }</div>
    );
  }
}

Container.contextTypes = {
  isAuthenticated: PropTypes.bool,
  jwtPayload: PropTypes.object,
};

describe('JWT context', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('Renders container to anonymous', () => {
    const expectedWrapper = shallow(<Container/>);
    expect(expectedWrapper.props().isAuthenticated).to.be.false;
  });

  it('Renders container with flag and payload', () => {
    const expectedTokenKey = 'jwt';
// eslint-disable-next-line max-len
    const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.Q6CM1qIz2WTgTlhMzpFL8jI8xbu9FFfj5DY_bGVY98Y';
    const expectedPayload = {
      "sub": "1234567890",
      "name": "John Doe",
    };

    localStorage.setItem(expectedTokenKey, expectedToken);
    const expectedWrapper = shallow(<Container/>);

    expect(expectedWrapper.props().isAuthenticated).to.be.true;
    expect(expectedWrapper.props().jwtPayload).to.deep.equal(expectedPayload);
  });

  it('Renders container with flag and payload depending on key with custom tokenKey', () => {
    const expectedTokenKey = customKey;
// eslint-disable-next-line max-len
    const expectedToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIn0.Q6CM1qIz2WTgTlhMzpFL8jI8xbu9FFfj5DY_bGVY98Y';
    const expectedPayload = {
      "sub": "1234567890",
      "name": "John Doe",
    };

    localStorage.setItem(expectedTokenKey, expectedToken);
    const expectedWrapper = shallow(<ContainerWithTokenKey/>);

    expect(expectedWrapper.props().isAuthenticated).to.be.true;
    expect(expectedWrapper.props().jwtPayload).to.deep.equal(expectedPayload);
  });
});

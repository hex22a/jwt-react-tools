/**
 * Crafted by x22a on 02.04.17.
 */

import React, { Component, PropTypes } from 'react';
import jwtContext from '../jwtContext';
import { expect } from 'chai';
import { shallow } from 'enzyme';

@jwtContext
class Container extends Component {
  render() {
    return (
      <div>{this.context.isAuthenticated} {this.context.jwtPayload}</div>
    );
  }
}

Container.contextTypes = {
  isAuthenticated: PropTypes.bool,
  jwtPayload: PropTypes.object,
};

describe('JWT context', () => {
  it('Installs Hook', () => {
    const wrapper = shallow(<Container/>, {
      context: {
        isAuthenticated: true,
      },
    });
    expect(wrapper.context('isAuthenticated')).to.be.a('boolean');
  });
});

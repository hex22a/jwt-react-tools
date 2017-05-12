# JWT React Tools
[![Build Status](https://travis-ci.org/AlbertFazullin/fs-jwt-react-tools.svg?branch=master)](https://travis-ci.org/AlbertFazullin/fs-jwt-react-tools)
[![Coverage Status](https://coveralls.io/repos/github/AlbertFazullin/fs-jwt-react-tools/badge.svg?branch=master)](https://coveralls.io/github/AlbertFazullin/fs-jwt-react-tools?branch=master)

React HOC to make usage of JWT extremely fun

## Installation

`yarn add fs-jwt-xhr-hook` 

or `npm i --save fs-jwt-xhr-hook` if you are still using npm

## Usage

This package provides a decorator to add isAuthenticated flag and jwtPayload inside component's child context
```javascript
import React, { Component, PropTypes } from 'react';
import jwtContext from 'fs-jwt-react-tools';


@jwtContext
class Main extends Component {

  render() {
    return (
      <div>foo</div>
    );
  }
}

```

Access data inside child context

```javascript
import React, { PropTypes } from 'react';

const Menu = (props, { isAuthenticated, jwtPayload }) => (
  <nav className={ s.header }>
    <ul>
      <li>
        <IndexLink to="/" activeClassName={ s.active }>JWT</IndexLink>
      </li>
      {isAuthenticated &&
      <li>
        <Link to="/" activeClassName={ s.active }>{jwtPayload.sub}</Link>
      </li>
      }
      {isAuthenticated &&
      <li>
        <Link to="/users" activeClassName={ s.active }>Users</Link>
      </li>
      }
      <li>
        <Link to="/github" activeClassName={ s.active }>GitHub</Link>
      </li>
      {!isAuthenticated &&
      <li>
        <Link to="/sign-in" activeClassName={ s.active }>Sign In</Link>
      </li>
      }
      {!isAuthenticated &&
      <li>
        <Link to="/sign-up" activeClassName={ s.active }>Sign Up</Link>
      </li>
      }
      {isAuthenticated &&
      <li className={ s.pullRight }>
        <button onClick={ onLogout }>Logout</button>
      </li>
      }
    </ul>
  </nav>
);

Menu.contextTypes = {
  isAuthenticated: PropTypes.bool,
  jwtPayload: PropTypes.object,
};
```

## Contributing
PR's are welcome 👍

## Credits
Maintained by [Albert Fazullin](http://github.com/AlbertFazullin).

Twitter: [@hex22a](https://twitter.com/hex22a)

Written by [Flatstack](http://www.flatstack.com).

[<img src="http://www.flatstack.com/logo.svg" width="100"/>](http://www.flatstack.com)

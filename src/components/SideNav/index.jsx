import React from 'react';

import {
  Sidebar
} from 'semantic-ui-react';

import {
  Link
} from 'react-router-dom';

import './css/side-nav.css';

class SideNav extends React.Component {
  render() {
    return(
      <div>
        <Sidebar
          animation='push'
          visible={true}
          className="side-nav"
        >
          <h1>
            R'lyeh
          </h1>
          <br />
          <Link
            to="/"
          >
            税金計算
          </Link>
          <br />
          <br />
          <Link
            to="/dollar"
          >
            ドル換算
          </Link>
          <br />
          <br />
          <Link
            to="/euclid"
          >
            ユークリッド互除法
          </Link>
          <br />
          <br />
          <Link
            to="/primes"
          >
            素数算出
          </Link>
        </Sidebar>
      </div>
    );
  }
}

export default SideNav;

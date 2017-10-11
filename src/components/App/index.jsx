import React from 'react';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
Grid
} from 'semantic-ui-react'

import {
  BrowserRouter
} from 'react-router-dom';

import SideNav from './../SideNav';
import * as actions from './../../actions/app';
import Routes from '../Routes';

import './css/app.css';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <SideNav />
        <div className="fetch">
        <Grid
        >
            <Grid.Column width={16}>
              <Routes
                {...this.props}
              />
            </Grid.Column>
        </Grid>
      </div>
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    app: state.app
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    Object.assign(
      {},
      actions
    ),
    dispatch
  );
}



export default connect(mapStateToProps, mapDispatchToProps)(App);

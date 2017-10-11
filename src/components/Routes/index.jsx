import React from 'react';

import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import {
  Route
} from 'react-router';

import AddTax from './../AddTax';
import Dollar from './../Dollar';
import Euclid from './../Euclid';
import PrimeNumbers from './../PrimeNumbers';

class Routes extends React.Component {
  render() {
    return(
        <Switch>
          <Route
            path="/"
            exact
            render={
              (props) => {
                return (
                  <div>
                    <AddTax
                      {...props}
                    />
                  </div>
                )
              }
            }
            {...this.props}
          >
          </Route>
          <Route
            path="/dollar"
            exact
            render={
              (props) => {
                return (
                  <div>
                    <Dollar
                      {...props}
                    />
                  </div>
                )
              }
            }
            {...this.props}
          >
          </Route>
          <Route
            path="/euclid"
            exact
            render={
              (props) => {
                return (
                  <div>
                    <Euclid
                      {...props}
                    />
                  </div>
                )
              }
            }
            {...this.props}
          >
          </Route>
          <Route
            path="/primes"
            exact
            render={
              (props) => {
                return (
                  <div>
                    <PrimeNumbers
                      {...props}
                    />
                  </div>
                )
              }
            }
            {...this.props}
          >
          </Route>
        </Switch>
    );
  }
}

export default Routes;

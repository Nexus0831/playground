import React from 'react';

import PropTypes from 'prop-types';

import {
  connect
} from 'react-redux';

import {
  bindActionCreators
} from 'redux';

import {
   Form,
   Button
} from 'semantic-ui-react';

import {
  withRouter
} from 'react-router';

import validate from './../../config/validates/addtax';

import {
  reduxForm,
  Field,
  getFormValues,
  isValid,
  initialize
} from 'redux-form';

import * as actions from './../../actions/app';

import Input from '../Common/Form/Input';

import './css/prime.css';

class PrimeNumbers extends React.Component {
  math(e){
    this.props.primes(this.refs.number.value);
  }

  // static propTypes = {
  //   dispatch: PropTypes.any,
  //   handleSubmit: PropTypes.func.isRequired,
  //   addTax: PropTypes.func,
  //   formValues: PropTypes.object
  // }

  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit() {
  //   // console.log(this.props.formValues)
  //   // console.log(this.props)
  //   // console.log('form: ' + getFormValues('addTax')(state));
  //   // this.props.addTax((this.formValues).many)
  // }

  render() {
    return (
      <div id="prime">
        <h3>
          ここでは指定した数までの素数の算出を行います。
        </h3>
              <input
                type="text"
                placeholder="数字"
                defaultValue=""
                ref="number"
              />
          <Button
            basic
            color='purple'
            onClick={this.math.bind(this)}
          >計算</Button>  { /* ボタン */ }
        <br />
        <span
          className="primes"
        >
          <p>素数</p>
          {
            this.props.primeNumbers.map((prime) => {
              return (
                <span
                  key={prime}
                >{prime}　
                </span>
              );
            })
          }
        </span>
      </div>
    );
  }
}

// AddTax = connect(
//   state => ({
//     formValues: getFormValues('addTax')(state)
//     // valid: isValid('helpCreate')(state)
//   })
// )(AddTax);

const mapStateToProps = state => {
  return {
    primeNumbers: state.primeNumbers
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

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
//   form: 'addTax',
//   validate
//   // asyncValidate
// })(AddTax)));

export default connect(mapStateToProps, mapDispatchToProps)(PrimeNumbers);

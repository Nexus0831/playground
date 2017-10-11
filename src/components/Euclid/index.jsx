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

import './css/euclid.css';

class Euclid extends React.Component {
  math(e){
    this.props.euclid(this.refs.a.value, this.refs.b.value);
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
      <div id="euclid">
        <h3>
          ここでは最大公約数と最小公倍数の計算を行います
        </h3>
              <input
                type="text"
                placeholder="a"
                defaultValue=""
                ref="a"
              />
              <input
                type="text"
                placeholder="b"
                defaultValue=""
                ref="b"
              />
          <Button
            basic
            color='purple'
            onClick={this.math.bind(this)}
          >計算</Button>  { /* ボタン */ }
        <br />
        <span className="gcd">最大公約数：　{this.props.divisors.gcd}</span>
        <br />
        <span className="lcd">最小公倍数：　{this.props.divisors.lcd}</span>
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
    divisors: state.divisors
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

export default connect(mapStateToProps, mapDispatchToProps)(Euclid);

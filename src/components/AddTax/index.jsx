import React from 'react';

import PropTypes from 'prop-types';

import store from 'store';

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
  getFormValues
} from 'redux-form';

import * as actions from './../../actions/app';

import Input from '../Common/Form/Input';

import './css/addtax.css';

class AddTax extends React.Component {
  math(e){
    this.props.addTax(this.refs.inputText.value);
  }

  // static propTypes = {
  //   dispatch: PropTypes.any,
  //   handleSubmit: PropTypes.func.isRequired,
  //   addTax: PropTypes.func,
  //   formValues: PropTypes.object
  // }
  //
  // constructor(props) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit() {
  //   // console.log(this.props.formValues)
  //   // console.log(this.props)
  //   // console.log('form: ' + getFormValues('addTax')(state));
  //   this.props.addTax(this.props.formValues)
  // }

  render() {
    return (
      <div id="addTax">
        <h3>
          ここでは税込の計算を行います　現在の消費税は8%です
        </h3>
              <input
                type="text"
                placeholder="税抜き金額"
                defaultValue=""
                ref="inputText"
              />
              {/* <Field
                name="money"
                type="text"
                placeholder="税抜き金額"
                component={Input}
              /> */}
          <Button
            basic
            color='purple'
            onClick={this.math.bind(this)}
          >計算</Button>  { /* ボタン */ }
        <br />
        <span className="price">税込：　{this.props.price}</span>
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
    price: state.price
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

export default connect(mapStateToProps, mapDispatchToProps)(AddTax);

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

import './css/dollar.css';

class Dollar extends React.Component {
  math(e){
    this.props.dollar(this.refs.inputText.value);
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
      <div id="dollar">
        <h3>
          ここではドル換算の計算を行います　現在のレートは112.6円です
        </h3>
              <input
                type="text"
                placeholder="日本円"
                defaultValue=""
                ref="inputText"
              />
          <Button
            basic
            color='purple'
            onClick={this.math.bind(this)}
          >計算</Button>  { /* ボタン */ }
        <br />
        <span className="doll">換算額：　{this.props.doll}</span>
        {/* 税込: {this.props.price}  { /* 表示させる税込の金額 */ }
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
    doll: state.doll
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

export default connect(mapStateToProps, mapDispatchToProps)(Dollar);

// node_modules
import React from 'react';

import {
  Input as SemanticInput
} from 'semantic-ui-react';

import {
  ValidateError
} from './cssinjs';


// pure function
const Input = (props) => {
  const changeToggle = (e, v) => {
    return props.input.onChange(v.value);
  };

  return (
    <span
      id="input"
    >
      <SemanticInput
        placeholder={props.placeholder}
        value={props.input.value}
        label={props.label}
        labelPosition={props.labelPosition}
        onBlur={() => props.input.onBlur(props.input.value)}
        onChange={changeToggle}
        readOnly={props.disabled}
        style={props.style}
        className={props.className}
        fluid={props.fluid}
        type={props.type}
        size={props.size}
        list={props.list}
      />
      {
        props.meta.touched
        && props.meta.error
        && <ValidateError>{props.meta.error}</ValidateError>
      }
    </span>
  );
};


export default Input;

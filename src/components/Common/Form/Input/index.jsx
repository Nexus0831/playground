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
    console.log(v.value);
    return props.input.onChange(v.value);
  };

  console.log(props);

  return (
    <span
      id="input"
    >
      <SemanticInput
        placeholder={props.placeholder}
        value={props.value}
        label={props.label}
        labelPosition={props.labelPosition}
        onBlur={() => props.input.onBlur(props.value)}
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

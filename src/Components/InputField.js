import React from 'react';
import { errStyle } from '../Helpers/ReduxFormValidation';

function isVowel(char) {
  return /^[aeiou]$/.test(char.toLowerCase());
}

const InputField = (props) => {
  const { required, input, meta: { touched, error } } = props;
  const isError = touched && error;
  return (
    <div className="form-group row">
      <label className="col-sm-3 col-form-label">{`${props.label} ${required ? '*' : ''}`}</label>
      <div className="col-sm-9">
        <input type={props.type}
               className="form-control"
               placeholder={`Please enter ${isVowel(props.label[0]) ? 'an' : 'a'} ${props.label}...`}
               {...input}
               style={isError ? errStyle : null}
        />
        {isError &&
        <div className="alert alert-danger mt-2" role="alert">
          {error}
        </div>}
      </div>
    </div>
  );
};
export default InputField;

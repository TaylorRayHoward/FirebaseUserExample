import React, { Component } from 'react';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import SimpleBox from '../Components/SimpleBox';
import { createAccount } from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import { Field, reduxForm } from 'redux-form';
import { email, required } from '../Helpers/ReduxFormValidation';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  onSubmit(data) {
    this.props.createAccount(data);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <SimpleBox title="Create Account">
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className="card-body">
              <Field
                name="email"
                component={InputField}
                label="Email"
                validate={[required, email]}
                required={true}
                type="email"
              />
              <Field
                name="fname"
                component={InputField}
                label="First Name"
                validate={[required]}
                required={true}
                type="text"
              />
              <Field
                name="lname"
                component={InputField}
                label="Last Name"
                validate={[required]}
                required={true}
                type="text"
              />
              <Field
                name="password"
                component={InputField}
                label="Password"
                validate={required}
                required={true}
                type="password"
              />
              {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
              <FooterFormButton submitLabel="Create Account" otherLabel="Go Back"
                                goToLink="/Login" {...this.props}
              />
            </div>
          </form>
        </SimpleBox>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'CreateAccountForm'
})(CreateAccount);

form = connect(null, { createAccount })(form);

export default form;
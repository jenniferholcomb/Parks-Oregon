import React from "react";
import PropTypes from 'prop-types';

function SignIn(props){  

  function doSignIn(event) {
    event.preventDefault();
    props.onSignInCredentials({
      email: 'test@test.com',
      password: 'Test1234'
    });
  }

  return (
    <React.Fragment>
      <h1>Sign In</h1>
      <p><em>Please click submit to sign-in</em></p>
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name='email'
          placeholder='test@test.com' />
        <input
          type='password'
          name='password'
          placeholder='Test1234' />
        <button type='submit'>Sign In</button>
      </form>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  onSignInCredentials: PropTypes.func
};

export default SignIn;
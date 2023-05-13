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
      <div className="flex items-center justify-center min-h-min mt-20">
        <div className="px-8 py-6 mt-4 text-left bg-white rounded-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-center">Login to API</h1>
          <form onSubmit={doSignIn}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">Email</label>
                <input
                  type='text'
                  name='email'
                  placeholder='test@test.com' 
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div>
                <label className="block" htmlFor="password">Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Test1234'
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
              </div>
              <div className="flex items-baseline justify-between">
                <button 
                  type="submit"
                  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                <p className="text-right"><em>Welcome!<br />This is a sample application,<br/>please click login to view more.</em></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  onSignInCredentials: PropTypes.func
};

export default SignIn;
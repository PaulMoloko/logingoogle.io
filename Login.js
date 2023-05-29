import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email) {
      setEmailError('Email is required');
    }
    if (!password) {
      setPasswordError('Password is required');
    }

    // Perform other actions if the form is valid
    // ...
  };

  const handleGoogleSignInSuccess = (response) => {
    // Handle successful Google sign-in
    console.log('Google sign-in success:', response);
    // Perform additional actions, such as authentication with your backend
  };

  const handleGoogleSignInFailure = (error) => {
    // Handle Google sign-in failure
    console.error('Google sign-in error:', error);
  };

  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="w-40 p-5 rounded bg-white">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
              value={email}
              onChange={handleEmailChange}
            />
            {emailError && <p className="text-danger">{emailError}</p>}
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="form-control"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && <p className="text-danger">{passwordError}</p>}
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Sign In</button>
            <GoogleLogin
              clientId="1086850798955-c5hplo269sqk403pnrlob8d8la5fh9l8.apps.googleusercontent.com"
              buttonText="Sign In with Google"
              onSuccess={handleGoogleSignInSuccess}
              onFailure={handleGoogleSignInFailure}
              cookiePolicy={'single_host_origin'}
              className="btn btn-danger mt-2"
            />
          </div>
          <p className="text-right">
            Forgot <a href="">Password</a> | <a href="">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

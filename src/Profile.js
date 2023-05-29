import React, { useEffect, useState } from 'react';

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
            <button className="btn btn-primary" onClick={switchtoProfile}>Sign In</button>
            <GoogleLogin
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Sign In with Google"
              onSuccess={handleGoogleSignInSuccess}
              onFailure={handleGoogleSignInFailure}
              cookiePolicy={'single_host_origin'}
              className="btn btn-danger mt-2"
            />
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
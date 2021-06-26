import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import useInput from '../hooks/useInput';
import '../styles/FormPage.css';

const Login = () => {
  const { currentUser, logIn } = useAuth();
  const email = useInput('');
  const password = useInput('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    setError('');
    e.preventDefault();

    try {
      await logIn(email.value, password.value);
    } catch (err) {
      const errorMsg = err.code === 'auth/invalid-email' ? 'The e-mail is not valid.' : err.message;
      setError(errorMsg);
    }
  };

  const loginContent = currentUser ? (
    <Redirect to="/" />
  ) : (
    <div className="page--root">
      <div className="content--wrapper">
        <h1>TRAVELIFY</h1>
        <div className="form--wrapper">
          {error && (
            <div className="error--wrapper">
              <p className="error--content">{error}</p>
            </div>
          )}
          <form onSubmit={(e) => handleLogin(e)}>
            <div className="form--input">
              <label htmlFor="email">
                <p>E-mail</p>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email.value}
                  onChange={(e) => email.handleChange(e)}
                />
              </label>
            </div>
            <div className="form--input">
              <label htmlFor="password">
                <p>Password</p>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password.value}
                  onChange={(e) => password.handleChange(e)}
                />
              </label>
            </div>
            <div className="form--input">
              <input type="submit" value="Log in" />
            </div>
          </form>
        </div>
      </div>
      <div className="info--wrapper">
        <p>
          If you don&apos;t have an account,
          <Link to="/register"> sign up.</Link>
        </p>
      </div>
    </div>
  );

  return loginContent;
};

export default Login;

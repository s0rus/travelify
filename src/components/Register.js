import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import useInput from '../hooks/useInput';
import '../styles/FormPage.css';

const Register = () => {
  const { currentUser, signUp } = useAuth();
  const email = useInput('');
  const password = useInput('');
  const confirmPassword = useInput('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    setError('');
    e.preventDefault();

    try {
      if (password.value !== confirmPassword.value) {
        throw new Error("Passwords don't match");
      }

      await signUp(email.value, password.value);
    } catch (err) {
      const errorMsg = err.code === 'auth/invalid-email' ? 'The e-mail is not valid.' : err.message;
      setError(errorMsg);
    }
  };

  const registerContent = currentUser ? (
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
          <form onSubmit={(e) => handleRegistration(e)}>
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
              <label htmlFor="confirm-password">
                <p>Confirm password</p>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  value={confirmPassword.value}
                  onChange={(e) => confirmPassword.handleChange(e)}
                />
              </label>
            </div>
            <div className="form--input">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
      <div className="info--wrapper">
        <p>
          If you already have an account,
          <Link to="/login"> log in.</Link>
        </p>
      </div>
    </div>
  );

  return registerContent;
};

export default Register;

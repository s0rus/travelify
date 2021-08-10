import React from 'react';
import '../styles/LandingPage.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../svg/logo.svg';
import { ReactComponent as Poland } from '../svg/poland.svg';
import { ReactComponent as MockButton } from '../svg/mark-button.svg';

const LandingPage = () => (
  <div className="LandingPage">
    <div className="hero-wrapper">
      <div className="logo-wrapper">
        <Logo className="travelify-logo" />
        <div className="hero-info">
          <h1>
            Travelify is a great way to log places from all over the world you
            visited!
          </h1>
          <div className="main-link-wrapper">
            <Link to="/register">BEGIN YOUR JOURNEY</Link>
          </div>
        </div>
      </div>
    </div>
    <div className="further-info-wrapper">
      <div className="further-info">
        <Poland className="further-info-svg" />
        <div className="actual-info">
          <h2>
            Choose your desired country from the world map and simply click it
          </h2>
        </div>
      </div>
      <div className="further-info info-reversed">
        <MockButton className="further-info-svg" />
        <div className="actual-info">
          <h2>Finally, use the button to mark the country as visited</h2>
        </div>
      </div>
      <div className="final-info">
        <h2>
          You get information about a certain country such as the flag, capital
          city, population and so on.Besides, you can come back to your list
          anytime you want.
        </h2>
      </div>
    </div>
    <div className="register-invitation-wrapper">
      <div className="register-invitation">
        <h2>CREATE A FREE ACCOUNT AND START LOGGING NOW</h2>
      </div>
      <div className="main-link-wrapper">
        <Link to="/register">REGISTER ACCOUNT</Link>
      </div>
      <div className="register-invitation">
        <h2>
          <span>OR LOGIN </span>
          <Link to="/login">HERE</Link>
        </h2>
      </div>
    </div>
    <footer>
      <h3>TRAVELIFY &copy; 2021</h3>
    </footer>
  </div>
);

export default LandingPage;

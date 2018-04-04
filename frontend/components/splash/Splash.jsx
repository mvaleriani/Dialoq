import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <section className="splash">

    <Link to="/login">
      <button className="splash-login-button">Log In</button>
    </Link>

    <Link to="/signup">
      <button className="splash-signup-button">Sign Up</button>
    </Link>
  </section>
);

const servers = (currentUser) => (
	<div className="p-holder">
  </div>
);

const Splash = ({currentUser}) => {
  return currentUser ? servers(currentUser) : sessionLinks()
};

export default Splash;

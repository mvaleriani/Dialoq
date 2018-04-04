import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/sessionActions';
import SessionForm from './SessionForm';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

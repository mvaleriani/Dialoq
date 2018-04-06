import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';
import React from 'react';
import MainPage from './MainPage'

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
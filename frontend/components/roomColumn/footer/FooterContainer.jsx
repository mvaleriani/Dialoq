import { connect } from 'react-redux';
import React from 'react';
import Footer from './Footer';
import { updateUserDetails, logout } from '../../../actions/sessionActions';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateUserDetails: user => dispatch(updateUserDetails(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

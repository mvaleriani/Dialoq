import { connect } from 'react-redux';
import React from 'react';
import Footer from './Footer';
import { updateUserDetails, logout } from '../../../actions/sessionActions';
import { openModal, closeModal } from '../../../actions/modalActions';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  updateUserDetails: user => dispatch(updateUserDetails(user)),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

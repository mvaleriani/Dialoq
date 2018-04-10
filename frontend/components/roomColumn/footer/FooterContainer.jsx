import { connect } from 'react-redux';
import React from 'react';
import Footer from './Footer';
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  return ({currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);

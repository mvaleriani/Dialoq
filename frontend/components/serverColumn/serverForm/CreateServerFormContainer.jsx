import { connect } from 'react-redux';
import React from 'react';
import ServerForm from './ServerForm';
import {createServer} from '../../../actions/serverActions';
import {withRouter} from 'react-router';

const mapStateToProps = (state, ownProps) => {

  return {currentUser: state.session.currentUser};
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (server) => dispatch(createServer(server)),
  };

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ServerForm));

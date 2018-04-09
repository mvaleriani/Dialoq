import { connect } from 'react-redux';
import React from 'react';
import ServerForm from './ServerForm';
import {createServer} from '../../../actions/serverActions';

const mapStateToProps = ({ errors }) => {
  errors: errors.servers
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (server) => dispatch(createServer(server)),
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm);

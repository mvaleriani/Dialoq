import { connect } from 'react-redux';
import React from 'react';
import MessageForm from './MessageForm';
import {withRouter} from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
  
  return ({currentUser: state.session.currentUser, roomId: ownProps.match.params.roomId});
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm));

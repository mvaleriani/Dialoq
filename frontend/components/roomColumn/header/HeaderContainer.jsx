import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import {withRouter} from 'react-router';
// import {  } from '../../actions/...';

const mapStateToProps = (state, ownProps) => {
  let serverName = 'Private Messages'
  if (state.servers[ownProps.match.params.serverId]) {
    serverName = state.servers[ownProps.match.params.serverId].name
  }
  return {serverName: serverName}
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));

import { connect } from 'react-redux';
import React from 'react';
import RoomColumn from './RoomColumn';
import {withRouter} from 'react-router'
// import { fetchRooms } from '../../actions/roomColumnActions';

const mapStateToProps = (state, ownProps) => {

  return ({currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({
  // fetchRooms: serverId => dispatch(fetchRooms(serverId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomColumn));

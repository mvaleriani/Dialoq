import { connect } from 'react-redux';
import React from 'react';
import RoomColumn from './RoomColumn';
// import { fetchRooms } from '../../actions/roomColumnActions';

const mapStateToProps = (state, ownProps) => {

  return ({currentUser: state.session.currentUser});
};

const mapDispatchToProps = dispatch => ({
  // fetchRooms: serverId => dispatch(fetchRooms(serverId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomColumn);

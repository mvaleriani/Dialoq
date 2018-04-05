import React from 'react';
// import RoomColumnHeader from './RoomColumnHeader';
// import RoomIndex from './RoomIndex';
// import AccountFooter from './AccountFooter';

class RoomColumn extends React.Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {
    // this.props.fetchRooms(serverId);
  }

  render(){

    return (
      <nav className="room-column">
        <label>Room</label>
        <label>Column</label>
        <label>{this.props.currentUser.username}</label>
      </nav>
    );
  }
}

export default RoomColumn;

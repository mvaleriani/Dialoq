import React from 'react';
import { NavLink } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

class Index extends React.Component {

  constructor(props){
    super(props);
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.rooms.length) {
      let newRooms = this.props.rooms.map(room => room.id);
      if (prevProps.rooms[0] === undefined || newRooms[0] != prevProps.rooms[0].id) {
        document.getElementById('account-footer')
          .parentNode
          .children[1]
          .children[0]
          .click()
      }
    }
  }

  handleRoomClick(e){
    if (e.target){
      if (e.target.id != this.props.match.params.roomId) {
        this.props.clearMessages({});
      }
    }
  }

  render(){

    const rooms = this.props.rooms.map(room => {

      return(
        <NavLink activeClassName="selected-room" id={room.id} key={`room-${room.id}`} onClick={this.handleRoomClick} className="room-link" to={`/server/${room.server_id}/room/${room.id}`}>
          <span># </span>{room.name}
        </NavLink>
      );
    });

    return (
      <section className="room-index" style={{ scrollBehavior: 'auto'}}>

        {rooms}
      </section>
    );
  }
}

export default Index;

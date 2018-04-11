import React from 'react';
import { NavLink } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

class Index extends React.Component {

  constructor(props){
    super(props);
    this.handleRoomClick = this.handleRoomClick.bind(this);
  }

  componentDidMount() {

  }
  componentWillReceiveProps(nextProps){

  }

  handleChategoryClick(e){
    e.preventDefault();
  }

  handleRoomClick(e){

  }

  render(){

    const rooms = this.props.rooms.map(room => {

      return(
        <NavLink activeClassName="selected-room" onClick={this.handleRoomClick} className="room-link" to={`/server/${room.server_id}/room/${room.id}`}>
          <span># </span>{room.name}
        </NavLink>
      );
    });

    return (
      <section className="room-index">

        {rooms}
      </section>
    );
  }
}

export default Index;

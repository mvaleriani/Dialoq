import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link onClick={this.handleRoomClick} className="room-link" to={`/server/${room.server_id}/room/${room.id}`}>
          <span># </span>{room.name}
        </Link>
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

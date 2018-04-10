import React from 'react';
import { Link } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';

class Index extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {

  }
  componentWillReceiveProps(nextProps){
    
    console.log(nextProps);
  }

  handleChategoryClick(e){
    e.preventDefault();

  }

  render(){
    const rooms = this.props.rooms.map(room => {
      return(
        <Link className="room-link" to={`/server/${room.server_id}/room/${room.id}`}>
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

import React from 'react';
import RoomBodyContainer from './roomBody/RoomBodyContainer';

class RoomContent extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="room-content">
        <RoomBodyContainer />
      </section>
    )
  }
}

export default RoomContent;

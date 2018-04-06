import React from 'react';
import RoomBodyContainer from './roomBody/RoomBodyContainer';
import MemberIndexContainer from './memberIndex/MemberIndexContainer';
class RoomContent extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="room-content">
        <RoomBodyContainer />
        <MemberIndexContainer />
      </section>
    )
  }
}

export default RoomContent;

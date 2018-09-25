import React from 'react';
import MessageIndexContainer from "./messageIndex/MessageIndexContainer";
import MessageFormContainer from "./messageForm/MessageFormContainer";

class RoomBody extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="room-body" style={{ backgroundColor: '#36393F'}}>
        <MessageIndexContainer />
        <MessageFormContainer />
      </section>
    )
  }
}

export default RoomBody;

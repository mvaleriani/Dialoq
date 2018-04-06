import React from 'react';
import NavbarContainer from './navbar/NavbarContainer';
import RoomContentContainer from './roomContent/RoomContentContainer';

class ChatColumn extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="room">
        <NavbarContainer />
        <RoomContentContainer />
      </section>
    )
  }
}

export default ChatColumn;

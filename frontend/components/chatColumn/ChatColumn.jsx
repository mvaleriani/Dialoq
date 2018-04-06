import React from 'react';
import NavbarContainer from './navbar/NavbarContainer';

class ChatColumn extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="room">
        <NavbarContainer />
      </section>
    )
  }
}

export default ChatColumn;

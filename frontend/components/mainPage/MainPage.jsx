import React from 'react';
import ServerColumnContainer from '../serverColumn/ServerColumnContainer';
import RoomColumnContainer from '../roomColumn/RoomColumnContainer';
import ChatColumnContainer from '../chatColumn/ChatColumnContainer';
import Modal from '../Modal';
class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section className="main-page">
        <Modal />
        <ServerColumnContainer />
        <RoomColumnContainer />
        <ChatColumnContainer />
      </section>
    );
  }
}

export default MainPage;

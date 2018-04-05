import React from 'react';
import ServerColumnContainer from '../serverColumn/ServerColumnContainer';
import RoomColumnContainer from '../roomColumn/RoomColumnContainer';
import ChatColumnContainer from '../chatColumn/ChatColumnContainer';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <section className="main-page">
        <ServerColumnContainer />
        <RoomColumnContainer />
        <ChatColumnContainer />
      </section>
    );
  }
}

export default MainPage;

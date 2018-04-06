import React from 'react';
import HeaderContainer from './header/HeaderContainer';
import IndexContainer from './index/IndexContainer';
import FooterContainer from './footer/FooterContainer';
// import RoomIndex from './RoomIndex';
// import AccountFooter from './AccountFooter';


class RoomColumn extends React.Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {
    // this.props.fetchRooms(serverId);
  }

  render(){

    return (
      <nav className="room-column">
        <HeaderContainer />
        <IndexContainer />
        <FooterContainer />
      </nav>
    );
  }
}

export default RoomColumn;

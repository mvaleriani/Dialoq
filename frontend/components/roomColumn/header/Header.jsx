import React from 'react';

class Header extends React.Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {

  }

  render(){

    return (
      <header className="room-column-header">
        <span>currentServer name</span>
      </header>
    );
  }
}

export default Header;

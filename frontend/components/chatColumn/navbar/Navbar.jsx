import React from 'react';

class Navbar extends React.Component {

  constructor(props){
    super(props)

  }

  componentDidMount() {

  }

  render(){
    return (
      <header className="room-header">
        <aside className="header-title">
          <div id="pound">#</div>
          <span id="room-name">{this.props.roomName}</span>
        </aside>

        <aside className="header-options">
          <button className="header-button" id="notifications"></button>
          <button className="header-button" id="pinned-button"></button>
          <button className="header-button" id="toggle-member-index"></button>
          <input type="text" className="search-field" placeholder="Search"/>
          <button className="header-button" id="github"><a href="https://github.com/mvaleriani/Dialoq"><img src="http://www.iconsplace.com/icons/preview/white/github-256.png"></img></a></button>
          <button className="header-button" id="gmail"><img src="https://orig00.deviantart.net/5736/f/2015/287/b/a/email_icon_by_caterised-d9d2lcs.png"></img></button>
        </aside>

      </header>
    );
  }
}

export default Navbar;

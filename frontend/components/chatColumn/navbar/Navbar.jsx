import React from 'react';
import {Collapse} from 'react-collapse'

class Navbar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchStr: '',
      open: false,
      style: {borderColor: 'transparent', backgroundColor:'transparent'},
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount() {

  }


  handleSearchChange(e){
    this.setState({
      searchStr: e.target.value
    });

    if (this.state.searchStr.length >= 3) {
      this.props.fetchSearchResults({search_str: this.state.searchStr})
      // let height = Object.values(this.props.searchResults).length * 50 -10;
      this.setState({open: true})
    } else {
      this.setState({open: false})
    }

  }

  handleUserClick(e){
    this.props.addFriend({user_id: e.target.id})
    this.setState({searchStr: '', open:false})
  }

  handleServerClick(e){
    this.props.joinServer({server_id: e.target.id})
    this.setState({searchStr: '', open: false})
  }

  render(){
    let searchResults = [];
    if(this.props.searchResults){

      searchResults = Object.values(this.props.searchResults).map(result => {
      if (Object.values(result)[0].icon_url === undefined) {
        //user
        return (
          <div className="search-result" id={Object.values(result)[0].id} onClick={e => this.handleUserClick(e)}>
            <div className="search-result-icon" id={Object.values(result)[0].id} onClick={e => this.handleUserClick(e)}><img id={Object.values(result)[0].id} onClick={e => this.handleUserClick(e)}src={Object.values(result)[0].image_url}></img></div>
            <span id={Object.values(result)[0].id} onClick={e => this.handleUserClick(e)} className="result-label">user:</span>
            <span id={Object.values(result)[0].id} onClick={e => this.handleUserClick(e)} className="result-name">{Object.values(result)[0].username}</span>
          </div>
        );
      } else {
        //server
        return (
          <div className="search-result" id={Object.values(result)[0].id} onClick={e => this.handleServerClick(e)}>
            <div id={Object.values(result)[0].id} onClick={e => this.handleServerClick(e)} className="search-result-icon"><img id={Object.values(result)[0].id} onClick={e => this.handleServerClick(e)} src={Object.values(result)[0].icon_url}></img></div>
            <span id={Object.values(result)[0].id} onClick={e => this.handleServerClick(e)} className="result-label">server:</span>
            <span id={Object.values(result)[0].id} onClick={e => this.handleServerClick(e)} className="result-name">{Object.values(result)[0].name}</span>
          </div>
      );
      }});
    }


    return (
      <header className="room-header">
        <aside className="header-title">
          <div id="pound">#</div>
          <span id="room-name">{this.props.roomName}</span>
        </aside>

        <aside className="header-options">
          <button className="header-button" id="notifications"><img src="https://i.imgur.com/qnvs2mh.png"/></button>
          <button className="header-button" id="pinned-button"><img src="https://i.imgur.com/pAxlNnL.png"/></button>
          <button className="header-button" id="toggle-member-index"><img src="https://i.imgur.com/eemW764.png"/></button>
          <input type="text"
                 className="search-field"
                 placeholder="Search"
                 onChange={e => this.handleSearchChange(e)}
                 value={this.state.searchStr}/>
          <button className="header-button" id="github"><a href="https://github.com/mvaleriani/Dialoq"><img src="http://www.iconsplace.com/icons/preview/white/github-256.png"></img></a></button>
          <a href="mailto:michaelvaleriani@gmail.com" className="header-button" id="gmail"><img src="https://orig00.deviantart.net/5736/f/2015/287/b/a/email_icon_by_caterised-d9d2lcs.png"></img></a>

          <Collapse id="search-list" isOpened={this.state.open} springConfig={{stiffness: 800, damping: 20}}>
            {searchResults}
          </Collapse>
        </aside>

      </header>
    );
  }
}

export default Navbar;

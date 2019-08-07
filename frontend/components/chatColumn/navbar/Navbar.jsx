import React from 'react';
import {Collapse} from 'react-collapse'



class Navbar extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      searchStr: '',
      open: false,
      style: {borderColor: 'transparent', backgroundColor:'transparent'},
      githubIcon: (<svg className="navbar-icon" xmlns="http://www.w3.org/2000/svg" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="22" width="85%" height="85%" viewBox="0 0 999.937 999.937"><path d="M0 499.968c0-138.012 48.825-255.843 146.476-353.493C244.125 48.825 361.956 0 499.969 0 637.98 0 755.811 48.825 853.462 146.475c97.649 97.65 146.475 215.481 146.475 353.493s-48.825 255.843-146.475 353.493c-97.65 97.65-215.481 146.476-353.493 146.476-138.013 0-255.844-48.825-353.493-146.476C48.825 755.812 0 637.979 0 499.968zm54.684 0c0 122.389 43.617 227.199 130.851 314.434 87.234 87.233 192.045 130.851 314.434 130.851 122.388 0 227.199-43.617 314.433-130.851 87.234-87.234 130.851-192.045 130.851-314.434 0-122.388-43.616-227.199-130.851-314.433C727.168 98.301 622.356 54.684 499.969 54.684c-122.389 0-227.199 43.617-314.434 130.851C98.301 272.769 54.684 377.58 54.684 499.968zm140.617 107.415c-2.604-2.604-2.604-5.208 0-7.812 5.207-5.208 11.718-7.161 19.529-5.859 7.812 1.302 12.369 2.604 13.671 3.906 9.114 3.906 19.205 12.694 30.271 26.366 11.066 13.671 19.855 23.11 26.366 28.318 31.248 26.04 63.146 27.993 95.696 5.859 2.604-9.114 6.836-16.926 12.694-23.437 5.858-6.51 11.393-11.066 16.601-13.671 5.209-2.604 14.323-6.51 27.343-11.718-42.967-3.906-77.795-11.393-104.486-22.46s-47.849-25.063-63.473-41.989c-20.832-23.436-33.527-54.033-38.084-91.791-4.558-37.758-1.628-72.261 8.789-103.509 7.812-19.53 18.879-37.106 33.2-52.731-10.416-32.55-8.463-69.657 5.859-111.321 41.664 2.604 79.422 16.926 113.274 42.966 65.1-16.926 132.804-17.577 203.111-1.953 9.114-6.51 23.111-14.647 41.989-24.413 18.879-9.765 42.641-15.299 71.285-16.601 5.208 14.322 8.789 31.248 10.742 50.778s.977 37.758-2.929 54.684c29.945 31.248 45.569 72.912 46.871 124.992 0 41.664-7.16 76.167-21.482 103.509s-39.711 50.127-76.167 68.354c-24.738 11.719-57.288 18.879-97.65 21.483 18.229 9.114 31.574 18.554 40.037 28.319 8.464 9.765 13.997 25.063 16.602 45.895v61.521l1.952 59.566c3.906 6.511 8.464 12.044 13.672 16.602 5.208 4.557 9.765 7.812 13.671 9.765 3.905 1.953 5.208 4.883 3.905 8.789-1.302 3.906-6.51 5.859-15.623 5.859-22.135 0-39.711-7.812-52.731-23.437-3.906-6.51-5.859-14.321-5.859-23.436v-93.744c0-10.416-2.604-17.903-7.812-22.46-5.208-4.558-10.416-7.487-15.624-8.789v123.039c0 22.134 2.604 36.456 7.812 42.966s8.463 13.021 9.766 19.53c1.302 1.302.325 2.278-2.93 2.929-3.254.65-8.788-.325-16.601-2.929-16.926-3.906-28.644-12.695-35.154-26.366-6.51-13.671-9.765-28.319-9.765-43.943V667.926H488.25v121.086c0 15.624-3.256 30.598-9.766 44.919-9.113 18.229-26.04 27.993-50.777 29.295-3.906-1.302-5.859-2.604-5.859-3.905 1.302-1.303 5.208-7.812 11.718-19.53 1.302-2.604 2.93-7.812 4.883-15.624 1.954-7.812 2.93-16.926 2.93-27.342v-123.04c-5.208 1.302-10.091 4.231-14.648 8.789s-6.836 12.044-6.836 22.46v93.744c0 9.113-1.953 16.926-5.859 23.436-11.718 15.624-29.295 23.437-52.73 23.437-9.114 0-14.322-1.953-15.624-5.859-1.303-2.604-.977-4.883.977-6.836s4.883-4.232 8.789-6.836c3.906-2.604 6.51-4.558 7.812-5.859 5.208-3.906 9.113-9.114 11.718-15.624 3.906-5.208 4.882-18.879 2.929-41.013s-2.279-36.456-.977-42.966c-33.853 11.718-68.355 5.858-103.51-17.577-10.416-10.416-20.832-25.39-31.248-44.919-7.812-14.323-23.436-31.249-46.871-50.779z"></path></svg>),
      emailIcon: (<svg className="navbar-icon" xmlns="http://www.w3.org/2000/svg" stroke='rgba(255, 255, 255, 0.7)' strokeWidth="3" width="80%" height="80%" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 438.72 438.72"  ><path d="M 219.0625 3.53125 C 100.28694 3.53125 4 99.818214 4 218.59375 C 4 337.3693 100.28694 433.65625 219.0625 433.65625 C 337.83805 433.65625 434.125 337.3693 434.125 218.59375 C 434.125 99.818214 337.83805 3.53125 219.0625 3.53125 z M 219.0625 37.875 C 318.85874 37.875 399.78125 118.79751 399.78125 218.59375 C 399.78125 318.38999 318.85874 399.28125 219.0625 399.28125 C 119.26626 399.28125 38.375 318.38999 38.375 218.59375 C 38.375 118.79751 119.26626 37.875 219.0625 37.875 z M 104 124.5625 L 219.59375 206.96875 L 335.1875 124.5625 L 219.59375 124.5625 L 104 124.5625 z M 82.09375 140.1875 L 82.09375 293.65625 L 167.34375 201 L 82.09375 140.1875 z M 357.125 140.1875 L 271.875 201 L 357.125 293.65625 L 357.125 140.1875 z M 188.4375 216 L 99.5625 312.625 L 219.59375 312.625 L 339.65625 312.625 L 250.78125 216 L 219.59375 238.25 L 188.4375 216 z " /></svg>),
      linkedInIcon: (<svg className="navbar-icon" strokeWidth="3" width="80%" height="80%" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>),
      usersIcon: (<svg className="navbar-icon" stroke='rgba(255, 255, 255, 0.7)' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" x="0px" y="0px" viewBox="0 0 491.668 491.668"><g><g><path d="M176.053,256.645c-18.445-14.116-41.436-22.59-66.452-22.59C49.07,234.055,0,283.125,0,343.656 v67.604c0,7.923,6.418,14.34,14.34,14.34h115.659v-69.133C129.999,316.56,147.917,280.803,176.053,256.645z"/></g><g><path d="M109.601,215.617c41.3,0,74.774-33.475,74.774-74.774c0-41.301-33.474-74.775-74.774-74.775 c-41.3,0-74.774,33.474-74.774,74.775C34.827,182.143,68.301,215.617,109.601,215.617z"/></g><g><path d="M261.662,257.581c-54.607,0-98.886,44.278-98.886,98.886v54.793c0,7.923,6.418,14.34,14.34,14.34 h42.085h71.51v-58.777c0-33.202,13.988-63.148,36.29-84.442C309.573,266.993,286.742,257.581,261.662,257.581z"/></g><g><path d="M225.131,230.069c10.54,6.819,23.04,10.876,36.531,10.876c13.493,0,25.993-4.056,36.539-10.876 c18.574-12.019,30.929-32.817,30.929-56.584c0-37.267-30.201-67.468-67.468-67.468c-37.259,0-67.46,30.201-67.46,67.468 C194.202,197.252,206.558,218.05,225.131,230.069z"/></g><g><path d="M407.578,282.733c-46.445,0-84.088,37.652-84.088,84.09v44.437c0,7.923,6.418,14.34,14.34,14.34 h22.727h116.77c7.923,0,14.341-6.417,14.341-14.34v-44.437C491.668,320.385,454.016,282.733,407.578,282.733z"/></g><g><path d="M371.705,255.646c9.851,7.961,22.221,12.93,35.873,12.93c13.66,0,26.032-4.969,35.883-12.93 c13.004-10.515,21.486-26.401,21.486-44.431c0-31.688-25.68-57.376-57.369-57.376c-31.682,0-57.368,25.688-57.368,57.376 C350.21,229.245,358.691,245.131,371.705,255.646z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>),
      pinnedIcon: (<svg className="navbar-icon" strokeWidth="3" width="70%" height="70%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 193.826 193.826"><path d="M191.495,55.511L137.449,1.465c-1.951-1.953-5.119-1.953-7.07,0l-0.229,0.229c-3.314,3.313-5.14,7.72-5.14,12.406 c0,3.019,0.767,5.916,2.192,8.485l-56.55,48.533c-4.328-3.868-9.852-5.985-15.703-5.985c-6.305,0-12.232,2.455-16.689,6.913 l-0.339,0.339c-1.953,1.952-1.953,5.118,0,7.07l32.378,32.378l-31.534,31.533c-0.631,0.649-15.557,16.03-25.37,28.27 c-9.345,11.653-11.193,13.788-11.289,13.898c-1.735,1.976-1.639,4.956,0.218,6.822c0.973,0.977,2.256,1.471,3.543,1.471 c1.173,0,2.349-0.41,3.295-1.237c0.083-0.072,2.169-1.885,13.898-11.289c12.238-9.813,27.619-24.74,28.318-25.421l31.483-31.483 l30.644,30.644c0.976,0.977,2.256,1.465,3.535,1.465s2.56-0.488,3.535-1.465l0.339-0.339c4.458-4.457,6.913-10.385,6.913-16.689 c0-5.851-2.118-11.375-5.985-15.703l48.533-56.55c2.569,1.425,5.466,2.192,8.485,2.192c4.687,0,9.093-1.825,12.406-5.14l0.229-0.229 C193.448,60.629,193.448,57.463,191.495,55.511z" /><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>),
      bellIcon: (<svg className="navbar-icon" width="80%" height="80%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>),
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleMemberIndexToggle = this.handleMemberIndexToggle.bind(this);
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

  handleMemberIndexToggle(e){
    this.props.toggleMemberIndex(!this.props.memberIndexState);
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
      <header className="room-header" style={{ backgroundColor: '#36393F' }}>
        <aside className="header-title">
          <div id="pound">#</div>
          <span id="room-name">{this.props.roomName}</span>
        </aside>

        <aside className="header-options">
          {/* <button className="header-button" style={{ padding: '0px' }} id="notifications">{this.state.bellIcon}</button>
          <button className="header-button" style={{ padding: '0px' }} id="pinned-button">{this.state.pinnedIcon}</button> */}
          <button className="header-button" onClick={this.handleMemberIndexToggle} style={{padding: '0px'}} id="toggle-member-index">{this.state.usersIcon}</button>
          <input type="text"
                 className="search-field"
                 placeholder="Search"
                 onChange={e => this.handleSearchChange(e)}
                 value={this.state.searchStr}/>
          <button className="header-button" style={{ padding: '0px' }} id="github"><a href="https://github.com/mvaleriani/Dialoq" style={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>{this.state.githubIcon}</a></button>
          <a href="https://www.linkedin.com/in/michael-valeriani-4129b6161/" className="header-button" id="gmail">{this.state.linkedInIcon}</a>

          <Collapse id="search-list" isOpened={this.state.open} springConfig={{stiffness: 800, damping: 20}}>
            {searchResults}
          </Collapse>
        </aside>

      </header>
    );
  }
}

export default Navbar;

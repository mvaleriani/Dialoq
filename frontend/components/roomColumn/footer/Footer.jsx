import React from 'react';
import { loadAnimation, setSpeed, playSegments, goToAndPlay, goToAndStop, play } from 'lottie-web';
import {Collapse} from 'react-collapse';

class Footer extends React.Component {

  constructor(props){
    super(props)
    this.animDir = -1;
    this.dir = [];
    this.state = {settingsCollapse: false, move: -15, fake:true};
    this.settingsClick = this.settingsClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logoutClick = this.logoutClick.bind(this);
    this.state = {status: this.props.currentUser.online_status, currentMessage:''};
    this.settingsAnim = {"v":"5.1.3","fr":60,"ip":0,"op":180,"w":150,"h":150,"nm":"Hamburger Menu","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Bot 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":125,"s":[100,94,0],"e":[100,140.5,0],"to":[0,7.75,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.696,"y":0},"n":"0p4_1_0p696_0","t":140,"s":[100,140.5,0],"e":[100,138,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150}],"ix":2},"a":{"a":0,"k":[100,138,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,138],[150,138]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":125,"op":185,"st":125,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"Top 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":125,"s":[100,94,0],"e":[100,47.5,0],"to":[0,-7.75,0],"ti":[0,0,0]},{"i":{"x":0.4,"y":1},"o":{"x":0.696,"y":0},"n":"0p4_1_0p696_0","t":140,"s":[100,47.5,0],"e":[100,50,0],"to":[0,0,0],"ti":[0,0,0]},{"t":150}],"ix":2},"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,50],[150,50]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 3","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":125,"op":185,"st":125,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Mid 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":110,"s":[-180],"e":[0]},{"t":135}],"ix":10},"p":{"a":0,"k":[75,75,0],"ix":2},"a":{"a":0,"k":[100,94,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,94],[150,94]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":125,"op":185,"st":125,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"X 4","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[100,94,0],"ix":2},"a":{"a":0,"k":[100,100,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.192,"y":1},"o":{"x":0.603,"y":0},"n":"0p192_1_0p603_0","t":110,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-44.75,-44.75],[44.75,44.75]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.151,-35.151],[34.797,34.797]],"c":false}]},{"t":125}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[100,100],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":110,"s":[90],"e":[135]},{"t":125}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.192,"y":1},"o":{"x":0.603,"y":0},"n":"0p192_1_0p603_0","t":110,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-44.625,44.625],[44.75,-44.75]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.151,35.151],[34.974,-34.974]],"c":false}]},{"t":125}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[100,100],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":110,"s":[90],"e":[225]},{"t":125}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":110,"op":190,"st":80,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Bot","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":20,"s":[100,138,0],"e":[100,94,0],"to":[0,-7.33333349227905,0],"ti":[0,7.33333349227905,0]},{"t":40}],"ix":2},"a":{"a":0,"k":[100,138,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,138],[150,138]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Top","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":20,"s":[100,50,0],"e":[100,94,0],"to":[0,7.33333349227905,0],"ti":[0,-7.33333349227905,0]},{"t":40}],"ix":2},"a":{"a":0,"k":[100,50,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,50],[150,50]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 3","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"Mid","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":30,"s":[0],"e":[-180]},{"t":55}],"ix":10},"p":{"a":0,"k":[75,75,0],"ix":2},"a":{"a":0,"k":[100,94,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,94],[150,94]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"X 2","parent":7,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[100,94,0],"ix":2},"a":{"a":0,"k":[100,100,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":40,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.151,-35.151],[34.797,34.797]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-44.75,-44.75],[44.75,44.75]],"c":false}]},{"t":55}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[100,100],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":40,"s":[135],"e":[90]},{"t":55}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.6,"y":0},"n":"0p2_1_0p6_0","t":40,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-35.151,35.151],[34.974,-34.974]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-44.625,44.625],[44.75,-44.75]],"c":false}]},{"t":55}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[100,100],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":40,"s":[225],"e":[90]},{"t":55}],"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":30,"op":110,"st":0,"bm":0}],"markers":[]}

  }

  componentDidMount() {
    let settingsButton = document.getElementById('settings-anim-container');
    this.settingsAnim = loadAnimation({
      container: settingsButton,
      renderer: 'svg',
      loop: false,
      prerender:false,
      autoplay: false,
      autoloadSegments: false,

      animationData: this.settingsAnim,
      rendererSettings: {
        context: '',
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false,
        hideOnTransparent: true,
        className: 'account-settings-anim'
      }
    });
    this.settingsAnim.pause();
    this.settingsAnim.setSpeed(1.8);
  }

  updateCurrentMessage(event) {
    this.setState({
      currentMessage: event.target.value
    });
  }

  innerClick(e){
    e.preventDefault();
    if (e.target.id === "logout-button") {
      this.props.logout()
    } else if (e.target.id === "online-status-setting") {
      if (this.props.currentUser.online_status === 'online') {

        this.props.updateUserDetails({id: this.props.currentUser.id, username: this.props.currentUser.username, online_status: 'offline'})
        this.setState({status: "offline", backgroundColor: '#FC6059'})
      } else {
        this.props.updateUserDetails({id: this.props.currentUser.id, username: this.props.currentUser.username, online_status: 'online'})
        this.setState({status: "online", backgroundColor: '#53DD6C'})
      }
    }
  }

  handleKeyPress(event){
    if (event.key === 'Enter' && !event.shiftKey) {
      this.handleSendEvent(event)
    }
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.props.updateUserDetails({id: this.props.currentUser.id, username: this.props.currentUser.username, image_url: this.state.currentMessage})
    this.setState({
      currentMessage: ''
    });
  }

  settingsClick(e){
    if (e.target.id && e.target.id !== "account-settings") {
      return undefined;
    }
      this.animDir *= -1;
      if(this.animDir === 1){
        this.dir = [30, 60]
        this.props.openModal(e);
      } else {
        this.dir = [60, 25]
        this.props.closeModal();
      }
      this.setState({settingsCollapse: !this.state.settingsCollapse, move: {top: (15 - this.animDir*265)}});
      this.setState({fake: !this.state.fake})
      this.settingsAnim.playSegments(this.dir,true);

  }

  logoutClick(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    let status = {backgroundColor: '#53DD6C'}
    if (this.props.currentUser.online_status === 'offline') {
      status = {backgroundColor: '#FC6059'}
    }
    return (
      <footer id="account-footer" className="account-footer">

        <div className="profile-icon">
          <img src={this.props.currentUser.image_url}/>
          <aside style={status} className="online-status"></aside>
        </div>
        <section className="user-info">
          <span>{this.props.currentUser.username}</span>
          <span>#{this.props.currentUser.id}</span>
        </section>
        <button className="mic-toggle"></button>
        <button className="headphone-toggle"></button>

        <button onClick={e=>this.settingsClick(e)} className="settings" id="account-settings">
          <div id='settings-anim-container'>
            <Collapse style={this.state.move} isOpened={this.state.settingsCollapse} id="account-settings-collapse-container">
              <div id="settings-header" >
                <img src={this.props.currentUser.image_url}></img>
                <div>
                <span>Account</span>
                <span>Settings</span>
                </div>
              </div>


              <input value={this.state.currentMessage} onKeyPress={e=>this.handleKeyPress(e)} onChange={e=>this.updateCurrentMessage(e)} id="image-url-input" placeholder="Profile Pic url" type="text"></input>
              <div id="status-setting-div">
                <span style={status}>{this.props.currentUser.online_status}</span>
                <div id="online-status-setting" onClick={e => this.innerClick(e)}>
                  <div id="status-anim"></div>
                </div>
              </div>
              <div onClick={this.logoutClick} id="logout-button"><span>Logout</span></div>

            </Collapse>
          </div>
        </button>

      </footer>
    );
  }
}

export default Footer;

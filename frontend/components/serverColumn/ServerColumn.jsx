import React from 'react';
import { loadAnimation, setSpeed, playSegments, goToAndPlay, goToAndStop, play } from 'lottie-web';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';
import CreateServerFormContainer from './serverForm/CreateServerFormContainer';
import ServerNode from './ServerNode';

class ServerColumn extends React.Component {
  constructor(props){
    super(props)
    this.handleAddServerClick = this.handleAddServerClick.bind(this);
    this.handleServerClick = this.handleServerClick.bind(this);
    this.handlePMClick = this.handlePMClick.bind(this);

    this.state = {formCollapse: false, move: -15, serverUI: {}}

    this.checkAnim = {"v":"5.1.3","fr":60,"ip":0,"op":180,"w":150,"h":150,"nm":"Attachment","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"+ 2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.201],"y":[1]},"o":{"x":[0.601],"y":[0]},"n":["0p201_1_0p601_0"],"t":40,"s":[0],"e":[-135]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.167],"y":[0]},"n":["0p2_1_0p167_0"],"t":55,"s":[-135],"e":[-135]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.6],"y":[0]},"n":["0p2_1_0p6_0"],"t":110,"s":[-135],"e":[0]},{"t":125}],"ix":10},"p":{"a":0,"k":[75,75,0],"ix":2},"a":{"a":0,"k":[100,100,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.196,0.196,0.667],"y":[1,1,1]},"o":{"x":[0.608,0.608,0.333],"y":[0,0,0]},"n":["0p196_1_0p608_0","0p196_1_0p608_0","0p667_1_0p333_0"],"t":20,"s":[0,0,100],"e":[110,110,100]},{"i":{"x":[0.391,0.391,0.667],"y":[1,1,1]},"o":{"x":[0.607,0.607,0.333],"y":[0,0,0]},"n":["0p391_1_0p607_0","0p391_1_0p607_0","0p667_1_0p333_0"],"t":40,"s":[110,110,100],"e":[100,100,100]},{"t":55}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.201,"y":1},"o":{"x":0.601,"y":0},"n":"0p201_1_0p601_0","t":40,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,50],[100,150]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,36.521],[100,163.435]],"c":false}]},{"i":{"x":0.201,"y":1},"o":{"x":0.167,"y":0},"n":"0p201_1_0p167_0","t":55,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,36.521],[100,163.435]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,36.521],[100,163.435]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"n":"0p2_1_0p167_0","t":110,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,36.521],[100,163.435]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,50],[100,150]],"c":false}]},{"t":125}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.201,"y":1},"o":{"x":0.601,"y":0},"n":"0p201_1_0p601_0","t":40,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,100],[150,100]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[36.653,100],[163.192,100]],"c":false}]},{"i":{"x":0.201,"y":1},"o":{"x":0.167,"y":0},"n":"0p201_1_0p167_0","t":55,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[36.653,100],[163.192,100]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[36.653,100],[163.192,100]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.167,"y":0},"n":"0p2_1_0p167_0","t":110,"s":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[36.653,100],[163.192,100]],"c":false}],"e":[{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,100],[150,100]],"c":false}]},{"t":125}],"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":20,"op":180,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"+","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":20,"s":[75,75,0],"e":[75,75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":40,"s":[75,75,0],"e":[75,75,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"n":"0p833_0p833_0p167_0p167","t":55,"s":[75,75,0],"e":[75,75,0],"to":[0,0,0],"ti":[0,0,0]},{"t":75}],"ix":2},"a":{"a":0,"k":[100,100,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":20,"s":[100,100,100],"e":[100,100,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"n":["0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167","0p833_0p833_0p167_0p167"],"t":40,"s":[100,100,100],"e":[100,100,100]},{"t":55}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[100,50],[100,150]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 1","np":2,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[50,100],[150,100]],"c":false},"ix":2},"nm":"Caminho 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.941176470588,0.945098039216,0.949019607843,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":20,"ix":5},"lc":2,"lj":1,"ml":10,"nm":"Traçado 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transformar"}],"nm":"Grupo 2","np":2,"cix":2,"ix":2,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":20,"st":0,"bm":0}],"markers":[]};
    this.animDir = -1;
    this.dir = []
  }

  componentDidMount() {
    this.props.fetchUserServers();
    

    if (this.props.match.path !== '/home') {
      // this.props.fetchServerRooms(this.props.match.params.serverId);
      // this.props.fetchServerMembers(this.props.match.params.serverId);
    } else {

      // this.props.fetchPMRooms();
    }

    let addButton = document.getElementById('add-server-button');
    this.buttonAnim = loadAnimation({
      container: addButton,
      renderer: 'svg',
      loop: false,
      prerender:false,
      autoplay: false,
      autoloadSegments: false,

      animationData: this.checkAnim,
      rendererSettings: {
        context: '',
        scaleMode: 'noScale',
        clearCanvas: false,
        progressiveLoad: false,
        hideOnTransparent: true,
        className: 'add-server'
      }
    });
    this.buttonAnim.pause();
    this.buttonAnim.setSpeed(1.7);
  }

  componentWillReceiveProps(nextProps){
    let serverUI = {}
    nextProps.servers.forEach(server => {
      if(server.id == nextProps.match.params.serverId){
        serverUI[server.id] = true
      }else{
        serverUI[server.id] = false
      }
    });
    if (this.state.serverUI != serverUI){
      this.setState({serverUI})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.servers.length === 0 && this.props.servers.length > 0) {
      document.getElementById('server-list').children[0].click();
    }
    
    // debugger
    if (Object.keys(prevState.serverUI).length === 0 && Object.keys(this.state.serverUI).length > 0){
      document.getElementById('server-list').children[0].click();
    }
  }

  componentWillUnmount(){
    if (this.props.servers.length > 0) {
      this.props.clearRooms({});
      this.props.clearMessages({});
    }
  }

  handleAddServerClick(e){
    e.preventDefault();
    // this.buttonAnim.goToAndPlay(35,true)
    this.animDir *= -1;
    if(this.animDir === 1){
      this.dir = [35, 60]
    } else {
      this.dir = [60, 35]
    }
    // this.buttonAnim.setDirection(this.animDir);
    this.buttonAnim.playSegments(this.dir,true);
    this.setState({formCollapse: !this.state.formCollapse, move: {left: (-30 + this.animDir*110)}})
  }

  handleServerClick(e){
    this.props.clearMessages({});
    this.props.fetchServerRooms(e.target.id);
    this.props.fetchServerMembers(e.target.id);
  }

  handlePMClick(e){
    this.props.clearRooms({});
    this.props.clearMessages({});
    // this.props.fetchPMRooms();
  }

  createDefaultIcon (e) {
    debugger;
    let newIcon = <div>{e.target.title[0].toUpperCase()}</div>
    
  }

  render() {
    let selectedServer = {borderRadius: '15px', animation:'none'};
    let selected = {};
    let selectPointer = {};
    const serverNodes = this.props.servers.map(server => { 
      // if(this.state.serverUI[server.id]){
      //   selected = selectedServer;
      //   selectPointer = (<div style={{ height: "40px", width: '5px', background: 'rgb(0, 150, 148)', position: 'absolute', borderBottomRightRadius: '7px', borderTopRightRadius: '7px', left: '0px'}}></div>) 
      // }else{
      //   selected = {};
      //   selectPointer = "";
      // }
      let node = <ServerNode server={server} handleServerClick={this.handleServerClick}/>

      return (
        // <Link to={`/server/${server.id}`} onClick={this.handleServerClick} className="server-node" style={selected} id={server.id} key={server.id}>
        //       <img src={server.icon_url} id={server.id} onError={this.createDefaultIcon} title={server.name}/>
        //       <span className="server-tag">{server.name}</span>
        //       {selectPointer}
        // </Link>
        node
      );
    });
    // debugger
    let homeSelect = {};
    let homeSelectStyle = {};    
    if (this.props.match.path == '/home') {
      homeSelect = (<div style={{ height: "40px", width: '5px', background: 'rgb(0, 150, 148)', position: 'absolute', borderBottomRightRadius: '7px', borderTopRightRadius: '7px', left: '0px' }}></div>);
      homeSelectStyle = selectedServer;
    } else{
      homeSelect = "";
    }

    return (
      <nav className="server-column">
        <Link to="/home" onClick={this.handlePMClick} className="server-node" style={homeSelectStyle}>
            <img id="private-messages-icon" src="https://i.imgur.com/uNY8jM2.png" draggable="false"/>
            <span className="server-tag">Home</span>
            { homeSelect }
        </Link>

        <div className="num-online" ><span>SERVERS</span></div>
        <section id="server-list" >
          { serverNodes }
        </section>

        <div style={{flex: 1}}>
          <button id="add-server-button" onClick={this.handleAddServerClick}></button>
        </div>

        <Collapse id="server-form-collapse" isOpened={this.state.formCollapse} style={this.state.move}>
          <CreateServerFormContainer />
        </Collapse>
      </nav>
    );
  }
}

export default ServerColumn;

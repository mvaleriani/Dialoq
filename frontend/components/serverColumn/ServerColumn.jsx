import React from 'react';
// import ServerNode from './ServerNode';
// import ServerForm from './ServerForm';
// import CreatePostFormContainer from './create_post_form_container';

class ServerColumn extends React.Component {

  componentDidMount() {
    // this.props.fetchServers();
  }

  render() {
    return (
      <nav className="server-column">
        <div className="server-node">
          <img src="https://i.imgur.com/uNY8jM2.png" draggable="false"/>
        </div>
        <div className="num-online"><span># ONLINE</span></div>

      </nav>
    );
    // const serverNodes = this.props.servers.map(server => {
    //   return (
    //     <ServerNode
    //       key={server.id}
    //       server={server} />
    //   );
    // });
    //
    // return (
    //   <div>
    //     <ul>
    //       {serverNodes}
    //     </ul>
    //     <CreateServerFormContainer />
    //   </div>
    // );
  }
}

export default ServerColumn;

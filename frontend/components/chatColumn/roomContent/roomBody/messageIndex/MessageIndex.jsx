import React from 'react';
import ActionCable from 'actioncable';

class MessageIndex extends React.Component {

  constructor(props){
    super(props)
    this.createSocket = this.createSocket.bind(this);
  }

  componentDidMount() {
    // fetchRoomMessages
    this.props.fetchRoomMessages(this.props.match.params.roomId)
    this.createSocket()
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.roomId !== this.props.match.params.roomId) {
      this.props.fetchRoomMessages(newProps.match.params.roomId)
    }
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.roomId !== undefined && prevProps.match.params.roomId !== this.props.match.params.roomId) {
      this.createSocket();
    }
    let index = document.getElementById('message-index');
    index.scrollTo({top: index.scrollHeight, behavior:'auto'})

  }

  createSocket(){
    let channelKey = this.props.match.params.serverId + '_' + this.props.match.params.roomId;
    this.cable = ActionCable.createConsumer('ws://'+window.location.host+'/cable');
    this.chats = this.cable.subscriptions.create({
      channel: 'ChatChannel',
      server_room: channelKey
    }, {
      connected: () => {},
      received: (data) => {
        this.props.receiveMessage(data);
      }
    });
  }

  render(){
    let messages = [];
    if (this.props.messages.length > 0) {

      this.props.messages.forEach(message => {
        let userId = message.user_id
        if (message !== undefined && this.props.serverMembers[userId]!== undefined){
          let messageBody = (<p>{message.body}</p>)
          if (message.body.includes('https')) {
            messageBody = (<p><a style={{color: "#325D7E"}} href={message.body}>{message.body}</a></p>)
          }
          messages.push(
          <section className="message">

              <div className="icon">
                <img src={this.props.serverMembers[userId].image_url}/>
              </div>

              <div className="content">
                <div className="header">
                  <span className="message-usename">{this.props.serverMembers[message.user_id].username}</span>

                </div>
                {messageBody}

              </div>


          </section>
        );}
      });
    }

    return (
      <section id="message-index" className="message-index">
        {messages}
      </section>
    )
  }
}

export default MessageIndex;

import React from 'react';
import ActionCable from 'actioncable';

class MessageForm extends React.Component {
  constructor(props){
    super(props)
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateCurrentMessage = this.updateCurrentMessage.bind(this);
    this.createSocket = this.createSocket.bind(this);
    this.state = {
      currentMessage: ''
    };

  }

  componentWillMount() {
    this.createSocket();
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.roomId !== undefined) {
      this.createSocket();
    }
  }

  updateCurrentMessage(event) {
    this.setState({
      currentMessage: event.target.value
    });
  }

  handleSendEvent(event) {
    event.preventDefault();
    this.chats.create(this.props.currentUser.id, this.state.currentMessage, this.props.match.params.roomId);
    this.setState({
      currentMessage: ''
    });
  }

  handleKeyPress(event){
    if (event.key === 'Enter' && !event.shiftKey) {
      this.handleSendEvent(event)
    }
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
        console.log(data);
      },
      create: function(currentUserId, messageBody, currentRoomId){
        this.perform('create', { userId: currentUserId,
          body: messageBody,
          roomId: currentRoomId
        });
      }
    });
  }

  deleteSocket(){
    this.cable.subscriptions.remove(this.chats);
  }

  render(){
    return (
      <section className="message-form">
        <div id="spacer"></div>
        <section id="form-presentation">
          <div id="add-file"></div>
          <textarea onKeyPress={e => this.handleKeyPress(e)}
                    type="text"
                    id="message-input"
                    placeholder="Write new message"
                    onChange={e => this.updateCurrentMessage(e)}
                    value={this.state.currentMessage} />
          <div id="emoji-input"></div>
        </section>
      </section>
    )
  }
}

export default MessageForm;

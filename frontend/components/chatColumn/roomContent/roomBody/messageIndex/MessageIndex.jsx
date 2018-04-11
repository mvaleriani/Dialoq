import React from 'react';

class MessageIndex extends React.Component {

  componentDidMount() {
    // fetchRoomMessages
    this.props.fetchRoomMessages(this.props.match.params.roomId)
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.roomId !== this.props.match.params.roomId) {
      this.props.fetchRoomMessages(newProps.match.params.roomId)
    }
  }

  render(){
    let messages = [];
    if (this.props.messages.length > 0) {

      this.props.messages.forEach(message => {
        let userId = message.user_id
        if (message !== undefined && this.props.serverMembers[userId]!== undefined){
          messages.push(
          <section className="message">

              <div className="icon">
                <img src={this.props.serverMembers[userId].image_url}/>
              </div>

              <div className="content">
                <div className="header">
                  <span className="message-usename">{this.props.serverMembers[message.user_id].username}</span>

                </div>
                <p>{message.body}</p>
                
              </div>


          </section>
        );}
      });
    }

    return (
      <section className="message-index">
        {messages}
      </section>
    )
  }
}

export default MessageIndex;

import React from 'react';

class MessageForm extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="message-form">
        <div id="spacer"></div>
        <section id="form-presentation">
          <button id="add-file"></button>
          <input type="text" id="message-input"/>
          <button id="emoji-input"></button>
        </section>
      </section>
    )
  }
}

export default MessageForm;

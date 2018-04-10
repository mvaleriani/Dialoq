import React from 'react';

class MessageForm extends React.Component {

  componentDidMount() {

  }

  render(){
    return (
      <section className="message-form">
        <div id="spacer"></div>
        <section id="form-presentation">
          <div id="add-file"></div>
          <textarea type="text" id="message-input" placeholder="Write new message"/>
          <div id="emoji-input"></div>
        </section>
      </section>
    )
  }
}

export default MessageForm;

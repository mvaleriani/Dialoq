import React from 'react';

class Message extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render(){
    return (
      <section className="message">
        <div className="icon">
          <img src="https://img.etsystatic.com/il/b4076d/603588392/il_fullxfull.603588392_m8rm.jpg?version=0"/>
        </div>

        <div className="content">
          <div className="header">
            <span className="username"></span>
            <span className="timestamp"></span>
          </div>
        </div>
      </section>
    )
  }
}

export default Message;

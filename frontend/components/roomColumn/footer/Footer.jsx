import React from 'react';

class Footer extends React.Component {

  constructor(props){
    super(props)
  }
  componentDidMount() {

  }

  render(){

    return (
      <footer className="account-footer">
        <div className="profile-icon">
          <img src={this.props.currentUser.image_url}/>
          <aside className="online-status"></aside>
        </div>
        <section className="user-info">
          <span>{this.props.currentUser.username}</span>
          <span>#{this.props.currentUser.id}</span>
        </section>
        <button className="mic-toggle"></button>
        <button className="headphone-toggle"></button>
        <button className="settings"></button>
      </footer>
    );
  }
}

export default Footer;

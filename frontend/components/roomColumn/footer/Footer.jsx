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
        <img src="https://img.etsystatic.com/il/b4076d/603588392/il_fullxfull.603588392_m8rm.jpg?version=0"/>

        <aside className="online-status"></aside>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React from 'react';


class MemberIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      memberIndexStyle: {},
    }
  }

  componentDidMount() {
    this.props.toggleMemberIndex(true)
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.memberIndexState) {
      this.setState({ memberIndexStyle: {}});
    }else if(nextProps.memberIndexState === false){
      this.setState({ memberIndexStyle: {minWidth: '0px', width: '0px'} });
    }
  }

  render(){
    let onlineMembers = '';
    if (this.props.onlineMembers.length > 0) {
      onlineMembers = this.props.onlineMembers.map(user => {
        return (
          <section className="member">
            <div className="profile-icon">
              <img src={user.image_url}/>
              <aside className="online-status"></aside>
            </div>
            <div className="username">{user.username}</div>
          </section>
        );
      });

    }
    let red = {backgroundColor: '#FE5F55'}
    let offlineMembers = '';
    if (this.props.offlineMembers.length > 0) {
      offlineMembers = this.props.offlineMembers.map(user => {

        return (
          <section className="member">
            <div className="profile-icon">
              <img src={user.image_url}/>
              <aside style={red} className="online-status"></aside>
            </div>
            <div className="username">{user.username}</div>
          </section>
        );
      });
    }

    return (
      <aside className="member-index" style={this.state.memberIndexStyle}>

        <section id="online-members">
          <span>ONLINE - {onlineMembers.length}</span>
          <div className="spacer"></div>
          {onlineMembers}

        </section>

        <section id="online-members">
          <span>OFFLINE - {offlineMembers.length}</span>
          <div className="spacer"></div>
          {offlineMembers}

        </section>
      </aside>
    )
  }
}

export default MemberIndex;

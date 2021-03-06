import React from 'react';
import { withRouter } from 'react-router-dom';

class ServerForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      admin_id: this.props.currentUser.id,
      icon_url: '',
      dm_status: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);

    this.props.processForm(server);
    this.setState({name: '', icon_url: ''})
  }

  renderErrors(){
    return (
      <ul className="server-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="create-server">
        <form onSubmit={this.handleSubmit} className="create-server-form-box">
          <h3>Start your own server!</h3>
          <div className="create-server-form">
            <label>

              <input type="text"
                value={this.state.name}
                onChange={this.update('name')}
                className="create-server-input"
                placeholder="Server Name"
              />
            </label>

            <label>

              <input type="text"
                value={this.state.icon_url}
                onChange={this.update('icon_url')}
                className="create-server-input"
                placeholder="Icon url"
              />
            </label>
            <button className="server-submit">Create Server</button>
          </div>
        </form>
      </div>
    );
  }
}
export default ServerForm;

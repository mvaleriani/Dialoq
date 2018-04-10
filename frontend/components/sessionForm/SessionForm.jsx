import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul className="cred-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let formGreeting = '';


    if (this.props.formType === 'login') {
      formGreeting = 'Welcome back!'
    } else {
      formGreeting = 'Come chat with us!'
    }

    if (this.props.errors.length !== 0 && this.props.formType === 'login') {
      formGreeting = (<span>{this.renderErrors()}</span>);
    }
    let username_field = this.props.formType + '-username';
    let password_field = this.props.formType + '-password';
    return (
      <div className={this.props.formType}>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3 id="form-greeting">{formGreeting}</h3>


          <div className="login-form">

            <h3>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
                id={username_field}
              />
          </h3>

            <h3>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                placeholder="Password"
                className="login-input"
                id={password_field}
              />
          </h3>

            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);

import React from 'react';
import { Link } from 'react-router-dom';
import {Collapse} from 'react-collapse';
import {presets} from 'react-motion';
import LoginFormContainer from '../sessionForm/LoginFormContainer';
import SignupFormContainer from '../sessionForm/SignupFormContainer';
// let toggle = false;


class Splash extends React.Component {
  constructor(props) {
    super(props);

    let loginButtonStyle = {padding: '7px'};
    let signupButtonStyle = {padding: '7px'};
    let labelMargin = {margin: '0px'};
    let lFormText = {color: 'transparentize(white, 1)'}
    let sFormText = {color: 'transparentize(white, 1)'}
    let lClicked = false;
    let sClicked = false;

    this.state = {loginOpened: false, signupOpened: false, lClicked, sClicked, loginButtonStyle, signupButtonStyle, labelMargin};
  }



  render(){


    const handleLoginClick = (e) => {

      if ((e === 'fake' && this.state.loginOpened)  || (e !== 'fake' && !this.state.loginOpened)){

        this.setState({loginOpened: !this.state.loginOpened})

        if (!this.state.loginOpened) {
          this.setState({loginButtonStyle: {
            width: '250px',
            height: '30vh',
            backgroundColor: '#E4406E',
            borderColor: '#E4406E',
            minHeight: '280px',
            labelMargin: {margin: '7px'}}
          })
        } else {
          this.setState({loginButtonStyle: {padding: '7px'},
          labelMargin: {margin: '0px'}})
        }
      }

      if (this.state.signupOpened) {
        handleSignupClick('fake');
      }
    }

    const handleSignupClick = (e) => {
      if ((e === 'fake' && this.state.signupOpened)  || (e !== 'fake' && !this.state.signupOpened)){
        this.setState({signupOpened: !this.state.signupOpened})

        if (!this.state.signupOpened) {
          this.setState({signupButtonStyle: {
            width: '250px',
            height: '30vh',
            backgroundColor: '#E4406E',
            borderColor: '#E4406E',
            minHeight: '280px',
            labelMargin: {margin: '7px'}}
          })
        } else {
          this.setState({signupButtonStyle: {padding: '7px'}, labelMargin: {margin: '0px'}})
        }
      }

      if (this.state.loginOpened) {
        handleLoginClick('fake')
      }
    }

    const handleDemoClick = (e) => {
      e.preventDefault();
      let username = 'demo_user';
      let password = 'demo_password';

      this.setState({loginOpened: true});
      this.setState({loginButtonStyle: {
            width: '250px',
            height: '30vh',
            backgroundColor: '#E4406E',
            borderColor: '#E4406E',
            minHeight: '280px',
            labelMargin: {margin: '7px'}}
          });
      this.setState({signupButtonStyle: {padding: '7px'}});


      const username_field = document.getElementById('login-username');
      const password_field = document.getElementById('login-password');
      console.log(username_field);
      username_field.value = username;
      password_field.value = password;
    }

    return (
      <section className="splash">

        <Collapse isOpened={true}>
          <button onClick={handleLoginClick} style={this.state.loginButtonStyle} className="splash-login-button">
            <label style={this.state.labelMargin} id="login-label">Log In</label>
            <Collapse className="login-collapse" isOpened={this.state.loginOpened} springConfig={presets.noWobble}>
              <LoginFormContainer />
            </Collapse>
          </button>
        </Collapse>

        <Collapse isOpened={true}>
          <button onClick={handleSignupClick} style={this.state.signupButtonStyle} className="splash-signup-button">
            <label style={this.state.labelMargin} id="signup-label">Sign Up</label>
            <Collapse className="signup-collapse" isOpened={this.state.signupOpened} springConfig={presets.noWobble}>
              <SignupFormContainer />
            </Collapse>
          </button>
        </Collapse>

        <button id="demo-button" onClick={handleDemoClick}>Demo</button>
      </section>
    );
  }
}

// const sessionLinks = () => (
//   <section className="splash">
//     <Link to="/login">
//       <button className="splash-login-button">Log In</button>
//     </Link>
//
//
//     <Link to="/signup">
//       <button className="splash-signup-button">Sign Up</button>
//     </Link>
//   </section>
// );

// const servers = (currentUser) => (
// 	<div className="p-holder">
//   </div>
// );
//
// const Splash = ({currentUser}) => {
//   return currentUser ? servers(currentUser) : sessionLinks()
// };

export default Splash;

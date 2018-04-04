import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
// import ServerColumn from './serverColumn/ServerColumn';
// import RoomColumn from './roomColumn/RoomColumn';
// import ChatColumn from './chatColumn/ChatColumn';
import SplashContainer from './splash/SplashContainer';
import LoginFormContainer from './sessionForm/LoginFormContainer'
import SignupFormContainer from './sessionForm/SignupFormContainer'

const App = () => (
  <div className="app">
    <Route exact path="/" component={SplashContainer} />
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    
  </div>
);
// <ServerColumn />
// <RoomColumn />
// <ChatColumn />

// <Switch>
// </Switch>
export default App;

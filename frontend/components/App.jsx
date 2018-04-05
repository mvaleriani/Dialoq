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
import { AuthRoute } from '../util/routeUtil';
import SplashContainer from './splash/SplashContainer';
import LoginFormContainer from './sessionForm/LoginFormContainer'
import SignupFormContainer from './sessionForm/SignupFormContainer'

const App = () => (
  <div className="app">
    <AuthRoute exact path="/" component={SplashContainer} />


  </div>
);
// <ServerColumn />
// <RoomColumn />
// <ChatColumn />

// <Switch>
// </Switch>
export default App;

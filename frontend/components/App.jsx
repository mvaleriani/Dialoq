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
//possibly dont need these
import LoginFormContainer from './sessionForm/LoginFormContainer'
import SignupFormContainer from './sessionForm/SignupFormContainer'

import MainPageContainer from './mainPage/MainPageContainer';
import FourOFour from './FourOFour'
const App = () => (
  <div className="app">
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <Route path="/home" component={ MainPageContainer } />
      <Route path="/" component={ FourOFour } />
    </Switch>
  </div>
);
// <ServerColumn />
// <RoomColumn />
// <ChatColumn />

// <Switch>
// </Switch>
export default App;

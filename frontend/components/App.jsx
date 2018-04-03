import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import ServerColumn from './serverColumn/ServerColumn';
import RoomColumn from './roomColumn/RoomColumn';
import ChatColumn from './chatColumn/ChatColumn';


const App = () => (
  <div className="app">
    <ServerColumn />
    <RoomColumn />
    <ChatColumn />
  </div>
);

// <Switch>
// </Switch>
export default App;

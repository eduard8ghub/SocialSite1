import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {Route} from "react-router-dom";

import Header from './Components/Header/Header'
import NavBar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import DialogsStore from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


const App = (props) => {
  return (
      <div className="App_Wrapper">
        <Header/>
        <NavBar store={props.store.getState()}/>
        <div className="content">
          <Route exact path='/profile' render={() => <Profile store={props.store}/>}/>
          <Route path='/dialogs' render={() => <DialogsStore store={props.store}/>}/>
          <Route path='/users' render={() => <UsersContainer />}/>
          <Route path='/news' render={News} />
          <Route path='/music' render={Music} />
        </div>
      </div>
  );
};

export default App;

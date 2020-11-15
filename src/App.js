import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';
import Music from './Components/Music/Music';

const App = (props) => {

  console.log(props);

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <div className='app-content'>
          <Navbar friends={props.appState.sidebar.bestFriends} />
          <div className='app-wrapper-content'>
            <Route exact path='/profile' render={() => <Profile profilePage={props.appState.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
            <Route path='/dialogs' render={() => <Dialogs dialogs={props.appState.dialogsPage.dialogs} messages={props.appState.dialogsPage.messages} images={props.appState.dialogsPage.avatars} />} />
            <Route path='/news' render={() => <News />} />
            <Route path='/music' render={() => <Music />} />
            <Route path='/settings' render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
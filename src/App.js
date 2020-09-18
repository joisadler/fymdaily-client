import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={HomePage} />
        <Route exact path="/" component={EntryPage} />
        {/* <Route path="/user-settings" component={UserSettingsPage} /> */}
        {/* <Route path="/account-settings" component={AccountSettingsPage} /> */}
        {/* <Route path="/user-preferences" component={UserPreferencesPage} /> */}
      </Switch>
    </div>
  );
}

export default App;

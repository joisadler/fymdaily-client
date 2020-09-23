import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import UserSettingsPage from './pages/UserSettingsPage';
import EatenFoodsPage from './pages/EatenFoodsPage';
import AddFoodPage from './pages/AddFoodPage';
import CreateFoodPage from './pages/CreateFoodPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import PreferencesPage from './pages/PreferencesPage';
import SettingsMenu from './cmps/SettingsMenu';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="App">
      { (currentPath !== '/') && <SettingsMenu />}
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/eaten-foods" component={EatenFoodsPage} />
        <Route path="/add-food" component={AddFoodPage} />
        <Route path="/user-settings" component={UserSettingsPage} />
        <Route path="/create-food" component={CreateFoodPage} />
        <Route path="/account-settings" component={AccountSettingsPage} />
        <Route path="/preferences" component={PreferencesPage} />
        {/* <Route path="/statistics" component={StatisticsPage} /> */}
      </Switch>
    </div>
  );
}

export default App;

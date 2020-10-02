import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './cmps/Entry/EntryPage';
import HomePage from './cmps/Home/HomePage';
import UserSettingsPage from './cmps/Settings/UserSettingsPage';
import EatenFoodPage from './cmps/EatenFood/EatenFoodPage';
import AddEatenFoodPage from './cmps/AddEatenFood/AddEatenFoodPage';
import CustomFoodPage from './cmps/CustomFood/CustomFoodPage';
import AccountSettingsPage from './cmps/Settings/AccountSettingsPage';
import PreferencesPage from './cmps/Settings/PreferencesPage';
import StatisticsPage from './cmps/Settings/StatisticsPage';
import SettingsMenu from './cmps/Settings/SettingsMenu';

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="App">
      { (currentPath !== '/') && <SettingsMenu />}
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/eaten-food" component={EatenFoodPage} />
        <Route path="/add-eaten-food" component={AddEatenFoodPage} />
        <Route path="/custom-foods" component={CustomFoodPage} />
        <Route path="/user-settings" component={UserSettingsPage} />
        <Route path="/account-settings" component={AccountSettingsPage} />
        <Route path="/preferences" component={PreferencesPage} />
        <Route path="/statistics" component={StatisticsPage} />
      </Switch>
    </div>
  );
}

export default App;

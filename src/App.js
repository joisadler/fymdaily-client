import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import UserSettingsPage from './pages/UserSettingsPage';
import EatenFoodPage from './pages/EatenFoodPage';
import AddEatenFoodPage from './pages/AddEatenFoodPage';
import CustomFoodsPage from './pages/CustomFoodsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import PreferencesPage from './pages/PreferencesPage';
import StatisticsPage from './pages/StatisticsPage';
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
        <Route path="/eaten-food" component={EatenFoodPage} />
        <Route path="/add-eaten-food" component={AddEatenFoodPage} />
        <Route path="/custom-foods" component={CustomFoodsPage} />
        <Route path="/user-settings" component={UserSettingsPage} />
        <Route path="/account-settings" component={AccountSettingsPage} />
        <Route path="/preferences" component={PreferencesPage} />
        <Route path="/statistics" component={StatisticsPage} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './pages/EntryPage';
import HomePage from './pages/HomePage';
import UserSettingsPage from './pages/UserSettingsPage';
import EatenFoodsPage from './pages/EatenFoodsPage';
import AddFoodPage from './pages/AddFoodPage';
import CreateFoodPage from './pages/CreateFoodPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={EntryPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/eaten-foods" component={EatenFoodsPage} />
        <Route path="/add-food" component={AddFoodPage} />
        <Route path="/user-settings" component={UserSettingsPage} />
        <Route path="/create-food" component={CreateFoodPage} />
        {/* <Route path="/account-settings" component={AccountSettingsPage} /> */}
        {/* <Route path="/user-preferences" component={UserPreferencesPage} /> */}
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import EntryPage from './pages/EntryPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={EntryPage} />
      </Switch>
    </div>
  );
}

export default App;

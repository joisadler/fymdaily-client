import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import { Navbar } from './cmps/Navbar';
import { HomePage } from './pages/HomePage';
import EntryPage from './pages/EntryPage';
// import Login from './pages/Login';
import { Footer } from './cmps/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={EntryPage} />
        {/* <Route path="/login" component={Login} /> */}
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

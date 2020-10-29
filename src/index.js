import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import { Home, About, Project } from './pages';
import { Navbar } from './components';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { IntlProvider } from 'react-intl';
import fr from './assets/page-content/fr';
import en from './assets/page-content/en';
const messages = {
    fr: fr,
    en: en,
};

const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'fr');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  
  const handleLanguage = () => {
    language === 'fr' ? setLanguage('en') : setLanguage('fr');
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Router>
        <Navbar handleLanguage={handleLanguage}/>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/works'>
            <Project />
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'

// react rooter sert a afficher un site multipage sans avoir plusieurs pages 
// importer : import {BrowserRouter} from 'react-router-dom'
// englober <App/> dans les balises <BrowserRooter/>

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);


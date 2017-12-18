import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './Menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('header'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
registerServiceWorker();

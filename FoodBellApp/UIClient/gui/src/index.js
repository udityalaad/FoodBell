import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App'
import {ReactSession} from 'react-client-session';
import { BrowserRouter } from 'react-router-dom';

ReactSession.setStoreType("localStorage");
ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>,document.getElementById('root')
);



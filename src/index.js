import React from 'react';
import * as serviceWorker from './serviceWorker';


import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux'
import store from './store'
import { createRoot } from "react-dom/client";



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

import App from './App';
import { MaterialUIControllerProvider } from "../src/context";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Router>
        <Provider store={ store }>
        <MaterialUIControllerProvider>
           <App/>
        </MaterialUIControllerProvider>
        </Provider>
    </Router>
  );

serviceWorker.unregister();

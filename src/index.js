import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from "./Frame";
import * as serviceWorker from './serviceWorker';
import {Route, Switch} from "react-router";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import DiaryFrame from "./DiaryFrame";

ReactDOM.render(
    <Frame>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route path="/diaries" component={DiaryFrame}/>
            </Switch>
        </BrowserRouter>
    </Frame>,
    document.getElementById('root')
);

/*<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
* */
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

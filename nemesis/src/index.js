/*



Copyright 2018-2019 Vlogur, Inc.
All Rights Reserved.

NOTICE: All information contained herein is, and remains
the property of Vlogur, Inc. and its suppliers, if any.

The intellectual and technical concepts contained
herein are proprietary to Vlogur Inc and its suppliers and may be
covered by U.S. and Foreign Patents, patents in process, and are
protected by trade secret or copyright law. Dissemination of this
information or reproduction of this material is strictly forbidden
unless prior written permission is obtained from Vlogur, Inc. */


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import './index.css';
import App from './containers/app/App';
import * as serviceWorker from './serviceWorker';
import * as customStore from './customStore';
import routes from './routes';


const store = customStore.create();


ReactDOM.hydrate(
  <Provider store={store}><App routes={routes}/></Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Created by fcampinho on 29/06/2016.
 */
import React from 'react';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router'
import { useScroll } from 'react-router-scroll';

import ReactDOM from 'react-dom';
import routes from './routes';

ReactDOM.render(<Router history={browserHistory}render={applyRouterMiddleware(useScroll())}>{routes}</Router>, document.getElementById('app'));
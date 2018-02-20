// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise';
import {connect} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';

// Grabs the Routes
import routes from './config/routes';

// import the reducers
import rootReducer from './store/reducer';


const createdStore = createStore(rootReducer, applyMiddleware(ReduxThunk, logger));


// Renders the contents according to the route page
// Displays the contents in the div app of index.html
// Note how ReactDOM takes in two parameters (the contents and the location)
ReactDOM.render(
    <Provider store={createdStore}>
    <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById("app")
);



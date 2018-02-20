import Immutable from 'immutable';
import { createReducer } from 'redux-immutable';
import * as Constants from './constants';

const initialState = Immutable.fromJS({
    blogs: [],
});

const blogReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case Constants.FETCH_BLOGS_SUCCESS:
            state = state.updateIn(['blogs'], arr => arr.push(payload));
                
        break;
         // case Constants.FETCH_WEATHER_FAILURE: state = state.set('loading', false); break;
        // default: break;
    }
    return state; 
};

export default blogReducer;


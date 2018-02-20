import {combineReducers} from 'redux-immutable';
import blogReducer from './blogs/reducer';

const appReducer = combineReducers({
    blogs: blogReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer
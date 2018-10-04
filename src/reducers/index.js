import { combineReducers } from 'redux';
import rotateReducer from './rotateReducers';

const rootReducer = combineReducers({
    rotateReducer,
});

export default rootReducer;
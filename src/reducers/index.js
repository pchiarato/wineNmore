import { combineReducers } from 'redux';

import postReducer from './postReducer';
import todoReducer from './todoReducer';

const testReducer = () => {
    return null;
}



export default combineReducers({
    testReducer,
    list: todoReducer,
    posts: postReducer
})
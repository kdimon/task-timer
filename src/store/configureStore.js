import {createStore, combineReducers} from 'redux';
import tasksReducer from './../reducers/tasks';

export default () => {
    const store = createStore(combineReducers({
        tasks: tasksReducer
    }));

    return store;
};
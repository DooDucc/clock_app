import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { alarmReducer } from './reducer';

const store = createStore(alarmReducer);

export default store;

import { createStore, combineReducers } from 'redux';
import home from './modules/home';
import carlist from './modules/carlist';
import dealer from './modules/dealer';
import test from './modules/test';

// const store = createStore(home);

const store = createStore(
  	combineReducers({ home, carlist,dealer,test })
);


export default store;
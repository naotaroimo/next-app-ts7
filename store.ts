import { countReducer } from './duck/MyButton/countReducer';
import { createStore } from 'redux';

export const store = createStore(countReducer);
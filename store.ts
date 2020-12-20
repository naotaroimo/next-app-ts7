import { notesReducer } from './duck/NewNoteInput/notesreducer';
import { countReducer } from './duck/MyButton/countReducer';
import { combineReducers, createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';

//combineReducersで１つのreducerにする
const rootReducer = combineReducers({
    countReducer: countReducer,
    notesReducer: notesReducer
});
export type RootState = ReturnType<typeof rootReducer>

//export const store = createStore(countReducer);
//export const store = createStore(notesReducer);
// export const store = createStore(rootReducer); //結合したReducerを投げ込んでstore作成

export const store = configureStore({
    reducer: counterSlice.reducer
});
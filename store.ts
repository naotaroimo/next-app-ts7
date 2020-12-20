import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import notesSlice from './features/notesSlice';
import counterSlice from './features/counterSlice';

//combineReducersで１つのreducerにする
const rootReducer = combineReducers({
    counterReducer:counterSlice.reducer,
    notesReducer:notesSlice.reducer
 });
export type RootState = ReturnType<typeof rootReducer>

//export const store = createStore(countReducer);
//export const store = createStore(notesReducer);
// export const store = createStore(rootReducer); //結合したReducerを投げ込んでstore作成

// export const store = configureStore({
//     reducer: counterSlice.reducer
// });

// export const store = configureStore({
//     reducer: notesSlice.reducer
// });

export const store = configureStore({
    reducer:rootReducer
 });
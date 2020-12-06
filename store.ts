import { notesReducer } from './duck/NewNoteInput/notesreducer';
import { countReducer } from './duck/MyButton/countReducer';
import { combineReducers, createStore } from 'redux';

//combineReducersで１つのreducerにする
const rootReducer = combineReducers({
    countReducer: countReducer,
    notesReducer: notesReducer
});
export type RootState = ReturnType<typeof rootReducer>

//export const store = createStore(countReducer);
//export const store = createStore(notesReducer);
export const store = createStore(rootReducer); //結合したReducerを投げ込んでstore作成

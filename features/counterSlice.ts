import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//グローバルなstateの型定義
export interface CounterState {
    counter: number;
};
//初期値
const initialState: CounterState = {
    counter: 0
};


//Sliceオブジェクト
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState, //initalStateで以下のstateは型推論
    reducers: {
        //action名：その処理　を定義する
        increment: (state, action: PayloadAction<number>) => ({ ...state, counter: state.counter + action.payload }),
        decrement: (state, action: PayloadAction<number>) => ({ ...state, counter: state.counter - action.payload })
    },
}
);

export default counterSlice
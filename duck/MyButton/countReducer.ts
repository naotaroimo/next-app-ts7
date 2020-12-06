//Reducerが受け付けるstateの型
export interface CountState {
    counter: number;
};

//初期値
const initalState = {
    counter: 0
}

//Action型の構造(エイリアス)
type Action = {
    type: "count/increment",
    payload: number
};

//Reducerオブジェクト本体
export const countReducer = (state: CountState = initalState, action: Action) => {

    //ここにswitch文でaction分岐
    switch (action.type) {
        case "count/increment":
            //新しいstate(CountState)オブジェクトを返す
            return { counter: state.counter + action.payload }
        default:
            //既存のstateを返す
            return state;

    }
}
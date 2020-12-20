import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { CounterState } from "../features/counterSlice";
import { RootState } from "../store";

const MyButton = () => {

    //const counter = useSelector<CounterState,CounterState["counter"]>((state)=>state.counter);
    const counter = useSelector<RootState, CounterState["counter"]>((state) => state.counterReducer.counter);

    const dispatch = useDispatch<Dispatch<PayloadAction<number>>>();

    const { increment, decrement } = counterSlice.actions;

    const handleCountUpBtn = (value: number) => {
        dispatch(increment(value));
        //console.log(increment);
    }

    const handleCountDownBtn = (value: number) => {
        dispatch(decrement(value));
    }

    return (
        <div>
            <div>
                [Children component area]:{counter}
            </div>
            <div>
                <button onClick={() => handleCountUpBtn(1)}>[+](MyButton.tsx)</button>
                <button onClick={() => handleCountDownBtn(1)}>[-](MyButton.tsx)</button>
            </div>
        </div>
    );
}

export default MyButton
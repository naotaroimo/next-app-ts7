import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import counterSlice, { CounterState } from "../features/counterSlice";

const MyButton = () => {

    const counter = useSelector<CounterState, CounterState["counter"]>((state) => state.counter);
    const dispatch = useDispatch<Dispatch<PayloadAction<number>>>();

    const { increment, decrement } = counterSlice.actions;

    const handleCountUpBtn = (value: number) => {
        dispatch(increment(value));
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

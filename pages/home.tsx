import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "../components/MyButton";
import counterSlice, { CounterState } from "../features/counterSlice";
import { RootState } from "../store";

const Home = () => {

    //const counter = useSelector<CounterState,CounterState["counter"]>((state)=>state.counter);
    const counter = useSelector<RootState, CounterState["counter"]>((state) => state.counterReducer.counter);
    const dispatch = useDispatch<Dispatch<PayloadAction<number>>>();
    const { increment, decrement } = counterSlice.actions;

    const handleCountUpBtn = (value: number) => {
        dispatch(increment(value));
        console.log(increment(value));
    }

    const handleCountDownBtn = (value: number) => {
        dispatch(decrement(value));
    }

    return (
        <div>
            [Parent component area]:{counter}
            <div>
                <button onClick={() => handleCountUpBtn(1)}>[+](home.tsx)</button>
                <button onClick={() => handleCountDownBtn(1)}>[-](home.tsx)</button>
            </div>
            <hr />
            <div>
                <MyButton />
            </div>
        </div>
    );
}

export default Home
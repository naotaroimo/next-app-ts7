import { useDispatch, useSelector } from "react-redux";
import { CountState } from "../duck/MyButton/countReducer";
import MyButton from "../components/MyButton";
import { countIncrement, CountStateAction } from "../duck/MyButton/actions";
import { RootState } from "../store";
import { Dispatch } from "react";

const Home = () => {
    //第一引数がstateの型
    //第二引数CountState["counter"]はuseSelectorが返す型相当 つまり、今回はnumber
    const counter = useSelector<RootState,CountState["counter"]>((state:RootState)=>state.countReducer.counter);
    const dispatch = useDispatch<Dispatch<CountStateAction>>();

    const handleCountUpBtn = (value: number) => {
        //dispatch({type:"count/increment", payload:value});
        dispatch(countIncrement(value));
    }

    return (
        <div>
            counter:{counter}
            <div>
                <button onClick={() => handleCountUpBtn(1)}> [+] (home.tsx)  </button>
                <hr />
                <MyButton />
            </div>
        </div>
    );
}

export default Home
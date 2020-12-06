import { useDispatch, useSelector } from "react-redux";
import { CountState } from "../duck/MyButton/countReducer";
import MyButton from "../components/MyButton";
import { countIncrement } from "../duck/MyButton/actions";


const Home = () => {

    //第一引数がstateの型
    //第二引数CountState["counter"]はuseSelectorが返す型相当 つまり、今回はnumber
    const counter = useSelector<CountState, CountState["counter"]>((state) => state.counter);
    const dispatch = useDispatch();

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
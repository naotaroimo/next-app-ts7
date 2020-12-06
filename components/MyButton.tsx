import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countIncrement, CountStateAction } from "../duck/MyButton/actions";
import { CountState } from "../duck/MyButton/countReducer";
import { RootState } from "../store";

const MyButton = () => {
    //第一引数がstateの型
    //第二引数CountState["counter"]はuseSelectorが返す型相当 つまり、今回はnumber
    const mycounter = useSelector<RootState,CountState["counter"]>((state:RootState)=>state.countReducer.counter);
    const dispatch = useDispatch<Dispatch<CountStateAction>>();

    const handleCountUpBtn = (value: number) => {
        //dispatchにactionオブジェクト(今回はtypeとpayload)を渡してstoreで処理させる
        //dispatch({type:"count/increment", payload:value});
        dispatch(countIncrement(value));
    }

    return (
        <div>
            <button onClick={() => handleCountUpBtn(1)}> [+] ＜MyButton /＞  </button>
               ※debug counter:{mycounter}
        </div>
    );
}

export default MyButton
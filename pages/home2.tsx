import { useSelector } from "react-redux";
import NewNoteInput from "../components/NewNoteInput"; //子コンポーネント
import { NotesState } from "../duck/NewNoteInput/notesreducer";
import { RootState } from "../store";

const Home2 = () => {

    //第一引数がstateの型
    //第二引数NotesState["notes"]はuseSelectorが返す型相当 つまり、今回はstring[]
    const notes = useSelector<RootState,NotesState["notes"]>((state:RootState)=> state.notesReducer.notes);

    return (
        <div>
            <NewNoteInput />
            <hr />
            <ul>
                {notes.map((note) => {
                    return (
                        <li key={note}> {note}</li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Home2
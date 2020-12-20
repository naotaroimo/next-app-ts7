import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewNoteInput from "../components/NewNoteInput";
import notesSlice, { NotesState } from "../features/notesSlice";
import { RootState } from "../store";

const Home2 = () => {
    //const notes = useSelector<NotesState,NotesState["notes"]>((state)=>state.notes);
    const notes = useSelector<RootState, NotesState["notes"]>((state) => state.notesReducer.notes);
    notesSlice.caseReducers.reset
    const dispatch = useDispatch<Dispatch<PayloadAction<string>>>();

    const removeNote = (noteid: string) => {
        dispatch(notesSlice.actions.remove(noteid));
    }

    //resetボタンを押したときの処理
    const handleReset = () => {
        dispatch(notesSlice.actions.reset("")); //notelistのリセット

    }
    return (
        <div>
            <NewNoteInput />
            <hr />
            <button onClick={handleReset}> notes clear</button>

            <ul>

                {notes.map((note) => {
                    return (
                        <li key={note.id}>
                            {note.id} - {note.name}
                            <button onClick={() => removeNote(note.id)}> x </button>
                        </li>

                    );
                })}
            </ul>
        </div>
    );
}

export default Home2
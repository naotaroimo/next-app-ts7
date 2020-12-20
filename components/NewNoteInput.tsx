import { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import notesSlice from "../features/notesSlice";

const NewNoteInput = () => {

    //テキストエリアの値管理用
    const [note, setNote] = useState<string>("");

    //グローバルなstate用のdispatchフック   
    const dispatch = useDispatch<Dispatch<PayloadAction<string>>>();


    //テキストエリアの入力値監視用
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    }

    //storeへのdispatch
    const addNote = (note: string) => {
        dispatch({ type: "notes/add", payload: note });
    }

    //ボタンを押したときの処理
    const handleAddNote = () => {
        addNote(note); //グローバルstateにnoteを追加
        setNote(""); //テキストエリアリセット
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" />
            <button onClick={handleAddNote}> add note</button>
            <div>debug:{note}</div>
        </div>
    );
}

export default NewNoteInput
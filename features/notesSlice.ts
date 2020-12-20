import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

//Noteオブジェクトの型を用意する
interface Note {
    id: string;
    name: string;
};

//notesReducerが受けるaction
export interface NotesState {
    notes: Note[];
};

const initialState: NotesState = {
    notes: []
};


const notesSlice = createSlice({
    name: 'notes',
    initialState: initialState,
    reducers: {
        //action名：その処理　を定義する
        add: (state, action: PayloadAction<string>) => {
            return (
                {
                    ...state,
                    notes: [...state.notes,
                    {
                        id: nanoid(),
                        name: action.payload
                    }
                    ]
                }
            );
        },

        remove: (state, action: PayloadAction<string>) => {
            return (
                {
                    ...state,
                    notes: state.notes.filter((note) => note.id != action.payload)
                }
            );
        },

        reset: (state, action: PayloadAction<string>) => initialState,

    }
});

export default notesSlice
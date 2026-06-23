import { createSlice } from "@reduxjs/toolkit";

interface Note{

    id: number,
    project_id: number,

    name: string,
    text: string,

}

interface NotesState{
    notes:Note[]
}

const initialState:NotesState = {
    notes: []
}

const NotesSlice = createSlice({

    name: "Notes",

    initialState,

    reducers: {
        setNotes(){},

        addNotes(){},
        removeNotes(){},

        editNote(){},
        changeNote(){},
    }

})

export const { setNotes, addNotes, removeNotes, editNote, changeNote } = NotesSlice.actions
export default NotesSlice.reducer
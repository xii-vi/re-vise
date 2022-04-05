import { useState, createContext, useContext, useReducer } from 'react';
import { NoteReducer } from "../reducer/noteReducer";

const noteContext = createContext();

const NoteProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    const [newNoteState, newNoteDispatch] = useReducer(NoteReducer,{
        title: '',
        body: '',
        pinned: false,
    })
    console.log(newNoteState)
    return(
    <noteContext.Provider value={{newNoteState,newNoteDispatch,notes, setNotes}}>
        {children}
    </noteContext.Provider>
    )
}

const useNote = () => useContext(noteContext);

export { NoteProvider, useNote };
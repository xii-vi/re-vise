import { Navbar } from "../../components/navbar/navbar"
import { NoteCard } from "../../components/noteCard/notecard"
import { SavedNoteCard } from "../../components/noteCard/savedNoteCard"
import { Sidebar } from "../../components/sidebar/sidebar"
import { useNote } from "../../context/notesContext"
export const Notes = () => {
    const {newNoteState,notes} = useNote();
    return(
        <>
        <Navbar />
        <div className="note-page-layout">
        <Sidebar />
        <div>
            <NoteCard />
            <div className="flex">
            {notes.map((item)=><SavedNoteCard note= {item}/>)}
            </div>
        </div>
        </div>
        </>
    )
}
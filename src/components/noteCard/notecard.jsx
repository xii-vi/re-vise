import "./notecard.css";
import {useNote} from "../../context/notesContext";
export const NoteCard = () => {
const {newNoteState:{title,body,pinned},newNoteDispatch,setNotes} = useNote();
const addToNoteHandler = (e) => {
  e.preventDefault();
  setNotes((prevNote) => [...prevNote,{
      id: Math.random(),
      title: title,
      body: body,
      pinned: pinned,
    }]
  )
}
const check = () => newNoteDispatch({type: "PIN_NOTE"});
    return(
        <form className="notes-form" onSubmit={(e)=>addToNoteHandler(e)}>
          <div className="note-title flex">
          <input
          type="text"
          placeholder="Title"
          // value={title}
          required
          onChange={(e) => newNoteDispatch({ type:"NEW_NOTE_TITLE", payload: e.target.value})}
        />
        </div>
        <div className="note-body">
          <textarea
          placeholder="Take a note..."
          // value={notes}
          required
          onChange={(e) => newNoteDispatch({ type:"NEW_NOTE_BODY", payload: e.target.value})}
        /></div>
        <div className="flex note-footer">
          <div>
          <button className="btn btn-primary" type="submit">Add note</button>
          </div>
          <div className="nav-pills-left">
          <i class="fas fa-thumbtack" onClick={check}></i>
          <i class="fa fa-palette"></i>
          <i class="fa fa-tag"></i>
          <i class="fa fa-trash"></i>
          <i class="fa fa-archive"></i>
          </div>
        </div>
      </form>
    )
}
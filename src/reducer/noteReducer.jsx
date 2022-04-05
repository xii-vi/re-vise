export const NoteReducer = (state, action)  =>{ 
    switch (action.type) {
        case "NEW_NOTE_TITLE": 
        return { ...state, title: action.payload }
        case "NEW_NOTE_BODY":
        return { ...state, body: action.payload };
        case "PIN_NOTE":
        return { ...state, pinned: !state.pinned };
        default:
        return state ;
    }
}
export const SavedNoteCard = ({note}) => {
    const {title,body} = note;
    
    return(
        <div className="saved-note-card">
            <div className="saved-note-card-title">
                <h3>{title}</h3>
            </div>
            <div className="saved-note-card-body">
                <p>{body}</p>
            </div>
        <div className="notes-action flex"> 
            <i class="fas fa-edit"></i>
            <i class="fas fa-thumbtack"></i>
            <i class="fa fa-palette"></i>
            <i class="fa fa-tag"></i>
            <i class="fa fa-trash"></i>
            <i class="fa fa-archive"></i>
        </div>
        </div>
    )
}
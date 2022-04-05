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
            <i className="fas fa-edit"></i>
            <i className="fas fa-thumbtack"></i>
            <i className="fa fa-palette"></i>
            <i className="fa fa-tag"></i>
            <i className="fa fa-trash"></i>
            <i className="fa fa-archive"></i>
        </div>
        </div>
    )
}
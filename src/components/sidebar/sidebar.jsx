export const Sidebar = () => {
    return(
        <div className="flex flex-direction-col m-5 p-5">
            <span><i className="fa fa-home"></i><button className="btn sidebar-btn"> Home</button ></span>
            <span><i className="fa fa-tags"></i><button className="btn sidebar-btn"> Label</button ></span>
            <span><i className="fa fa-archive"></i><button className="btn sidebar-btn"> Archive</button ></span>
            <span><i className="fa fa-trash"></i><button className="btn sidebar-btn"> Trash</button ></span>
            <span><i className="fa fa-user-circle"></i><button className="btn sidebar-btn"> User</button ></span>
            <button className="btn btn-primary sidebar-btn">Create New Note</button>
        </div>
    )
}
import {Link} from "react-router";

const NoteCard = ({note}) => {
    return <Link to={`/note/${note._id}`} className="card bg-base-200 hover:shadow-lg transition-all duration-200 border-t-4 border-solid">
        <div className="card-body">
            <h2 className="card-title">{note.title}</h2>
            <p>{note.content.length > 100 ? note.content.substring(0, 100) + "..." : note.content}</p>
        </div>
    </Link>;
};

export default NoteCard;
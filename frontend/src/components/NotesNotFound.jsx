import Ascii from "./Ascii";
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const NotesNotFound = () => {
    const [visible, setVisible] = useState(false);

    return <div>
        <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
            <div className="bg-primary/10 rounded-full p-8">
                <NotebookIcon className="size-10 text-primary" onClick={setVisible}/>
            </div>
            <h3 className="text-2xl font-bold">No Notes Yet</h3>
            <p className="text-base-content/70">
                It looks like you haven't created any notes yet. Start by adding a new note to keep track of your thoughts and ideas!
            </p>
            <Link to="/create" className="btn btn-primary">
                Create Your First Note
            </Link>
        </div>
        {visible && <Ascii />}
    </div>;
}

export default NotesNotFound;
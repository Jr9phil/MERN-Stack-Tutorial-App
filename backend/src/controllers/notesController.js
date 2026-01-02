export const getAllNotes = (req, res) => {
    res.status(200).send("all the notes");
};

export function createNote(req, res){
    res.status(200).send("create");
};

export function updateNote(req, res){
    res.status(200).send("update");
};

export function deleteNote(req, res){
    res.status(200).send("delete");
};
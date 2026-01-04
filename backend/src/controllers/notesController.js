import Note from "../models/Note.js";

//GETALL
export async function getAllNotes(_, res){
    try {
        const notes = await Note.find().sort({createdAt: -1});
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"})
    }
};

//GET(:ID)
export async function getNote(req, res){
    try {
        const findNote = await Note.findById(req.params.id);
        if(!findNote) return res.status(404).json({message:"Note ID not found"});
        res.status(200).json(findNote);
    } catch (error) {
        console.error("Error in getNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
};

//POST
export async function createNote(req, res){
    try {
        const {title, content} = req.body;
        const newNote = new Note({title, content})
        const savedNote = await newNote.save()
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
};

//PUT(:ID)
export async function updateNote(req, res){
    try {
        const {title,content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title,content}, {new: true,});
        if(!updatedNote) return res.status(404).json({message:"Note ID not found"});
        res.status(200).json(updatedNote);
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
};

//DELETE(:ID)
export async function deleteNote(req, res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message:"Note ID not found"});
        res.status(200).json({message:"Note deleted successfully"})
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"})
    }
};
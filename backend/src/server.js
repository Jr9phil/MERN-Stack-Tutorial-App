import express from "express";
import notes from "./routes/notes.js";

const app = express();

app.use("/api/notes", notes);

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
import express from "express";
import notes from "./routes/notes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(express.json());
app.use(rateLimiter)
app.use(cors({
    origin: "http://localhost:5173",
}));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use("/api/notes", notes);

connectDB().then(() => { 
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});
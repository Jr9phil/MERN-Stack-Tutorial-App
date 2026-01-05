import Navbar from "../components/Navbar";
import Ascii from "../components/Ascii";
import NoteCard from "../components/NoteCard";
import RateLimitedUI from "../components/RateLimited";
import { useEffect, useState } from "react";
import api from "../lib/axios";
import toast from "react-hot-toast";

const HomePage = () => {
    const [rateLimited, setRateLimited] = useState(false);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");
                setNotes(res.data);
                setRateLimited(false);
            } catch (error) {
                console.error(error);
                if(error.response?.status === 429) {
                    setRateLimited(true);
                } else {
                    toast.error(error.response?.data?.message || "Error fetching notes");
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchNotes();
    }, []);

    return <div className="min-h-screen">
        <Navbar />
        {rateLimited && <RateLimitedUI />}
        <div className="max-w-7xl mx-auto p-4 mt-6">
            {loading && <div className="text-center text-primary py-10">Loading notes...</div>}

            {notes.length > 0 && !rateLimited && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notes.map((note) => (
                        <div>
                            <NoteCard key={note._id} note={note} />
                        </div>
                    ))}
                </div>
            )}

            {notes.length === 0 && !error && !rateLimited && !loading && <Ascii />}
        </div>
    </div>
};

export default HomePage;
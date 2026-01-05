import textFile from "../assets/visi.txt";
import { useEffect, useState } from "react";

const Ascii = () => {
    const [ascii, setAscii] = useState("");

    useEffect(() => {
        fetch(textFile)
            .then((response) => response.text())
            .then((data) => setAscii(data))
            .catch((error) => console.error("No find Visi :( ", error));
    }, []);

    return (
        <div className="flex justify-center">
            <pre className="leading-tight p-4 font-mono text-base-content/10">
                {ascii}
            </pre>
        </div>
    );
}

export default Ascii;
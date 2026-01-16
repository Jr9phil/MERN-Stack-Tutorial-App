import { ASCII_BASE64 } from "../assets/visiEncoded";
import { useMemo } from "react";

const Ascii = () => {
  const ascii = useMemo(() => {
    try {
      return atob(ASCII_BASE64);
    } catch {
      return "Failed to decode ASCII art :(";
    }
  }, []);

  return (
    <div className="flex justify-center">
      <pre className="leading-tight p-4 font-mono text-base-content/10">
        {ascii}
      </pre>
    </div>
  );
};

export default Ascii;
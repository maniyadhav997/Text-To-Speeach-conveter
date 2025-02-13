import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("alloy");
  const [audioUrl, setAudioUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    if (!text.trim()) {
      alert("Please enter some text.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/convert", {
        text,
        voice,
      });
      setAudioUrl(response.data.audioUrl);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to convert text to speech.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Text-to-Speech Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert..."
        rows="5"
      />
      <select value={voice} onChange={(e) => setVoice(e.target.value)}>
        <option value="alloy">Alloy</option>
        <option value="echo">Echo</option>
        <option value="fable">Fable</option>
        <option value="onyx">Onyx</option>
        <option value="nova">Nova</option>
        <option value="shimmer">Shimmer</option>
      </select>
      <button onClick={handleConvert} disabled={isLoading}>
        {isLoading ? "Converting..." : "Convert to Speech"}
      </button>
      {audioUrl && (
        <div>
          <audio controls src={audioUrl} />
          <a href={audioUrl} download="speech.mp3">
            Download Audio
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
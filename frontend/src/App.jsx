import { useState } from "react";
import "./app.css";

function App() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();
      setResponse(data.response);
    } catch (err) {
      setResponse("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>🌤 Weather LLM App</h2>

      <textarea
        className="input-box"
        placeholder="Ask weather of any city..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="button-wrapper">
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "Thinking..." : "Send"}
       </button>
      </div>



      <div className="response-box">
  {loading && <div className="spinner"></div>}

  {!loading && response && (
    <div className="response-card">
      {response}
    </div>
  )}
</div>

    </div>
    
  );
}

export default App;

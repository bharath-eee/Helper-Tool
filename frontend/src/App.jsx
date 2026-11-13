
import { useState } from "react";
import "./App.css";

const tools = [
  { name: "PDF Tools", icon: "📄", description: "Convert and manage PDF files" },
  { name: "Image Tools", icon: "🖼️", description: "Convert and edit images" },
  { name: "Web Scraper", icon: "🌐", description: "Extract information from websites" },
  { name: "AI Assistant", icon: "🤖", description: "Connect online AI models" },
  { name: "Script Runner", icon: "💻", description: "Run custom scripts" },
  { name: "File Automation", icon: "📁", description: "Automate file operations" },
];

function App() {
  const [message, setMessage] = useState("Click below to test the backend");

  async function testBackend() {
    try {
      const response = await fetch(
        "https://studious-fiesta-7v5p4g5974vv3rjrw-8000.app.github.dev/"
      );
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage("Could not connect to backend.");
    }
  }

  return (
    <main className="container">
      <header>
        <h1>⚡ Helper Tool</h1>
        <p>Your all-in-one productivity toolbox</p>
      </header>

      <section className="tools">
        {tools.map((tool) => (
          <article className="tool-card" key={tool.name}>
            <span>{tool.icon}</span>
            <h2>{tool.name}</h2>
            <p>{tool.description}</p>
            <button onClick={() => alert(tool.name + " coming soon!")}>
              Open Tool
            </button>
          </article>
        ))}
      </section>

      <section className="backend">
        <h2>Backend Connection</h2>
        <button onClick={testBackend}>Test Backend</button>
        <p>{message}</p>
      </section>
    </main>
  );
}

export default App;

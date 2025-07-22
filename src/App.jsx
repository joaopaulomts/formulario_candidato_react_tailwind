import { useState } from "react";
import CandidateForm from "./components/CandidateForm";
import CandidateList from "./components/CandidateList";
import "./App.css";

function App() {
  const [candidates, setCandidates] = useState([]);

  const handleSubmit = (formData) => {
    setCandidates((prev) => [...prev, formData]);
    alert("Candidato cadastrado com sucesso!");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sistema de Cadastro de Candidatos</h1>
      </header>

      <main className="app-main">
        <div className="container">
          <CandidateForm onSubmit={handleSubmit} />
          <CandidateList candidates={candidates} />
        </div>
      </main>
    </div>
  );
}

export default App;

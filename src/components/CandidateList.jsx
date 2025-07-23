import React from "react";
import { CandidateCard } from "./CandidateCard";

const CandidateList = ({ candidates }) => {
  if (!candidates || candidates.length === 0) {
    return (
      <div className="candidate-list empty">
        <p>Nenhum candidato cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="candidate-list">
      <h2>Candidatos Cadastrados ({candidates.length})</h2>
      <div className="candidates-grid">
        {candidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default CandidateList;

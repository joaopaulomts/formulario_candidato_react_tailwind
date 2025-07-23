import React from "react";

export const CandidateCard = ({ candidate }) => {
  return (
    <div className="candidate-card">
      <h3>{candidate.nome}</h3>
      <p>
        <strong>Email:</strong> {candidate.email}
      </p>
      <p>
        <strong>Telefone:</strong> {candidate.telefone}
      </p>
      <p>
        <strong>Experiência:</strong> {candidate.experiencia} anos
      </p>
      <p>
        <strong>Área:</strong> {candidate.area}
      </p>
    </div>
  );
};

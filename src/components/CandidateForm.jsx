import React, { useState } from "react";
import FormField from "./FormField";
import { AREAS_ATUACAO, EXPERIENCIAS } from "../constants/formOptions";

const CandidateForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    experiencia: "",
    observacoes: "",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      area: "",
      experiencia: "",
      observacoes: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="candidate-form">
      <h2>Cadastro de Candidato</h2>

      <FormField
        label="Nome Completo"
        type="text"
        value={formData.nome}
        onChange={(value) => handleChange("nome", value)}
        required
      />

      <FormField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(value) => handleChange("email", value)}
        required
      />

      <FormField
        label="Telefone"
        type="tel"
        value={formData.telefone}
        onChange={(value) => handleChange("telefone", value)}
        required
      />

      <FormField
        label="Área de Atuação"
        type="select"
        value={formData.area}
        onChange={(value) => handleChange("area", value)}
        options={AREAS_ATUACAO}
        required
      />

      <FormField
        label="Anos de Experiência"
        type="select"
        value={formData.experiencia}
        onChange={(value) => handleChange("experiencia", value)}
        options={EXPERIENCIAS}
        required
      />

      <FormField
        label="Observações"
        type="textarea"
        value={formData.observacoes}
        onChange={(value) => handleChange("observacoes", value)}
      />

      <button type="submit" className="submit-btn">
        Cadastrar Candidato
      </button>
    </form>
  );
};

export default CandidateForm;

import { useState, useCallback } from "react";

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(
    (field, value) => {
      setFormData((prev) => ({
        ...prev,
        [field]: value,
      }));

      // Limpar erro do campo quando o usuário começar a digitar
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    },
    [errors]
  );

  const handleSubmit = useCallback(
    (onSubmit, validation = null) => {
      return (e) => {
        e.preventDefault();

        // Validação customizada se fornecida
        if (validation) {
          const validationErrors = validation(formData);
          if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
          }
        }

        // Validação básica
        const basicErrors = {};
        Object.keys(formData).forEach((key) => {
          if (
            formData[key] === "" ||
            formData[key] === null ||
            formData[key] === undefined
          ) {
            basicErrors[key] = "Este campo é obrigatório";
          }
        });

        if (Object.keys(basicErrors).length > 0) {
          setErrors(basicErrors);
          return;
        }

        // Limpar erros e chamar onSubmit
        setErrors({});
        onSubmit(formData);
      };
    },
    [formData]
  );

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
  }, [initialState]);

  const setFieldError = useCallback((field, error) => {
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }, []);

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
    setFieldError,
    setFormData,
  };
};

import React from "react";

const FormField = ({
  label,
  type,
  value,
  onChange,
  required = false,
  options = [],
}) => {
  const renderField = () => {
    switch (type) {
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="form-select"
          >
            <option value="">Selecione uma opção</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="form-textarea"
            rows="4"
            placeholder={`Digite ${label.toLowerCase()}...`}
          />
        );

      default:
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
            className="form-input"
            placeholder={`Digite ${label.toLowerCase()}...`}
          />
        );
    }
  };

  return (
    <div className="form-field">
      <label className="form-label">
        {label}
        {required && <span className="required">*</span>}
      </label>
      {renderField()}
    </div>
  );
};

export default FormField;

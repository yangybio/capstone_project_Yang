import React from "react";
import "./InputField.scss";

const InputField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="input-field">
      <label className="input-field__label">{label}</label>
      <input
        className={`input-field__input ${error ? "input-field__input--error" : ""}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-field__error">{error}</span>}
    </div>
  );
};

export default InputField;

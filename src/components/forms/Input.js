import React from 'react';
import Style from './Input.module.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className={Style.wrapper}>
      <label htmlFor={name} className={Style.label}>
        {label}
      </label>
      <input
        className={Style.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={Style.erro}>{error}</p>}
    </div>
  );
};

export default Input;

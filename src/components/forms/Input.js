import React from 'react';
import Style from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={Style.wrapper}>
      <label htmlFor={name} className={Style.label}>
        {label}
      </label>
      <input id={name} name={name} type={type} className={Style.input} />
      <p className={Style.erro}>Error</p>
    </div>
  );
};

export default Input;

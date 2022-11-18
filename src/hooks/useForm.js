import React, { useState } from 'react';

const validation = {
  usuario: {
    regex: /^[a-záàâãéèêíïóôõöúçñ ]+$/i,
    message: 'Utilize apenas letras.',
  },
};

const useForm = (type) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  function validate(value) {
    if (type === false) return true;
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else if (validation[type] && !validation[type].regex.test(value)) {
      setError(validation[type].message);
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    error,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
  };
};

export default useForm;

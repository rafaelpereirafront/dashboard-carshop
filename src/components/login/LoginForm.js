import React, { useState } from 'react';
import Style from '../style_module/Header.module.css';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const url = '';

  function handleSubmit(event) {
    event.preventDefault();
    fetch('url', {
      method: 'POST',
    }).then((response) => {
      console.log(response);
      return;
    });
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={({ target }) => setUserName(target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default LoginForm;

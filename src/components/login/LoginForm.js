import React, { useState } from 'react';
import Button from '../forms/Button';
import Input from '../forms/Input';
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
      <h2>Login</h2>
      <form action="" onSubmit={handleSubmit} className={Style.form}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Senha" type="password" name="password" />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;

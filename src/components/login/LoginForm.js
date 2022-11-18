import React, { useState } from 'react';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Style from '../style_module/Header.module.css';

const LoginForm = () => {
  const username = useForm('usuario');
  const password = useForm();

  const url = '';
  function handleSubmit(event) {
    if (username.validate() && password.validate) {
      event.preventDefault();
      fetch(url, {
        method: 'POST',
      }).then((response) => {
        console.log(response);
        return;
      });
    }
  }

  return (
    <section className={Style.loginForm}>
      <h3 className={Style.title}>Login</h3>
      <form action="" onSubmit={handleSubmit} className={Style.form}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Entrar</Button>
      </form>
    </section>
  );
};

export default LoginForm;

import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Style from '../style_module/Header.module.css';

const LoginForm = () => {
  const username = useForm('usuario');
  const password = useForm();

  function HandleClickButton() {
    console.log(username);
  }

  function HandleSubmit(event) {
    if (username.validate() && password.validate) {
      //função sem dados e incompleta
      event.preventDefault();
      fetch('', {
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
      <form action="" onSubmit={HandleSubmit} className={Style.form}>
        <div className={Style.form}>
          <Input label="Usuário" type="text" name="username" {...username} />
          <Input label="Senha" type="password" name="password" {...password} />
          <Button onClick={() => HandleClickButton()}>Entrar</Button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;

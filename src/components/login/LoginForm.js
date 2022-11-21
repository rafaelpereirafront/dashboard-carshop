import React from 'react';
import useForm from '../../hooks/useForm';
import Button from '../forms/Button';
import Input from '../forms/Input';
import Style from '../style_module/Header.module.css';

const LoginForm = () => {
  const username = useForm('usuario');
  const password = useForm();

  function HandleClickButton() {
    //função sem dados e incompleta
  }

  return (
    <section className={Style.login_form}>
      <h2 className={Style.login_title}>Login</h2>
      <form action="" className={Style.form}>
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

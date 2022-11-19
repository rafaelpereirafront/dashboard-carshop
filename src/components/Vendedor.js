import React, { useState } from 'react';
import Axios from 'axios';
import useForm from '../hooks/useForm';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';

const Vendedor = () => {
  // const nome = useForm('usuario');
  // const sobrenome = useForm('usuario');
  // const cidade = useForm('usario');

  const [values, setValues] = useState();
  const HandleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  function HandleSubmit(event) {
    event.preventDefault();
  }

  const HandleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      nome: values.name,
      sobrenome: values.sobrenome,
      cidade: values.cidade,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <>
      <section className={Style.inputs}>
        <div className="block">
          <form action="" onSubmit={HandleSubmit}>
            <div className={Style.wrapper}>
              <div className={Style.wrapper}>
                <Input
                  label="Nome"
                  name="name"
                  type="text"
                  onChange={HandleChangeValues}
                />
                <Input
                  label="Sobrenome"
                  name="sobrenome"
                  type="text"
                  onChange={HandleChangeValues}
                />
                <Input
                  label="Cidade"
                  name="cidade"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>

              <Button onClick={() => HandleClickButton()}>
                Cadastrar Vendor
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Vendedor;

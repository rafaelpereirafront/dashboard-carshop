import React from 'react';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';

const Vendas = () => {
  return (
    <>
      <section className="contain">
        <div className="block">
          <form action="">
            <div className={Style.wrapper}>
              <Input label="Data" type="text" />
              <Input label="Modelo" type="text" />
              <Input label="Nome do Vendedor" type="text" />
              <Input label="Sobrenome" type="text" />
              <Input label="Cidade" type="text" />
              <Input label="Preço" type="text" />
              <Button>Cadastrar Vendor</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Vendas;

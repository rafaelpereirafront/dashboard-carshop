import React from 'react';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';

const Cars = () => {
  return (
    <>
      <section className="contain">
        <div className="block">
          <form action="">
            <div className={Style.wrapper}>
              <Input label="Imagem" type="text" />
              <Input label="Categoria" type="text" />
              <Input label="Modelo" type="text" />
              <Input label="Ano" type="text" />
              <Input label="Preço" type="text" />
              <Input label="Condição" type="text" />
              <Button>Cadastrar Carro</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cars;

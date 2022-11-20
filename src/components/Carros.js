import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';
import { DataElementCar } from './dataElement/DataElement';

const Carros = () => {
  const [values, setValues] = useState();
  const [list, setList] = useState();

  const HandleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const HandleClickButton = () => {
    Axios.post('http://localhost:3001/registerCar', {
      categoria: values.categoria,
      modelo: values.modelo,
      ano: values.ano,
      preco: values.preco,
      condicao: values.condicao,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getCardsCar').then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <>
      <section className={Style.inputs}>
        <div className="block">
          <form action="">
            <div className={Style.grid}>
              <div>
                <Input
                  label="Categoria"
                  name="categoria"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Modelo"
                  name="modelo"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Ano"
                  name="ano"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Preço R$"
                  name="preco"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Novo/Usado"
                  name="condicao"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Imagem"
                  name="imagem"
                  type="file"
                  onChange={HandleChangeValues}
                />
              </div>
            </div>
            <Button onClick={() => HandleClickButton()}>Cadastrar Carro</Button>
          </form>
        </div>
        <div className="contain">
          {typeof list !== 'undefined' &&
            list.map((value, key) => {
              return (
                <DataElementCar
                  key={key}
                  listCard={list}
                  setListCard={setList}
                  categoria={value.categoria}
                  modelo={value.modelo}
                  ano={value.ano}
                  preco={value.preco}
                  condicao={value.condicao}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Carros;

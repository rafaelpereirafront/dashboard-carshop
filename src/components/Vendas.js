import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';
import { DataElementVenda } from './dataElement/DataElement';

const Vendas = () => {
  const [values, setValues] = useState();
  const [list, setList] = useState();

  const HandleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const HandleClickButton = () => {
    Axios.post('http://localhost:3001/registerVenda', {
      data: values.data,
      modelocarro: values.modelocarro,
      nome: values.nome,
      sobrenome: values.sobrenome,
      cidade: values.cidade,
      preco: values.preco,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getCardsVenda').then((response) => {
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
                  label="Data"
                  name="data"
                  type="date"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Modelo"
                  name="modelocarro"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Nome do Vendedor"
                  name="nome"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Sobrenome"
                  name="sobrenome"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Cidade"
                  name="cidade"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
              <div>
                <Input
                  label="Preço"
                  name="preco"
                  type="text"
                  onChange={HandleChangeValues}
                />
              </div>
            </div>
            <Button onClick={() => HandleClickButton()}>
              Cadastrar Vendas
            </Button>
          </form>
        </div>
        <div className="contain">
          {typeof list !== 'undefined' &&
            list.map((value, key) => {
              {
                console.log(value);
              }
              return (
                <DataElementVenda
                  key={key}
                  listCard={list}
                  setListCard={setList}
                  data={value.data}
                  modelocarro={value.modelocarro}
                  nome={value.nome}
                  sobrenome={value.sobrenome}
                  cidade={value.cidade}
                  preco={value.preco}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Vendas;

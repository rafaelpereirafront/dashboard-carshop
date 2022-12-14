import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from './forms/Button';
import Input from './forms/Input';
import Style from './style_module/InputHeader.module.css';
import StyleTable from './dataElement/DataTable.module.css';
import { DataElementVendedor } from './dataElement/DataTable';

const Vendedor = () => {
  const [values, setValues] = useState();
  const [list, setList] = useState();

  const HandleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const HandleClickButton = () => {
    Axios.post('http://localhost:3001/register', {
      nome: values.name,
      sobrenome: values.sobrenome,
      cidade: values.cidade,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get('http://localhost:3001/getCards').then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <>
      <section className={Style.inputs}>
        <div className="contain">
          <div className="block_line">
            <form action="">
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
                  Cadastrar Vendedor
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="contain">
          <h1>Cadastro de Vendedores</h1>
          <table className={StyleTable.table}>
            <thead>
              <tr>
                <th className={StyleTable.table_title}>#</th>
                <th className={StyleTable.table_title}>Nome</th>
                <th className={StyleTable.table_title}>Sobrenome</th>
                <th className={StyleTable.table_title}>Cidade</th>
              </tr>
            </thead>
            {typeof list !== 'undefined' &&
              list.map((value, key) => {
                return (
                  <tbody key={key}>
                    <tr>
                      <DataElementVendedor
                        key={key}
                        listCard={list}
                        setListCard={setList}
                        id={value.idvendedor}
                        nome={value.nome}
                        sobrenome={value.sobrenome}
                        cidade={value.cidade}
                      />
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </div>
      </section>
    </>
  );
};

export default Vendedor;

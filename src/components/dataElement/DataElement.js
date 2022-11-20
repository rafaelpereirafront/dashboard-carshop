import React from 'react';
import StyleTable from './DataElement.module.css';

export function DataElementVendedor(props) {
  return (
    <>
      <td className={StyleTable.table_line}>{props.id}</td>
      <td className={StyleTable.table_line}>{props.nome}</td>
      <td className={StyleTable.table_line}>{props.sobrenome}</td>
      <td className={StyleTable.table_line}>{props.cidade}</td>
    </>
  );
}

export function DataElementCar(props) {
  return (
    <>
      <p>{props.categoria}</p>
      <p>{props.modelo}</p>
      <p>{props.ano}</p>
      <p>{props.preco}</p>
      <p>{props.condicao}</p>
    </>
  );
}

export function DataElementVenda(props) {
  console.log();
  return (
    <>
      <p>{props.data}</p>
      <p>{props.modelocarro}</p>
      <p>{props.nome}</p>
      <p>{props.sobrenome}</p>
      <p>{props.cidade}</p>
      <p>{props.preco}</p>
    </>
  );
}

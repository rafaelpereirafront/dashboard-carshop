import React from 'react';
import StyleTable from './DataTable.module.css';

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
      <td className={StyleTable.table_line}>{props.id}</td>
      <td className={StyleTable.table_line}>{props.categoria}</td>
      <td className={StyleTable.table_line}>{props.modelo}</td>
      <td className={StyleTable.table_line}>{props.ano}</td>
      <td className={StyleTable.table_line}>{props.preco}</td>
      <td className={StyleTable.table_line}>{props.condicao}</td>
    </>
  );
}

export function DataElementVenda(props) {
  return (
    <>
      <td className={StyleTable.table_column_nome}>{props.id}</td>
      <td className={StyleTable.table_line}>{props.data}</td>
      <td className={StyleTable.table_line}>{props.mes}</td>
      <td className={StyleTable.table_line}>{props.modelocarro}</td>
      <td className={StyleTable.table_line}>{props.nome}</td>
      <td className={StyleTable.table_line}>{props.sobrenome}</td>
      <td className={StyleTable.table_line}>{props.cidade}</td>
      <td className={StyleTable.table_line}>{props.preco}</td>
    </>
  );
}

import React from 'react';
import StyleTable from './DataElement.module.css';

export default function DataElement(props) {
  return (
    <>
      <td className={StyleTable.table_line}>{props.id}</td>
      <td className={StyleTable.table_line}>{props.nome}</td>
      <td className={StyleTable.table_line}>{props.sobrenome}</td>
      <td className={StyleTable.table_line}>{props.cidade}</td>
    </>
  );
}

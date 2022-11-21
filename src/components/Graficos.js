import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import StyleGrafico from './style_module/Graficos.module.css';
import Style from './style_module/InputHeader.module.css';
import { VictoryBar, VictoryPie } from 'victory';

const Graficos = () => {
  const [loadData, setLoadData] = useState([]);
  const [grafVendedor, setGrafVendedor] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:3001/getCardsVenda').then((response) => {
      setLoadData(response.data);
    });
  }, []);

  React.useEffect(() => {
    const resultadoVendedor =
      typeof loadData !== 'undefined' &&
      loadData.map((value) => {
        return {
          x: `${value.nome} ${value.sobrenome}`,
          y: value.data,
          // y: Number(value.preco),
        };
      });
    setGrafVendedor(resultadoVendedor);
  }, [loadData]);

  return (
    <>
      <section className={Style.inputs}>
        <div className="contain">
          <h1>Relatório Grafico</h1>
          <div className={StyleGrafico.graphic_grid}>
            <div>
              <h3>Resultado Vendedor/Mês</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryPie data={grafVendedor} innerRadius={60} />
              </div>
            </div>
            <div>
              <h3>Total de Vendas/Mês</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryPie data={grafVendedor} />
              </div>
            </div>
            <div>
              <h3>Média das Vendas/Mês</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryPie data={grafVendedor} />
              </div>
            </div>
            <div>
              <h3>Cidades Mais vendidas</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryPie data={grafVendedor} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Graficos;

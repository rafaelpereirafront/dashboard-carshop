import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import StyleGrafico from './style_module/Graficos.module.css';
import Style from './style_module/InputHeader.module.css';
import { VictoryBar, VictoryPie, VictoryChart, VictoryArea } from 'victory';

const Graficos = () => {
  const [loadData, setLoadData] = useState([]);
  const [grafVendedor, setGrafVendedor] = useState(0);
  const [grafPreco, setGrafPreco] = useState(0);
  const [grafMedia, setGrafMedia] = useState(0);
  const [grafCidade, setGrafCidade] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:3001/getCardsVenda').then((response) => {
      setLoadData(response.data);
    });
  }, []);

  React.useEffect(() => {
    const resultadoVendedor = loadData.map((value) => {
      return {
        y: `${value.nome} ${value.sobrenome}`,
        x: value.mes,
      };
    });

    const resultadoPreco = loadData.map((value) => {
      return {
        y: Number(value.preco),
        x: value.mes,
      };
    });
    const resultadoMediaPreco = loadData.map((value, key) => {
      return {
        y: Number(value.preco),
        x: value.mes,
      };
    });

    const resultadoVendasCidade = loadData.map((value) => {
      return {
        x: value.cidade,
        y: value.mes,
      };
    });
    setGrafVendedor(resultadoVendedor);
    setGrafPreco(resultadoPreco);
    setGrafMedia(resultadoMediaPreco);
    setGrafCidade(resultadoVendasCidade);
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
                <VictoryChart
                  padding={{ top: 40, bottom: 40, left: 130, right: 50 }}
                >
                  <VictoryBar
                    alignment="start"
                    data={grafVendedor}
                  ></VictoryBar>
                </VictoryChart>
              </div>
            </div>
            <div>
              <h3>Total de Vendas/Mês</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryChart
                  padding={{ top: 40, bottom: 40, left: 90, right: 90 }}
                >
                  <VictoryBar alignment="start" data={grafPreco}></VictoryBar>
                </VictoryChart>
              </div>
            </div>
            <div>
              <h3>Média das Vendas/Mês</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryChart
                  padding={{ top: 40, bottom: 40, left: 60, right: 50 }}
                >
                  <VictoryArea
                    data={grafMedia}
                    style={{
                      data: { fill: '#ffd199', stroke: '#fb1' },
                    }}
                  ></VictoryArea>
                </VictoryChart>
              </div>
            </div>
            <div>
              <h3>Cidades Mais vendidas</h3>
              <div className={StyleGrafico.graphic_card}>
                <VictoryPie data={grafCidade} innerRadius={60} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Graficos;

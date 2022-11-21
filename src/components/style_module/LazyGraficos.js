import React from 'react';
const Grafico = React.lazy(() => import('../Graficos'));

const LazyGraficos = () => {
  return (
    <React.Suspense fallback={<div></div>}>
      <Grafico />
    </React.Suspense>
  );
};

export default LazyGraficos;

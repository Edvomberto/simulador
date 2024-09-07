import React from 'react';

const TableHeader = ({ cds }) => {
  return (
    <thead>
      <tr>
        <th>Produtos</th>
        <th>ERP</th>
        <th>Destino</th>
        <th>Quantidade</th>
        {cds && cds.map((cd, index) => (
          <th key={index}>{cd.label}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

import React from 'react';

const TableBody = ({ itemsAgrupados, cds, onRowClick }) => {
  return (
    <tbody>
      {itemsAgrupados && itemsAgrupados.map((item, index) => (
        <tr key={index} onClick={() => onRowClick(item)} style={{ cursor: 'pointer' }}>
          <td>{item.itemDescricao}</td>
          <td>{item.erp}</td>
          <td>{item.ufDestino}</td>
          <td>{item.qtdSolicitada}</td>
          {cds && cds.map((cd, cdIndex) => {
            const product = cd.products.find(p => p.productId === item.erp);
            return (
              <td key={cdIndex}>
                {product ? (
                  product.distribution ? (
                    <span style={{ color: 'green' }}>✔️</span>
                  ) : (
                    <span style={{ color: 'red' }}>❌</span>
                  )
                ) : (
                  <span style={{ color: 'gray' }}>N/A</span>
                )}
              </td>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;

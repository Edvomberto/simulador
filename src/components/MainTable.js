import React, { useEffect, useState } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import simulacaoData from '../simulacao.json';
import ProductModal from './ProductModal';
import { useDisclosure } from '@chakra-ui/react';

const MainTable = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra useDisclosure para controlar o modal

  useEffect(() => {
    setData(simulacaoData);
  }, []);

  const handleRowClick = (item) => {
    const productDetails = data.itensAgrupados.find(prod => prod.erp === item.erp);
    setSelectedItem(productDetails);
    onOpen(); // Abre o modal
  };

  return (
    <div className="table-container">
      <h2>Simulação - Mix de Produtos</h2>
      <table>
        <TableHeader cds={data.cds} />
        <TableBody 
          itemsAgrupados={data.itensAgrupados} 
          cds={data.cds}
          onRowClick={handleRowClick}
        />
      </table>

      {/* Modal do produto */}
      {selectedItem && (
        <ProductModal
          item={selectedItem}
          isOpen={isOpen}
          onClose={onClose}
          cds={data.cds}
        />
      )}
    </div>
  );
};

export default MainTable;

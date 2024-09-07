import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Grid,
  GridItem
} from '@chakra-ui/react';

const ProductModal = ({ item, isOpen, onClose, cds }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" scrollBehavior="inside">
      {/* Modal Overlay com leve opacidade */}
      <ModalOverlay bg="blackAlpha.600" />
      
      {/* Modal Content com sombra e bordas arredondadas */}
      <ModalContent bg="white" boxShadow="lg" borderRadius="md">
        <ModalHeader>Detalhes do Produto</ModalHeader>
        <ModalCloseButton />

        {/* ModalBody com rolagem e espaçamento ajustado */}
        <ModalBody maxHeight="400px" overflowY="auto" p={6}>
          <Box mb={4} borderWidth="1px" borderRadius="md" p={4}>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Dados do Produto</h3>
            <p><strong>Produto:</strong> {item.itemDescricao}</p>
            <p><strong>ERP:</strong> {item.erp}</p>
            <p><strong>Destino:</strong> {item.ufDestino}</p>
            <p><strong>Quantidade:</strong> {item.qtdSolicitada}</p>
          </Box>

          {/* Detalhes da Distribuição */}
          <Box>
            <h3 style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Detalhes da Distribuição</h3>
            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {cds.map((cd, index) => (
                <GridItem key={index}>
                  <Box borderWidth="1px" borderRadius="lg" p={3} boxShadow="sm">
                    <p><strong>{cd.label}</strong></p>
                    {cd.products.map(product => (
                      product.productId === item.erp && (
                        <React.Fragment key={product.productId}>
                          <p><strong>Distribuição:</strong> {product.distribution ? 'Sim' : 'Não'}</p>
                          <p><strong>Preço de Venda:</strong> R$ {product.pv.toFixed(2)}</p>
                          <p><strong>Margem:</strong> {product.margin}%</p>
                          <p><strong>Estoque:</strong> {product.stock}</p>
                        </React.Fragment>
                      )
                    ))}
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" onClick={onClose}>
            Fechar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductModal;

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
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent bg="white"> {/* Cor de fundo do modal (branco) */}
        <ModalHeader>Detalhes do Produto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Detalhes do Produto */}
          <Box mb={4} p={4} borderWidth="1px" borderRadius="lg">
            <h3>Dados do Produto</h3>
            <p><strong>Produto:</strong> {item.itemDescricao}</p>
            <p><strong>ERP:</strong> {item.erp}</p>
            <p><strong>Destino:</strong> {item.ufDestino}</p>
            <p><strong>Quantidade:</strong> {item.qtdSolicitada}</p>
          </Box>

          {/* Detalhes da Distribuição */}
          <Box>
            <h3>Detalhes da Distribuição</h3>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
              {cds.map((cd, index) => (
                <GridItem key={index}>
                  <Box borderWidth="1px" borderRadius="lg" p={3}>
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

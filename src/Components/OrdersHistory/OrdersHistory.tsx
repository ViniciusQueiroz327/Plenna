import React from "react";
import {
  Title,
  Subtitle,
  Section,
  TableContainer,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  StatusBadge,
  ActionButton
} from "./style";

const OrdersHistory: React.FC = () => {
  return (
    <>
      <Title>Histórico de Pedidos</Title>
      <Subtitle>Visualize e acompanhe seus pedidos anteriores.</Subtitle>

      <Section>
        <TableContainer>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>ID do Pedido</TableHeader>
                <TableHeader>Data</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader></TableHeader>
              </TableRow>
            </thead>
            <tbody>
              <TableRow>
                <TableCell>#123456</TableCell>
                <TableCell>15 de Julho, 2024</TableCell>
                <TableCell>
                  <StatusBadge type="delivered">Entregue</StatusBadge>
                </TableCell>
                <TableCell>$45.98</TableCell>
                <TableCell>
                  <ActionButton>Ver Detalhes</ActionButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#123455</TableCell>
                <TableCell>28 de Junho, 2024</TableCell>
                <TableCell>
                  <StatusBadge type="shipped">Enviado</StatusBadge>
                </TableCell>
                <TableCell>$29.99</TableCell>
                <TableCell>
                  <ActionButton>Acompanhar</ActionButton>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>#123454</TableCell>
                <TableCell>12 de Maio, 2024</TableCell>
                <TableCell>
                  <StatusBadge type="cancelled">Cancelado</StatusBadge>
                </TableCell>
                <TableCell>$72.50</TableCell>
                <TableCell>
                  <ActionButton>Ver Detalhes</ActionButton>
                </TableCell>
              </TableRow>
            </tbody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
};

export { OrdersHistory };

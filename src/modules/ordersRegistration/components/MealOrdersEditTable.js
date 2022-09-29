import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import MealOrdersEditTableLine from './MealOrdersEditTableLine';

export default function MealOrdersEditTable({ orders, date, meal }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 50 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="center">FIN</TableCell>
            <TableCell align="center">Inscrito?</TableCell>
            <TableCell align="center">Vegano?</TableCell>
            <TableCell align="center">Take away?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders &&
            orders?.map((order) => (
              <MealOrdersEditTableLine order={order} key={order.id} date={date} meal={meal} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

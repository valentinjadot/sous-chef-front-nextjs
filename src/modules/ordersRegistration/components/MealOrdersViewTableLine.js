import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import deadlinesUtil from '../utils/deadlinesUtil';
import styles from './MealOrdersViewTableLine.module.css';

export default function MealOrdersViewTableLine({ order, date, meal }) {
  const { isRegistrationClosed, isTakeAwayClosed } = deadlinesUtil({ date, meal });

  if (!order.isActive || !isRegistrationClosed) return '';

  const veganEmoji = order.isVegan ? '🌱' : '🍗';

  const takeAwayEmoji = () => {
    if (isTakeAwayClosed) {
      return order.isTakeAway ? '📦' : '🍛';
    }
    return '⏱';
  };

  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={order.id}>
      <TableCell component="th" scope="row">
        {order.userName}
      </TableCell>

      <TableCell align="center">
        <span className={styles.emoji}>{veganEmoji}</span>
      </TableCell>

      <TableCell align="center">
        <span className={styles.emoji}>{takeAwayEmoji()}</span>
      </TableCell>
    </TableRow>
  );
}

import React, { useState } from 'react';
import _ from 'lodash';
import DayOrders from './DayOrders';
import OrderFilter from './OrderFilter';

export default function OrdersRegistration({ orders, isJessica }) {
  const [filteredOrders, setFilteredOrders] = useState(orders);

  const handleFilteredOrders = (filtered) => setFilteredOrders(filtered);

  const ordersGroupedByDate = _.groupBy(filteredOrders, (e) => e.executionDate);
  const dates = Object.keys(ordersGroupedByDate);

  return (
    <>
      {!isJessica && <OrderFilter orders={orders} onFilter={handleFilteredOrders} />}

      {ordersGroupedByDate &&
        dates.map((date) => (
          <DayOrders
            date={date}
            dayOrders={ordersGroupedByDate[date]}
            key={date}
            isJessica={isJessica}
          />
        ))}
    </>
  );
}

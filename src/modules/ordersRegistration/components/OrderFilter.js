import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

export default function OrderFilter({ orders, onFilter }) {
  const [nameFilter, setNameFilter] = useState(false);

  const hasFilter = nameFilter && nameFilter.length > 0;
  const isMatchingSearch = (order) => order.userName.toLowerCase().match(nameFilter.toLowerCase());
  const filteredOrders = hasFilter ? orders.filter(isMatchingSearch) : orders;

  useEffect(() => {
    onFilter(filteredOrders);
  }, [filteredOrders]);

  const userNames = [...new Set(orders.map((users) => users.userName))];

  return <SearchBar options={userNames} onChange={setNameFilter} />;
}

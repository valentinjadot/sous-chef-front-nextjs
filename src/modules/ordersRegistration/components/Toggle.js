import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Checkbox from '@mui/material/Checkbox';

import updateOrder from '../api/updateOrder';

export default function Toggle({
  orderId,
  name,
  value,
  disabled = false,
  type = 'switch',
  onChange
}) {
  const [stateValue, setStateValue] = useState(value);

  const components = {
    switch: Switch,
    checkbox: Checkbox
  };

  const handleToggle = () => {
    const changesToOrder = {};
    const newValue = !stateValue;
    changesToOrder[name] = newValue;

    updateOrder({ orderId, changesToOrder });
    setStateValue(newValue);
    if (onChange) {
      onChange();
    }
  };

  const ComponentType = components[type];

  return (
    <ComponentType
      checked={stateValue}
      onChange={() => handleToggle()}
      color="warning"
      disabled={disabled}
      size="large"
    />
  );
}

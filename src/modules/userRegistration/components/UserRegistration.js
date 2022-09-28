import React, { useState } from 'react';
import { mutate } from 'swr';
import Button from '@mui/material/Button';
import NewUserDialog from './NewUserDialog';

export default function UserRegistration() {
  const [openForm, setOpenForm] = useState(false);

  const refreshOrders = () => {
    mutate();
  };

  return (
    <>
      <Button variant="contained" onClick={() => setOpenForm(true)}>
        Agregar invitado
      </Button>

      <NewUserDialog open={openForm} onClose={() => setOpenForm(false)} onNewUser={refreshOrders} />
    </>
  );
}

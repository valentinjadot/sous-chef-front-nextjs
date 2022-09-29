import React, { useState } from 'react';
import Button from '@mui/material/Button';
import NewUserDialog from './NewUserDialog';

export default function UserRegistration({ onNewUser }) {
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpenForm(true)}>
        Agregar invitado
      </Button>

      <NewUserDialog open={openForm} onClose={() => setOpenForm(false)} onNewUser={onNewUser} />
    </>
  );
}

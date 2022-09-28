import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import finLogo from '../../public/finLogo.gif';
import OrdersRegistration from '../modules/ordersRegistration';
import NewUserDialog from '../modules/ordersRegistration/components/NewUserDialog';
import useOrders from '../modules/ordersRegistration/hooks/useOrders';
import UserRegistration from '../modules/userRegistration';

export default function Home() {
  // const [openForm, setOpenForm] = useState(false);
  const { orders, error } = useOrders();

  if (error) {
    return <h1>Error!</h1>;
  }

  if (!orders) {
    return <h1>Loading...</h1>;
  }

  return (
    <React.StrictMode>
      <div className={styles.container}>
        <div className="App">
          <Head>
            <title>SousChef</title>
            <meta name="description" content="App para organizar almuerzo y cena en la FIN" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className={styles.main}>
            <h1 className={styles.title}>SousChef</h1>

            <UserRegistration />

            {/* <Button variant="contained" color="warning" onClick={() => setOpenForm(true)}>
              Agregar invitado
            </Button> */}

            <h3>Comidas! 🐷 🥬</h3>

            <OrdersRegistration orders={orders} />

            <Image src={finLogo} alt="finLogo" />

            {/* <NewUserDialog open={openForm} onClose={() => setOpenForm(false)} /> */}
          </main>

          <footer className={styles.footer} />
        </div>
      </div>
    </React.StrictMode>
  );
}

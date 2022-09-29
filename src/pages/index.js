import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';
import finLogo from '../../public/finLogo.gif';
import OrdersRegistration from '../modules/ordersRegistration/components/OrdersRegistration';
import useOrders from '../modules/ordersRegistration/hooks/useOrders';
import UserRegistration from '../modules/userRegistration/components/UserRegistration';

export default function Home() {
  const { orders, error, refreshOrders } = useOrders();

  if (error) {
    return <h1>Error!</h1>;
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

            <UserRegistration onNewUser={refreshOrders} />

            <h3>Comidas! 🐷 🥬</h3>

            {orders ? <OrdersRegistration orders={orders} /> : <h1>Cargando los datos...</h1>}

            <Image src={finLogo} alt="finLogo" />
          </main>

          <footer className={styles.footer} />
        </div>
      </div>
    </React.StrictMode>
  );
}

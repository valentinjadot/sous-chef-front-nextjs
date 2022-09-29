import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Home.module.css';
import finLogo from '../../public/finLogo.gif';
import OrdersRegistration from '../modules/ordersRegistration';
import useOrders from '../modules/ordersRegistration/hooks/useOrders';

export default function Home() {
  const { orders, error } = useOrders();

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
            <h1 className={styles.title}>Hola Jessica :)</h1>

            <h3>
              Gracias por tu ayuda con Hugo! Aquí van las inscripciones de los próximos días 🐷 🥬
            </h3>

            {orders ? (
              <OrdersRegistration orders={orders} isJessica />
            ) : (
              <h1>Cargando los datos...</h1>
            )}

            <Image src={finLogo} alt="finLogo" />
          </main>

          <footer className={styles.footer} />
        </div>
      </div>
    </React.StrictMode>
  );
}

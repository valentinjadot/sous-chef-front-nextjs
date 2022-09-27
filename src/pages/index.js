import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SousChef</title>
        <meta name="description" content="App para organizar almuerzo y cena en la FIN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          SousChef
        </h1>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

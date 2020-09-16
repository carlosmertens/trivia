import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trivia Game</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to the Trivia Challange!</h1>

        <p className={styles.description}>
          You will be presented with 10 True or False questions.
        </p>

        <div className={styles.grid}>
          <a
            href='https://github.com/vercel/next.js/tree/master/examples'
            className={styles.card}>
            <h3>BEGIN &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

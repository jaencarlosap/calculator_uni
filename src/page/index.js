import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora</title>
        <meta name='description' content='calculadora' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bienvenidos a Calcuni</h1>

        <p className={styles.subtitle}>Integrantes :</p>
        <ul>
          <li>Erika Lorena Barrios Sierra</li>
          <li>Jaen Carlos Aponte Palacio</li>
          <li>Cristian Andres Rodriguez Murcia</li>
        </ul>

        <div className={styles.grid}>
          <button
            className={styles.buttonSubmit}
            onClick={() => router.push('/calc')}
          >
            Iniciar
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://github.com/janper231'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <span className={styles.logo}>
            <Image src='/github.svg' alt='github Logo' width={72} height={16} />
          </span>
          @janper231
        </a>
      </footer>
    </div>
  );
}

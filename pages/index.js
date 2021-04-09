import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          dolorem officia ipsum corporis maxime dignissimos nisi, ullam vero
          consectetur iste, libero id totam nostrum dolores impedit qui saepe
          optio quis ducimus sit et delectus corrupti? Tempora aperiam eaque
          modi? Suscipit, maiores perspiciatis, excepturi, pariatur nesciunt
          optio deleniti qui corporis exercitationem sit natus id dicta nemo
          commodi cupiditate nisi! Suscipit odio obcaecati dolore aperiam? In
          voluptatem fuga unde, neque modi aut?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint vel
          quaerat obcaecati nemo laudantium? Eius officiis ea doloribus illum
          fugit.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}

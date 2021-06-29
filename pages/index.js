import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>ShoeList | Home</title>
        <meta 
          name="keywords"
          content="jimmy's shoes"
        />
      </Head>
      <div>
        <h1 className={styles.title}>HomePage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam sem, 
          commodo sit amet facilisis non, ultrices ac arcu.
        </p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam sem, 
          commodo sit amet facilisis non, ultrices ac arcu.
        </p>
        <Link href="/jimmychose">
          <a className={styles.btn}>See Shoes Listing</a>
        </Link>
      </div>
    </>
  )
}

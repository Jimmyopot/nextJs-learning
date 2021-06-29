import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam sem, 
         commodo sit amet facilisis non, ultrices ac arcu.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam sem, 
         commodo sit amet facilisis non, ultrices ac arcu.
      </p>
      <Link href="/jimmychose">
        <a>See Shoes Listing</a>
      </Link>
      <Footer />
    </div>
  )
}

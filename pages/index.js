import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Hulu Clone with nextjs and tailwindcss and heroicons" />
        <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsmUU2P-cE7uVynU0ztPtXC5tueLB19Cjdg&usqp=CAU" />
      </Head>
      <Header />
    </div>
  )
}

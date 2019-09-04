import Link from 'next/link';
import Head from 'next/head';
import Filter from '../components/Filter';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Filter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      </Head>
      <div className="filter">
        <Filter />
      </div>
      <style jsx>{`
        .filter {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Home

import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Todo MVC</title>
      </Head>

      <main>
        <h1 className="title">Welcome</h1>
      </main>
    </div>
  );
}

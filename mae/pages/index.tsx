import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

interface HomeProps {}

const Home:React.FC<HomeProps> = () =>  {
  return (
    <div className={styles.container}>
      <Head>
        <title>Comrade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*
        <Nav />
        <Blogs /> --> search bar , dropdown, items --> card component with special for events
      */}

    </div>
  );
}

export default Home;

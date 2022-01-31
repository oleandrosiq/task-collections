import React, { useEffect } from "react";
import Head from 'next/head';
import router from "next/router";

export default function Home() {
  useEffect(() => {
    router.push('/dashboard');
  }, []);

  return (
    <Head>
      <title>Dashboard - Collections</title>
    </Head>
  );
}
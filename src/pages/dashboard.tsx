import Head from 'next/head';
import React from 'react';
import { Dashboard as Content } from "../contents/Dashboard";

export default function Dashboard() {
  return (
    <React.Fragment>
      <Head>
        <title>Dashboard - Collections</title>
      </Head>
      <Content />
    </React.Fragment>
  )
}
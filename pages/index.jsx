import React from 'react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Vishnu Tech Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Hello World
        </h1>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Vercel
        </a>
      </footer>
    </div>
  )
}

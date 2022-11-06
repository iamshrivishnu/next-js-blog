import React from "react";
import Link from "next/link";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return <>
    <header className="h-18 bg-opacity-40 bg-gray-900 dark:bg-gray-500 flex flex-row">
      <Link
        href="/"
        className="font-oxygen text-xl font-bold p-5 flex-grow-0">
        {"Tech Blog"}
      </Link>
      <nav className="flex flex-row justify-end flex-grow">
        <Link href="/article" className="font-oxygen text-lg p-5">
          {"Articles"}
        </Link>
        <Link href="/author" className="font-oxygen text-lg p-5">
          {"Authors"}
        </Link>
      </nav>
    </header>
    <main className="container mx-auto px-4">
      <Component {...pageProps} />
    </main>
  </>;
};
export default MyApp;

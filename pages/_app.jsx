import React from "react";
import Link from "next/link";
import "styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <header className="h-18 bg-opacity-40 bg-gray-800 dark:bg-gray-200 flex flex-row">
        <Link href="/" passHref>
          <a className="font-oxygen text-xl font-bold p-5 flex-grow-0">
            {"Tech Blog"}
          </a>
        </Link>
        <nav className="flex flex-row justify-end flex-grow">
          <Link href="/article" passHref>
            <a className="font-oxygen text-lg p-5">{"Article"}</a>
          </Link>
          <Link href="/author" passHref>
            <a className="font-oxygen text-lg p-5">{"Author"}</a>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto px-4">
        <Component {...pageProps} />
      </main>
    </>
  );
};
export default MyApp;

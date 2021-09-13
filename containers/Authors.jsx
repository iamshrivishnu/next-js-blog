import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "lib/sanity";

const Authors = ({ authors }) => (
  <>
    <Head>
      <title>{"Authors | Tech Blog"}</title>
    </Head>
    <h1 className="text-left font-oxygen text-2xl font-bold my-3 mx-4 md:mx-6">
      {"Authors"}
    </h1>
    <div className="flex flex-col flex-wrap justify-around p-3">
      {authors.map(({ _id, name, authorImage, slug }) => (
        <div
          key={_id}
          className="p-5 border-black dark:border-white border rounded w-full md:w-1/4 flex flex-row justify-evenly"
        >
          <div className="w-24 h-24">
            <Image
              src={urlFor(authorImage).height(150).width(150).url()}
              alt={name}
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="pl-3 flex flex-col justify-around">
            <h2 className="text-left font-oxygen text-lg font-bold">{name}</h2>
            <Link href={`/author/${slug.current}`}>
              <a className="text-blue-500 hover:underline font-firaSans">
                {"View Profile"}
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
);

Authors.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      authorImage: PropTypes.object.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Authors;

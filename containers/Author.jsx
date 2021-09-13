import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import { PortableText, urlFor } from "lib/sanity";

const Author = ({ author: { name, authorImage, details } }) => (
  <>
    <Head>
      <title>{`${name} | Author`}</title>
    </Head>
    <h1 className="text-left font-oxygen text-2xl font-bold my-3 mx-4 md:mx-6">
      {name}
    </h1>
    <div className="md:flex md:flex-row">
      <div className="mx-auto md:w-1/3">
        <Image
          src={urlFor(authorImage).height(500).width(500).url()}
          alt={name}
          width={500}
          height={500}
        />
      </div>
      <div className="portableText font-oxygen md:w-2/3 md:px-6 mt-3 md:mt-0">
        <PortableText blocks={details} />
      </div>
    </div>
  </>
);

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    authorImage: PropTypes.object.isRequired,
    details: PropTypes.array.isRequired,
  }).isRequired,
};

export default Author;

import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "lib/sanity";

const Articles = ({ articles }) => (
  <>
    <Head>
        <title>{"Articles | Tech Blog"}</title>
    </Head>
    <h1 className="text-left font-oxygen text-2xl font-bold my-3 mx-4 md:mx-6">
      {"Articles"}
    </h1>
    <div className="flex flex-col flex-wrap justify-around p-3">
      {articles.map(
        ({ _id, title, author, bannerImage, slug }) => (
          <Link key={_id} href={`/article/${slug.current}`} passHref>
            <div className="p-5 border-black dark:border-white border rounded w-full md:w-1/4">
              <div className="w-full h-36 relative my-3">
                <Image
                  src={urlFor(bannerImage).url()}
                  alt={title}
                  layout="fill"
                  objectFit="scale-down"
                />
              </div>
              <h2 className="text-left font-oxygen text-2xl font-bold mt-3 mx-4">
                {title}
              </h2>
              <h3 className="text-right font-oxygen">{`by ${author.name}`}</h3>
            </div>
          </Link>
        )
      )}
    </div>
  </>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      bannerImage: PropTypes.object.isRequired,
      slug: PropTypes.shape({
        current: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default Articles;

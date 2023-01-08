import React from "react";
import Link from "next/link";
import { ArticleCard } from "lib/get-article";
import Picture from "./Picture";

const ArticleCard = ({ _id, title, author, bannerImage, slug }: ArticleCard) => (
    <Link key={_id} href={`/article/${slug.current}`}>
        <div className="p-5 border-black dark:border-white border rounded w-full md:w-1/4">
            <div className="w-full h-36 relative my-3">
                <Picture
                    src={JSON.stringify(bannerImage)}
                    alt={title} />
            </div>
            <h2 className="text-left font-oxygen text-2xl font-bold mt-3 mx-4">
                {title}
            </h2>
            <h3 className="text-right font-oxygen">{`by ${author.name}`}</h3>
        </div>
    </Link>
);

export default ArticleCard;

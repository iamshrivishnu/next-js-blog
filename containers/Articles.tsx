import React from "react";
import ArticleCard from "components/ArticleCard";
import { ArticleCard as ArticleCardType } from "lib/get-article";

interface ArticlesProps {
  articles: ArticleCardType[];
}

function Articles({ articles }: ArticlesProps) {
  return (
    <>
      <h1 className="text-left font-oxygen text-2xl font-bold my-3 mx-4 md:mx-6">Articles</h1>
      <div className="flex flex-col flex-wrap justify-around p-3">
        {articles.map(({ _id, title, author, bannerImage, slug }) => (
          <ArticleCard _id={_id} title={title} author={author} bannerImage={bannerImage} slug={slug} />
        ))}
      </div>
    </>
  )
};

export default Articles;

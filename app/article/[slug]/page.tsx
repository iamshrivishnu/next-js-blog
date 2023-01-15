import React from 'react'
import Articles from 'containers/Articles';
import Fallback from "containers/Fallback";
import { getArticleCards } from "lib/get-article";

export default async function Page() {
    const articles = await getArticleCards();

    if (!articles.length) return Fallback;
    else return <Articles articles={articles} />
};

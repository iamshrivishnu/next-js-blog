import React from 'react'
import Homepage from "containers/Homepage";
import Fallback from "containers/Fallback";
import { getArticleCards } from "lib/get-article";

export default async function Page() {
    const articles = await getArticleCards(3);

    if (!articles.length) return Fallback;
    else return <Homepage articles={articles} />
};

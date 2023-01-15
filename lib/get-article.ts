import { client } from "lib/sanity-client";

export interface SanityImage {
    _type: string;
    asset: {
        _ref: string;
        _type: string;
    }
}

export interface ArticleCard {
    _id: string;
    author: {
        name: string;
    },
    bannerImage: SanityImage,
    slug: {
        _type: string;
        current: string;
    },
    title: string;

}

export async function getArticleCards(count?: number): Promise<ArticleCard[]> {
    let query = `*[_type == "article" && defined(slug.current)]{
        _id,
        title,
        slug,
        author->{
          name
        },
        bannerImage
      }`;
    if (count) {
        query += `[0...${count}]`;
    }
    const articles: ArticleCard[] = await client.fetch(query);
    return articles;
}
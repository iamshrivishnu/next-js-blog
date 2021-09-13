import { sanityClient } from "lib/sanity";
import Articles from "containers/Articles";
import Fallback from "containers/Fallback";

const articlesQuery = `*[_type == "article" && defined(slug.current)]{
      _id,
      title,
      slug,
      author->{
        name
      },
      bannerImage
    }`;

export async function getStaticProps() {
  const articles = await sanityClient.fetch(articlesQuery);
  return { props: { articles } };
}

export default Fallback(Articles);

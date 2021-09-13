import { sanityClient } from "lib/sanity";
import Homepage from "containers/Homepage";
import Fallback from "containers/Fallback";

const articlesQuery = `*[_type == "article" && defined(slug.current)]{
      _id,
      title,
      slug,
      author->{
        name
      },
      bannerImage
    }[0...3]`;

export async function getStaticProps() {
  const articles = await sanityClient.fetch(articlesQuery);
  return { props: { articles } };
}

export default Fallback(Homepage);

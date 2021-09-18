import { sanityClient } from "lib/sanity";
import Article from "containers/Article";
import Fallback from "containers/Fallback";

const articleQuery = `*[_type == "article" && slug.current == $slug]{
      title,
      author->{
        name,
        slug,
        authorImage
      },
      bannerImage,
      body
    }[0]`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "article" && defined(slug.current)]{
      "params": {
        "slug": slug.current
      }
    }`
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const article = await sanityClient.fetch(articleQuery, { slug });
  return { props: { article } };
}

export default Fallback(Article);

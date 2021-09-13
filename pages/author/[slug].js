
import {
    sanityClient
  } from "lib/sanity";
  import Author from 'containers/Author'
  import Fallback from 'containers/Fallback'
  
  const authorQuery = `*[_type == "author" && slug.current == $slug]{
        _id,
        name,
        authorImage,
        details
      }[0]`;
  
  export async function getStaticPaths() {
    const paths = await sanityClient.fetch(
      `*[_type == "author" && defined(slug.current)]{
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
    const author = await sanityClient.fetch(authorQuery, { slug });
    return { props: { author } };
  }
  
  export default Fallback(Author)
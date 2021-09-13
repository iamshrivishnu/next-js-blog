
import {
    sanityClient
  } from "lib/sanity";
  import Authors from 'containers/Authors'
  import Fallback from 'containers/Fallback'
  
  const authorsQuery = `*[_type == "author" && defined(slug.current)]{
        _id,
        name,
        authorImage,
        slug
      }`;
  
  export async function getStaticProps() {
    const authors = await sanityClient.fetch(authorsQuery);
    return { props: { authors } };
  }
  
  export default Fallback(Authors)
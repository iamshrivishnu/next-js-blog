import { sanityClient } from "lib/sanity";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const paths = await sanityClient.fetch(
        `*[(_type == "article" || _type == "author") && defined(slug.current)]{
                "url": _type+"/"+slug.current,
                "updated": _updatedAt
            }`
      );
      const sitemapData = `<?xml version="1.0" encoding="UTF-8"?>
              <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
              ${paths.map(
                (path) => `<url>
              <loc>https://${process.env.DOMAIN}/${path.url}</loc>
              <lastmod>${path.updated.replace(/T.*/, "")}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>0.9</priority>
           </url>`
              ).join('\n')}   
              </urlset>`.replace(/[^\S\n]{2,}/g, "");

      res.status(200).setHeader("Content-Type", "text/plain").send(sitemapData);
    } catch (e) {
      res.status(500).send(JSON.stringify(e));
    }
  } else {
    res.status(403).send("Unauthorized");
  }
}

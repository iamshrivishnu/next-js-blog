const robotsText = `Sitemap: https://${process.env.DOMAIN}/sitemap.xml
User-agent: *
Allow: /*
Disallow: /api/*
`

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).setHeader('Content-Type', 'text/plain').send(robotsText);
  } else {
    res.status(403).send("Unauthorized");
  }
}

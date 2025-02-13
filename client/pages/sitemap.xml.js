export async function getServerSideProps({ res }) {
  const baseUrl = "https://vitaapsite.lv";

  const paths = [
    "/",
    "/izglitiba",
    "/darba-pieredze",
    "/pakalpojumi",
    "/maksa",
    "/kontakti",
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${paths
      .map((path) => {
        return `
        <url>
          <loc>${baseUrl}${path}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
        `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
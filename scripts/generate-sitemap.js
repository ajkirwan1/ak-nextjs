const fs = require("fs");
const path = require("path");

const domain = "https://ak-development.com.pl";

const pages = ["", "contact", "thank-you", "who-we-are", "work"];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const loc = page ? `/${page}` : "";
    return `<url><loc>${domain}${loc}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
fs.writeFileSync(sitemapPath, sitemap);

console.log("✅ sitemap.xml wygenerowany w " + sitemapPath);

const env = require("./env");
const path = require("path");
const fs = require("fs");

const links = async () => {
  return new Promise(async (resolve) => {
    const links = [
      "/",
      "/subscribe/",
      "/privacy-policy/",
      "/terms-and-conditions/",
      "/cookies-policy/",
      "/copyright-policy/",
      "/calendar/",
    ];

    await fetch(env.api.host + "/ssr")
      .then(r => r.json())
      .then((r) => {
        for (const [ section, urls ] of Object.entries(r)) {
          urls.forEach(url => {
            links.push("/" + section + "/" + url + "/");
          });
        }
      });

    resolve(links);
  });
};

const robotsTxt = async () => {
  return new Promise(async (resolve) => {
    fetch(env.api.host + "/ssr/robotsTxt")
      .then(r => resolve(r.text()));
  });
};

const sitemap = async () => {
  return new Promise(async (resolve) => {
    let xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    (await links()).forEach((url) => {
      xml += `<url>`;
      xml += `<loc>${env.face.host}${url}</loc>`;
      xml += `<lastmod>${(new Date()).toISOString()}</lastmod>`;
      xml += `<changefreq>weekly</changefreq>`;
      xml += `<priority>0.5</priority>`;
      xml += `</url>`;
    });

    xml += `</urlset>`;
    resolve(xml);
  });
};

const read = async (url) => {
  return new Promise((resolve, reject) => {
    const folder = path.resolve(__dirname + "/../dist/rendered" + url);
    const filePath = folder + "/index.html";

    if (fs.existsSync(filePath)) {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          reject();
        }
        resolve(data);
      });
    } else {
      reject();
    }
  });
};

module.exports = {
  read,
  links,
  robotsTxt,
  sitemap,
};

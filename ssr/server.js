const express = require("express");
const fs = require("fs");
const path = require("path");
const mmm = require("mmmagic");
const env = require("./env");
const detector = require("./detector");
const { robotsTxt, sitemap, read, links } = require("./content");

const magic = new mmm.Magic(mmm.MAGIC_MIME_TYPE);
const app = express();

app.get("/sitemap.xml", (req, res) => {
  sitemap().then(s => res.header("Content-type", "application/xml").send(s));
});

app.get("/robots.txt", (req, res) => {
  robotsTxt().then(r => res.header("Content-type", "text/plain").send(r));
});

app.get("/favicon.ico", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/../dist/artdevivre/assets/favicon.png"));
});

app.get("*", (req, res) => {
  let url = req.baseUrl + req.path;

  const filePath = path.resolve(__dirname + "/../dist/artdevivre/" + url);

  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    magic.detectFile(filePath, (err, result) => {
      if (err) {
        throw err;
      }
      const extension = filePath.split(".")[filePath.split(".").length - 1];
      if (extension === "js") {
        result = "text/javascript";
      } else if (extension === "css") {
        result = "text/css";
      } else if (extension === "svg") {
        result = "image/svg+xml";
      }

      res.header("Content-type", result);
      res.sendFile(filePath);
    });
    return;
  }

  if (detector(req.header("User-agent")).Bot) {
    read(url)
      .then((data) => res.send(data))
      .catch((err) => res.sendFile(path.resolve(__dirname + "/../dist/artdevivre/index.html")));

  } else {

    url = url.split('/').filter(n => n).join('/').toLowerCase();
    links().then((links) => {
      let founded = false;
      links.forEach((link) => {
        link = link.split('/').filter(n => n).join('/').toLowerCase();
        if (link === url) {
          founded = true;
        }
      });

      if (!founded) {
        res.status(404);
      }
      res.sendFile(path.resolve(__dirname + "/../dist/artdevivre/index.html"));
    });
  }
});

app.listen(env.server.port, env.server.host, () => {
  console.log(`Listening on port ${env.server.port}`);
});

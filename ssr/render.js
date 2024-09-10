const puppeteer = require("puppeteer");
const timers = require("node:timers/promises");
const path = require("path");
const fs = require("fs");
const env = require("./env");
const { links } = require("./content");

const render = async (links) => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: [ "--no-sandbox" ],
    ignoreDefaultArgs: [ "--disable-extensions" ],
  });
  console.log("Browser opened");

  const page = await browser.newPage();
  console.log("Tab created");

  await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  console.log("Set custom user agent");

  for (let i = 0; i < links.length; i++) {
    console.log("--------------");
    console.log(i + 1, "from", links.length);

    const url = links[i];
    const folder = path.resolve(__dirname + "/../dist/rendered" + url);
    const filePath = folder + "/index.html";

    await page.goto(env.face.host + url);
    console.log("Navigated to: " + env.face.host + url);

    await timers.setTimeout(1000);
    console.log("Waiting 1000");

    const content = (await page.content())
      .replaceAll(/<!--[\s\S]*?-->/g, "")
      .replaceAll(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replaceAll(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
      .replaceAll(/ _ng[a-zA-Z0-9-]*="[^"]*"/g, "")
      .replaceAll(/ ng-[a-zA-Z0-9-]*="[^"]*"/g, "");

    console.log("Content cleaned");

    fs.mkdirSync(folder, { recursive: true });
    console.log("Folder created");

    fs.writeFile(filePath, content, err => {
      if (err) {
        console.log("Error writing file:", filePath, "Reason: ", err);
      }
      console.log("Content written");
    });
    console.log("--------------");
  }

  await browser.close();
  console.log("Browser closed");
};

links().then((links) => {
  render(links);
});

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('https://popcat.click/');

  await new Promise((r) => setTimeout(r, 1000));
  while (true) await page.click('div.cat-img');
})();

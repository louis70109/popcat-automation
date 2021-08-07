const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false,
    args: [ '--use-fake-ui-for-media-stream' ] });
  const page = await browser.newPage();
  await page.goto('https://gather.town/app/fPk72yAiEmUCbLmM/aaa');
  // const startVideoButton = await page.$('#startVideoButton')
  // startVideoButton.click()
  let input = await page.waitForSelector('input[type=text]');
  await input.type('abc');

  // await browser.close();

  await page.click('button[type]');

  await new Promise(r => setTimeout(r, 2000));
  await page.click('button[kind="primary"]');
  await new Promise(r => setTimeout(r, 2000));

  await page.click('button[class="css-1orf3wz"]');

  
})();
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false,
    args: [ '--use-fake-ui-for-media-stream', "--no-sandbox", "--disable-setuid-sandbox" ] });
  const page = await browser.newPage();
  await page.goto('https://gather.town/app/fPk72yAiEmUCbLmM/aaa');

  const previousSession = fs.existsSync('cookies.json')
  if (previousSession) {
    // If file exist load the cookies
    const cookiesString = fs.readFileSync('cookies.json');
    const parsedCookies = JSON.parse(cookiesString);
    if (parsedCookies.length !== 0) {
      for (let cookie of parsedCookies) {
        await page.setCookie(cookie)
      }
      console.log('Session has been loaded in the browser')
    }
  }

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
  await new Promise(r => setTimeout(r, 2000));

  // const cookiesFilePath = 'cookies.json';
  // // Save Session Cookies
  // const cookiesObject = await page.cookies()
  // // Write cookies to temp file to be used in other profile pages
  // fs.writeFile(cookiesFilePath, JSON.stringify(cookiesObject),
  //  function(err) { 
  //   if (err) {
  //   console.log('The file could not be written.', err)
  //   }
  //   console.log('Session has been successfully saved')
  // })

  
  // await page.keyboard.press('ArrowLeft')
  // await page.keyboard.press('ArrowLeft')
  // await page.keyboard.press('ArrowLeft')
  // await page.keyboard.press('ArrowLeft')
  // await page.keyboard.press('ArrowUp')
  console.log(page)
})();
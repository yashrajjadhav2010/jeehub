const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  await page.goto('http://localhost:3000/subjects', { waitUntil: 'domcontentloaded' });
  
  await new Promise(r => setTimeout(r, 3000));
  console.log("Page loaded successfully without timeouts");
  await browser.close();
})();

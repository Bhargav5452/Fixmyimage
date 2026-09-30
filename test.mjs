import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));

  console.log('Navigating to local site...');
  await page.goto('http://localhost:4321');

  // Create a dummy image
  console.log('Creating dummy image...');
  await page.evaluate(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1000;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 1000, 1000);
    canvas.toBlob((blob) => {
      const file = new File([blob], "test.jpg", { type: "image/jpeg" });
      const dt = new DataTransfer();
      dt.items.add(file);
      document.querySelector('#file-input').files = dt.files;
      const event = new Event('change', { bubbles: true });
      document.querySelector('#file-input').dispatchEvent(event);
    }, 'image/jpeg');
  });

  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Clicking compress button...');
  await page.click('#btn-compress');

  await new Promise(r => setTimeout(r, 3000));
  
  const errorText = await page.$eval('#error-message', el => el.textContent).catch(() => null);
  console.log('Error UI text:', errorText);

  await browser.close();
})();

const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.amazon.in/Samsung-inch-Curved-Computer-Monitor/dp/B097398XP4/ref=sr_1_1_sspa?crid=1MWAMGO95ISO5&keywords=curved%2Bmonitor&qid=1656229322&sprefix=curved%2Caps%2C208&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFQSkNKMUJVUUUwOEcmZW5jcnlwdGVkSWQ9QTAzOTE2NjQyMEFINU8zSU4yNExXJmVuY3J5cHRlZEFkSWQ9QTEwMjY1NTgzMVBGRU1VU0tWVkpRJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ&th=1';

async function scrape() {
  // read web page
  const {data} = await axios.get(url);
  const page_data = cheerio.load(data);

  const targetContainer = page_data('div#dp-container');

  const productName = page_data(targetContainer).find("h1 span#productTitle").text();
  const productPrice = page_data(targetContainer).find("span.a-price-whole").first().text().replace(/[,.]/g, '');

  console.log({productName,productPrice})
}

scrape();
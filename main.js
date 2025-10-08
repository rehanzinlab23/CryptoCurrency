const apiLinks = [
  'https://api.api-ninjas.com/v1/cryptoprice?symbol=BTCUSD&X-Api-Key=51Bj2JwroBIVUXPGhGEzVg==aMtKihftqNgtV72L',
  'https://api.api-ninjas.com/v1/cryptoprice?symbol=ETHUSD&X-Api-Key=51Bj2JwroBIVUXPGhGEzVg==aMtKihftqNgtV72L',
  'https://api.api-ninjas.com/v1/cryptoprice?symbol=DOGEUSD&X-Api-Key=51Bj2JwroBIVUXPGhGEzVg==aMtKihftqNgtV72L'
];

const btc = document.getElementById('bitcoin');

const eth = document.getElementById('ethereum');

const doge = document.getElementById('dogecoin');

const apiKey = '51Bj2JwroBIVUXPGhGEzVg==aMtKihftqNgtV72L';

async function fetchAllAPIs() {
  try {
    const responses = await Promise.all(
      apiLinks.map(url => fetch(url, { headers: { 'X-Api-Key': apiKey } }))
    );

    const data = await Promise.all(responses.map(res => res.json()));

    const btcPrice = parseFloat(data[0].price).toFixed(2);
    const ethPrice = parseFloat(data[1].price).toFixed(2);
    const dogePrice = parseFloat(data[2].price).toFixed(4);


    btc.innerHTML = `${btcPrice}`;
    eth.innerHTML = `${ethPrice}`;
    doge.innerHTML = `${dogePrice}`;

  } catch (error) {
    console.error('Error fetching APIs:', error);
  }
}

fetchAllAPIs();
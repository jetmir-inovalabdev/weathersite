async function getLatestCryptocurrencyListings(url) {
    // Default options are marked with *

    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json',
          'X-CMC_PRO_API_KEY':'42aca7ab-c1ba-4b97-8ede-d6a04d97da26'
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });

    return response.json(); // parses JSON response into native JavaScript objects
  }

  getLatestCryptocurrencyListings('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest')
    .then((response) => {
        console.log(response);
    })
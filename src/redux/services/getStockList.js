export default function getStockList() {
  let URL = '';
  const CORSproxyURL = 'https://frozen-lake-26505.herokuapp.com/';
  // const CORSproxyURL = 'https://glacial-island-44066.herokuapp.com/'
  URL += CORSproxyURL;

  const APIserverBaseURL = 'https://financialmodelingprep.com/';
  URL += APIserverBaseURL;

  const APIserverResource = 'api/v3/stock-screener?';
  URL += APIserverResource;

  const APIlogin = 'apikey=dac6f60dd17c66173752bde6a06cffec';
  // const APIlogin = 'apikey=ee7a46a70a081cf2f588caa46c033288'
  URL += APIlogin;

  const limit = '&limit=3000';
  URL += limit;

  return fetch(URL).then(response => response.json());
}

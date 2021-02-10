import sample from './stockListSample'


export default function getStockList(options) {
  if (options === 'sample'){    
    const promise =  new Promise( resolve => {
      setTimeout(resolve(sample),2000)
    });
    return promise;
  }

  // const CORSproxyURL = "https://frozen-lake-26505.herokuapp.com/";
  // const APIserverBaseURL = 'https://financialmodelingprep.com/'
  // const APIserverResource = 'api/v3/stock-screener?';
  // const APIlogin = 'apikey=dac6f60dd17c66173752bde6a06cffec'
  // const limit = '&limit=50'
  // const URL = CORSproxyURL + APIserverBaseURL + APIserverResource + APIlogin + limit;  


  // const CORSproxyURL = "https://frozen-lake-26505.herokuapp.com/";
  // //const CORSproxyURL = 'https://glacial-island-44066.herokuapp.com/'
  // const APIserverBaseURL = 'https://financialmodelingprep.com/'
  // const APIserverResource = 'api/v3/stock-screener?';
  // const APIlogin = 'apikey=dac6f60dd17c66173752bde6a06cffec'
  // //const APIlogin = 'ee7a46a70a081cf2f588caa46c033288'
  // const limit = '&limit=50'
  // const URL = CORSproxyURL 
  //   + APIserverBaseURL 
  //   + APIserverResource 
  //   + APIlogin 
  //   + limit; 
  // console.log(URL)
  // fetch(URL).then(response => response.json())
}
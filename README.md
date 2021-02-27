# Catalogue of Stocks
  A catalog of stocks from different exchanges.  
  - Fetches stocks from the financialmodelingprep.com API
  - Filter stocks by
    - sector
    - industry
    - country
  - It does the filtering without making new request to any server nor refreshing the page.
  - Let's you see individual stocks without making new requests to any server nor refreshing the page.

## Demo

![](/README/1.png)

## [Live Version](https://api-react-ivanderlich.herokuapp.com/)

## Instalation

    git clone https://github.com/IvanDerlich/catalogue-of-stocks

    cd catalogue-of-stocks

    npm install

    npm start

## For initialize(mode) action funtion

  The function is locate in src/actions/index.js

### Adjust the parameter of the initialize function to:
  - 'offline': consumes a stockList from src/actions/stockList.js
    this mode is used for testing, otherwise tests fail.
  - 'API': Calls the financialmodelingprep.com API
    Calling the API more than aproximately 250 times a day can result in blocking for a day.
    If this happens you should change:
      - APIkey and
      - proxy server URL
    services/getStockList file.
    If you just change just one parameter, the new-non-blocked parameter
    will be blocked too.

## Technologies used

  - React
  - Redux

## Author

[Ivan Derlich](https://www.ivanderlich.com)

## Ackownledgments
  
- [Microverse](https://www.microverse.org/):   This project is part of the Microverse JavaScript curriculum!
- The builders of the technologies we take for granted while programming applications like this one.
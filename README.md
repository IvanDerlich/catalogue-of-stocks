# Catalogue of Stocks
  A catalog of stocks from different exchanges.

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
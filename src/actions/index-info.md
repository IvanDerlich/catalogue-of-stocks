# For initialize funtion

## Adjust the parameter of the initialize function to:
  - 'offline': consumes a stockList from src/actions/stockList.js
    this mode is used for testing, otherwise tests fail.
  - 'API': Calls the financialmodelingprep.com API
    Calling the API many times (¿250/day?)can result in blocking for a day.
    If this happens you should change:
      - APIkey
      and
      - proxy server URL
    services/getStockList file.
    If you just change just one parameter, the new-non-blocked parameter
    will be blocked too.

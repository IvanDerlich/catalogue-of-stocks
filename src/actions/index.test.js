import {
  initialize,
  retrieveSingleStock,
  changeFilter,
  retrieveFilteredStocks,
} from './index'

import {
  stock3,
  expectedIndustryList,
  expectedAppleStock,
  expectedMicrosoftStock,
  expectedFacebookStock
} from './indexdictionary.test'

test('Multiple tests with one store', async () => {
  const store = await initialize('offline')
  expect(
    store
    .getState()
    .stockList.length
  ).toBe(50)

  expect(retrieveSingleStock(store,'AAPL'))
    .toStrictEqual(expectedAppleStock) 

  expect(retrieveSingleStock(store,'MSFT'))
    .toStrictEqual(expectedMicrosoftStock) 

  expect(retrieveSingleStock(store,'FB'))
    .toStrictEqual(expectedFacebookStock) 

  expect(
    store
    .getState()
    .stockList[3]
  ).toStrictEqual(stock3)

  expect(
    store
    .getState()
    .industryList
  ).toStrictEqual(expectedIndustryList)



  // let stocks = retrieveFilteredStocks(store)
  // expect(stocks.length).toBe(50)
  
  // let industryFilterValue = 'Industry One'
  // changeFilter(store,'industry',industryFilterValue)   
  // expect(store.getState().industryFilter).toEqual(industryFilterValue)

  // stocks = retrieveFilteredStocks(store)
  // expect(stocks.length).toBe(0)

  // industryFilterValue = 'ANY'
  // changeFilter(store,'industry',industryFilterValue)   
  // expect(store.getState().industryFilter).toEqual(industryFilterValue)

  // stocks = retrieveFilteredStocks(store)
  // expect(stocks.length).toBe(50)

  // console.log(stocks)
  
  // const sectorFilterValue = 'Sector One'
  // changeFilter(store,'sector',sectorFilterValue)
  // expect(store.getState().sectorFilter).toEqual(sectorFilterValue)

  // const countryFilterValue = 'Country One'
  // changeFilter(store,'country',countryFilterValue)
  // expect(store.getState().countryFilter).toEqual(countryFilterValue)

  // stocks = retrieveFilteredStocks(store)
  // console.log('Stock Length')
  // console.log(stocks.length)
  // expect(stocks.length).toBe(0)
 
});
import {
  INITIALIZE,
  RETRIEVE_SINGLE_STOCK,
  CHANGE_COUNTRY_FILTER,
  CHANGE_SECTOR_FILTER,
  CHANGE_INDUSTRY_FILTER,
} from './index'

import {
  stock3,
  expectedIndustryList,
  expectedAppleStock,
  expectedMicrosoftStock,
  expectedFacebookStock
} from './indexdictionary.test'

test('Multiple tests with one store', async () => {
  const store = await INITIALIZE('offline')
  const state = store.getState()
  expect(state.stockList.length).toBe(50)

  expect(state.stockList[3]).toStrictEqual(stock3)

  expect(state.industryList).toStrictEqual(expectedIndustryList)


  expect(RETRIEVE_SINGLE_STOCK(store,'AAPL'))
    .toStrictEqual(expectedAppleStock) 

  expect(RETRIEVE_SINGLE_STOCK(store,'MSFT'))
    .toStrictEqual(expectedMicrosoftStock) 

  expect(RETRIEVE_SINGLE_STOCK(store,'FB'))
    .toStrictEqual(expectedFacebookStock) 
  
  CHANGE_INDUSTRY_FILTER(store,'rrrr');
  console.log('IndustryFilter')
  console.log(state.industryFilter)

  CHANGE_SECTOR_FILTER(store,'tttt')

  CHANGE_COUNTRY_FILTER(store,'eeeee')
  
});
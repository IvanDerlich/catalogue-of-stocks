import {
  initialize,
  retrieveSingleStock,
  retrieveFilteredStocks,
  clearFilters
} from '../actions/index'

import {
  stock3,
  expectedIndustryList,
  expectedAppleStock,
  expectedMicrosoftStock,
  expectedFacebookStock
} from './dictionary'

import filterAndRetrieve from './filterAndRetrive'

describe('Multiple tests with one store', () => {
  let store;

  beforeAll( async() => {
    store = await initialize('offline') 
  });

  describe('Initialization:', () => {
    
    test('Correct ammount of stocks',()=> {
      expect(
        store
        .getState()
        .stockList.length
      ).toBe(50)
    })
    test('check retrieveSingleStock() return the right stock', () => {

      console.log(store.getState().stockList[3])
      console.log(stock3)

      expect(
        store
        .getState()
        .stockList[3]
      ).toStrictEqual(stock3)     

     
      expect(
        retrieveSingleStock(store,'AAPL')
      )
        .toStrictEqual(expectedAppleStock) 
  
      expect(retrieveSingleStock(store,'MSFT'))
        .toStrictEqual(expectedMicrosoftStock) 
  
      expect(retrieveSingleStock(store,'FB'))
      . toStrictEqual(expectedFacebookStock) 
    })

    test('Correct Industry list', () => {
      expect(
        store
        .getState()
        .industryList
      ).toStrictEqual(expectedIndustryList)
    })       
  })
  describe('Change filter to "value" and see how many stocks it returns', () => {
     describe('industryFilter', ()=>{
      test('"Industry One" returns zero', ()=> {     
        filterAndRetrieve(store,'industry', 'Industry One',0)
      })
      test('"ANY" returns all', ()=> {     
        filterAndRetrieve(store,'industry', 'ANY',50)
      })
      test('"NOT SPECIFIED" returns 3', ()=> {   
        filterAndRetrieve(store,'industry', 'NOT SPECIFIED',6)              
      })
      test('"Credit Services" returns 3', ()=> {   
        filterAndRetrieve(store,'industry', 'Credit Services',3)              
      })

     })
    
    describe('sectorFilter',()=>{
      test('"Sector One" returns zero', ()=> {
        filterAndRetrieve(store,'sector', 'Sector One',0)
      })
      test('"ANY" returns all', ()=> {     
        filterAndRetrieve(store,'sector', 'ANY',50)
      })      
      test('"NOT SPECIFIED" returns 6', ()=> {              
        filterAndRetrieve(store,'sector', 'NOT SPECIFIED',6)
      })      
    })
    describe('countryFilter',()=>{
      test('"Country One" returns zero', ()=> {
        filterAndRetrieve(store,'country', 'Country One',0)
      })
      test('"ANY" returns all', ()=> {     
        filterAndRetrieve(store,'country', 'ANY',50)
      })
      test('"NOT SPECIFIED" returns 2', ()=> {  
        filterAndRetrieve(store,'country', 'NOT SPECIFIED',2)
      })
      test('"US" returns 37', ()=> {      
        filterAndRetrieve(store,'country', 'US',37)
      })
      test('"CN" returns 3', ()=> {    
        filterAndRetrieve(store,'country', 'CN',3)
      })
    })    
    describe('clear filters', () => {
      test('Clear filters', ()=> {          
        filterAndRetrieve(store,'industry', 'Credit Services',3)
        clearFilters(store)
        const stocks = retrieveFilteredStocks(store)        
        expect(stocks.length).toBe(50)
      })
    })
  }) 
})

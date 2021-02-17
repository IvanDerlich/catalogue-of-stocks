const stock3 = { 
  symbol: 'AMZN',
  companyName: 'Amazon.com Inc',
  marketCap: 1655006690000,
  sector: 'Consumer Cyclical',
  industry: 'Internet Retail',
  beta: 1.28733,
  price: 3286.58,
  lastAnnualDividend: 0,
  volume: 3780322,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true 
}

const expectedIndustryList = [ 
'NOT SPECIFIED',
'Software Infrastructure',
'Internet Retail',
'Internet Content & Information',
'Auto Manufacturers',
'Semiconductors',
'Insurance Diversified',
'Consumer Electronics',
'Credit Services',
'Drug Manufacturers General',
'Banks Diversified',
'Discount Stores',
'Entertainment',
'Packaged Foods',
'Luxury Goods',
'Health Care Plans',
'Household & Personal Products',
'Home Improvement Retail',
'Semiconductor Equipment & Materials',
'Telecom Services',
'Software Application',
'Footwear & Accessories',
'Medical Devices' 
]

const expectedAppleStock = { 
  symbol: 'AAPL',
  companyName: 'Apple Inc',
  marketCap: 2272940790000,
  sector: 'Technology',
  industry: 'Consumer Electronics',
  beta: 1.33758,
  price: 135.39,
  lastAnnualDividend: 0.82,
  volume: 104997270,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true 
}

const expectedMicrosoftStock = {
  symbol: 'MSFT',
  companyName: 'Microsoft Corp',
  marketCap: 1831401820000,
  sector: 'Technology',
  industry: 'Software Infrastructure',
  beta: 0.85519,
  price: 242.82,
  lastAnnualDividend: 2.6500000000000004,
  volume: 28798229,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true 
}

const expectedFacebookStock = {
 symbol: 'FB',
  companyName: 'Facebook Inc',
  marketCap: 774196040000,
  sector: 'Communication Services',
  industry: 'Internet Content & Information',
  beta: 1.27231,
  price: 271.87,
  lastAnnualDividend: 0,
  volume: 18409706,
  exchange: 'Nasdaq Global Select',
  exchangeShortName: 'NASDAQ',
  country: 'US',
  isEtf: false,
  isActivelyTrading: true 
}

export {
  stock3,
  expectedIndustryList,
  expectedAppleStock,
  expectedMicrosoftStock,
  expectedFacebookStock
}

test('Dummy test', async () => {  
})
import './App.css';
import { useState, useEffect } from 'react';
// import { createStore } from 'redux';
// import mainReducer from './reducers/index';
import StockList from './StockList'
import getStockList from '../services/getStockList'

function App() {
  const [stockList, setStockList ] = useState([])
  const [industryList, setIndustryList ] = useState([])
  const [countryList, setCountryList ] = useState([])
  const [sectorList, setSectorList ] = useState([])

  const getUniqueValuesFromList = (list, propertyName) => {
    let aux = [];
    list.forEach(item => {
      if(!aux.includes(item[propertyName])){
        aux.push(item[propertyName])
      }          
    })
    return aux;
  }

   useEffect(() => {   
    getStockList('offline')
      .then(list => {
        setStockList(list)         

        const industries = getUniqueValuesFromList(list,'industry')
        setIndustryList(industries)

        let sectors = getUniqueValuesFromList(list,'sector');
        setSectorList(sectors)

        let country = getUniqueValuesFromList(list,'country');
        setCountryList(country)  
      }) 
  }, []);

  if (stockList.length !== 0){      
    return(
      <div>
        <div>Industries</div>
        <div>{industryList}</div>
        <div>Sectors</div>
        <div>{sectorList}</div>
        <div>Countries</div>
        <div>{countryList}</div>
        <StockList stockList={stockList}/>      
        
      </div>
    )
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <div>Fetching stocks...</div>      
        </header>
      </div>
    );
  }
}

export default App;

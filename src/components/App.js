import './App.css';
import { useState, useEffect } from 'react';
// import { createStore } from 'redux';
// import mainReducer from './reducers/index';
import StockList from '../containers/StockList'
import getStockList from '../services/getStockList'

function App() {
  const [stockList, setStockList ] = useState([])
  const [industryList, setIndustryList ] = useState([])
  const [countryList, setCountryList ] = useState([])
  const [sectorList, setSectorList ] = useState([])

  const getUniqueValuesFromList = (list, propertyName) => {
    let array = [];
    let value = ""
    list.forEach(item => {
      value = item[propertyName]     
      if(!array.includes(value)){
        array.push(value)
      }          
    })    
    const aux = array[0]
    array[0]= 'NOT SPECIFIED'
    const index = array.indexOf('')
    array[index] = aux
    return array;
  }

  const displaySelect = (list, propertyName) =>{
    return (
      <div>
        <div>{propertyName.replace(/^\w/, (c) => c.toUpperCase())}</div>
        <select name={propertyName}>
          <option>--- Select Value ---</option>
          {list.map(item => <option value={item}>{item}</option>)}
        </select>
      </div>
    )
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
        {displaySelect(industryList,'industries')}
        {displaySelect(sectorList,'sectors')}
        {displaySelect(countryList,'countries')}  
        <StockList stockList={stockList}></StockList>        
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

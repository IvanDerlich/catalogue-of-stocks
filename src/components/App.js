import './App.css';
import { useState, useEffect } from 'react';
import {
  initialize
} from '../actions/index'
import StockList from '../containers/StockList'

function App() {
  const [store, setStore ] = useState(null) 


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
    initialize('offline')
      .then(store => {
        setStore(store)
      }) 
  }, []);

  if (store){  
    const {
      industryList,
      stockList,
      sectorList,
      countryList,
    } = store.getState()    
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

import './App.css';
import { useState, useEffect } from 'react';
import {
  initialize,
  retrieveFilteredStocks
} from '../actions/index'
import StockList from '../containers/StockList'
import Filters from './Filters'

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
    const stockList = retrieveFilteredStocks(store)
    return(
      <div>   
        <Filters store={store}/>
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

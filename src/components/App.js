import './App.css';
import { useState, useEffect } from 'react';
// import { createStore } from 'redux';
// import mainReducer from './reducers/index';
import getStockList from '../services/getStockList'

function App({URL}) {
  const [stockList, setStockList ] = useState([])
  console.log('render');
  console.log(URL);

  useEffect(()=>{
    console.log('Mount')
  },[])

  useEffect(() => {   
    getStockList('sample')
      .then(result => {
        console.log(result)
      }) 
  }, []);
  // const store = createStore(mainReducer, initialState);

  if (stockList.length !== 0){      
    return(
      <div>
        Stocks Fetched!
        {JSON.stringify(stockList)}
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

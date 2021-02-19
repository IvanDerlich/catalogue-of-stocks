import './App.css';
import { useState, useEffect } from 'react';
import {initialize} from '../actions/index'
import StockList from '../containers/StockList'
import Filters from '../containers/Filters'

function App() {
  const [store, setStore ] = useState(null) 

   useEffect(() => {   
    initialize('offline')
      .then(store => {
        setStore(store)        
      })
  }, []);

  if (store){
    console.log('In App')
    console.log(store)
    return(
      <div>   
        <Filters store={store}/>
        <StockList store={store}/>
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

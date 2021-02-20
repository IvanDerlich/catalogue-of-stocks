import Stock from '../components/Stock'
import {retrieveFilteredStocks} from '../actions/index'
import { useState, useCallback } from 'react'

function StockList({store}) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  store.subscribe(()=>{ forceUpdate() })
  const stockList = retrieveFilteredStocks(store)
  const length = stockList.length

  return (
    <div>
      <hr/>
      <div>Fetched {length} stocks</div>
      {stockList.map((stock, index) => {      
        return (<Stock 
          key={index}
          number={index+1}          
          stock={stock}/>)
      })}      
    </div>  
  )
}

export default StockList
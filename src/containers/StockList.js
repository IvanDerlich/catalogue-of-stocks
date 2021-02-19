import Stock from '../components/Stock'
import {retrieveFilteredStocks} from '../actions/index'
import { useState, useCallback } from 'react'

function StockList({store}) {
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  store.subscribe(()=>{ forceUpdate() })
  const stockList = retrieveFilteredStocks(store)
  console.log('In Stocks')
  console.log(store.getState())
  return (
    <div>
      {stockList.map((stock, index) => {
        return (<Stock key={index} stock={stock}/>)
      })}      
    </div>  
  )
}

export default StockList